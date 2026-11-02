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

      service = {
        spec = {
          type = "ClusterIP"
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