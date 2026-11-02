provider "kind" {}

provider "helm" {
  kubernetes {
    host                   = kind_cluster.this.endpoint
    cluster_ca_certificate = kind_cluster.this.cluster_ca_certificate
    client_certificate     = kind_cluster.this.client_certificate
    client_key             = kind_cluster.this.client_key
  }
}

resource "kind_cluster" "this" {
  name            = var.cluster_name
  kubeconfig_path = abspath(var.kubeconfig_path)
  wait_for_ready  = true

  kind_config {
    kind        = "Cluster"
    api_version = "kind.x-k8s.io/v1alpha4"

    node {
      role = "control-plane"

      # Lets the ingress controller be scheduled on this node.
      kubeadm_config_patches = [
        "kind: InitConfiguration\nnodeRegistration:\n  kubeletExtraArgs:\n    node-labels: \"ingress-ready=true\"\n"
      ]

      extra_port_mappings {
        container_port = 80
        host_port      = var.http_host_port
      }

      extra_port_mappings {
        container_port = 443
        host_port      = var.https_host_port
      }
    }

    node {
      role = "worker"
    }
  }
}