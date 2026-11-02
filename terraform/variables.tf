variable "cluster_name" {
  type        = string
  description = "Name of the local kind cluster."
  default     = "portfolio"
}

variable "kubeconfig_path" {
  type        = string
  description = "Where the cluster kubeconfig is written (kept separate from ~/.kube/config)."
  default     = "./kubeconfig-kind"
}

variable "http_host_port" {
  type        = number
  description = "Host port mapped to the ingress controller HTTP port."
  default     = 80
}

variable "https_host_port" {
  type        = number
  description = "Host port mapped to the ingress controller HTTPS port."
  default     = 443
}

variable "traefik_chart_version" {
  type        = string
  description = "Version of the Traefik Helm chart."
  default     = "42.1.3"
}