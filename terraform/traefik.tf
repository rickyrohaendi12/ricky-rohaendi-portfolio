resource "helm_release" "traefik" {
  name             = "traefik"
  repository       = "https://traefik.github.io/charts"
  chart            = "traefik"
  version          = var.traefik_chart_version
  namespace        = "traefik"
  create_namespace = true
  wait             = true
  timeout          = 300

  values = [
    yamlencode({
      deployment = {
        replicas = 1
      }

      # Bind straight to the node ports that kind maps to the host.
      ports = {
        web       = { hostPort = 80 }
        websecure = { hostPort = 443 }
      }

      # kind has no LoadBalancer provider, so keep the Service cluster-internal.
      service = {
        spec = {
          type = "ClusterIP"
        }
      }

      # Publish a fixed address on Ingress objects. Without it Argo CD
      # reports Ingress resources as Progressing forever on kind.
      providers = {
        kubernetesIngress = {
          publishedService = { enabled = false }
          ingressEndpoint  = { ip = "127.0.0.1" }
        }
      }

      # Single replica bound to hostPort 80/443: stop the old pod first,
      # otherwise the new pod cannot be scheduled on the same node.
      updateStrategy = {
        type = "RollingUpdate"
        rollingUpdate = {
          maxUnavailable = 1
          maxSurge       = 0
        }
      }

      # Run on the control-plane node, the one that has the host port mappings.
      nodeSelector = {
        "ingress-ready" = "true"
      }

      tolerations = [
        {
          key      = "node-role.kubernetes.io/control-plane"
          operator = "Equal"
          effect   = "NoSchedule"
        }
      ]
    })
  ]

  depends_on = [kind_cluster.this]
}