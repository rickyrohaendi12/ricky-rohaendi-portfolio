resource "helm_release" "argocd" {
  name             = "argocd"
  repository       = "https://argoproj.github.io/argo-helm"
  chart            = "argo-cd"
  version          = var.argocd_chart_version
  namespace        = "argocd"
  create_namespace = true
  wait             = true
  timeout          = 600

  values = [
    yamlencode({
      configs = {
        params = {
          # Plain HTTP inside the cluster; TLS is terminated at the ingress.
          "server.insecure" = true
        }
      }

      # Keep the footprint small for a local cluster.
      dex           = { enabled = false }
      notifications = { enabled = false }
    })
  ]

  depends_on = [helm_release.traefik]
}