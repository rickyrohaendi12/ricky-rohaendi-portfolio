# Observability: Prometheus + Grafana (kube-prometheus-stack)
#
# Memakai provider "helm" yang sudah dikonfigurasi untuk cluster kind.
# Jika release Traefik/Argo CD Anda memakai depends_on ke resource cluster,
# tambahkan depends_on yang sama di bawah ini.

variable "kube_prometheus_stack_version" {
  description = "Chart version of prometheus-community/kube-prometheus-stack"
  type        = string
  default     = "91.9.0"
}

resource "helm_release" "kube_prometheus_stack" {
  name             = "kube-prometheus-stack"
  namespace        = "monitoring"
  create_namespace = true
  repository       = "https://prometheus-community.github.io/helm-charts"
  chart            = "kube-prometheus-stack"
  version          = var.kube_prometheus_stack_version
  timeout          = 900

  values = [
    <<-EOT
    # Footprint kecil untuk cluster kind di laptop.
    alertmanager:
      enabled: false

    # node-exporter sering gagal di Docker Desktop (mount propagation), jadi dimatikan.
    nodeExporter:
      enabled: false

    # Komponen control plane tidak bisa di-scrape di kind, jadi target ini dimatikan
    # supaya tidak muncul sebagai target "down".
    kubeEtcd:
      enabled: false
    kubeControllerManager:
      enabled: false
    kubeScheduler:
      enabled: false
    kubeProxy:
      enabled: false

    grafana:
      enabled: true

    prometheus:
      prometheusSpec:
        retention: 2d
        resources:
          requests:
            cpu: 100m
            memory: 400Mi
          limits:
            memory: 800Mi
        # Izinkan Prometheus menemukan ServiceMonitor/PodMonitor di namespace mana pun.
        serviceMonitorSelectorNilUsesHelmValues: false
        podMonitorSelectorNilUsesHelmValues: false
    EOT
  ]
}
