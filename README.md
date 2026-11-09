# 🚀 Ricky Rohaendi — Portfolio Website

![CI](https://github.com/rickyrohaendi12/ricky-rohaendi-portfolio/actions/workflows/ci.yml/badge.svg)

Welcome to my personal portfolio website! This project showcases my journey as a developer & designer through modern web experiences, UI/UX exploration, and real-world projects.

🌐 **Live Website:** [ricky-rohaendi-portfolio.vercel.app](https://ricky-rohaendi-portfolio.vercel.app)

> This repository is also my **DevOps playground**: the site is containerized, built and scanned by a CI/CD pipeline, published as a public image, and described with Kubernetes manifests that are validated on every PR. A local Kubernetes platform is provisioned with Terraform and kept in sync from Git by Argo CD.

## ✨ About

This portfolio was built to represent who I am, what I create, and how I solve problems through technology and design. Inside this website, you'll find:

- Personal introduction
- Selected projects & case studies
- UI/UX design explorations
- Skills & technologies
- Contact information

## 🛠️ Tech Stack

| Layer         | Technology                                                  |
| ------------- | ----------------------------------------------------------- |
| Frontend      | React, TypeScript, Vite, Tailwind CSS, Framer Motion        |
| Hosting       | Vercel (live site)                                          |
| Container     | Docker (multi-stage), Nginx unprivileged                    |
| Orchestration | Kubernetes manifests with Kustomize (dev and prod overlays) |
| IaC           | Terraform (kind and Helm providers)                         |
| GitOps        | Argo CD                                                     |
| Ingress       | Traefik                                                     |
| CI/CD         | GitHub Actions                                              |
| Security      | Trivy (image and IaC scan), Gitleaks, Dependabot            |
| Validation    | kubeconform, terraform fmt and validate                     |
| Registry      | GitHub Container Registry (GHCR)                            |

## 🎨 Features

- Responsive modern UI
- Smooth animations & transitions
- Clean and minimal design
- Optimized performance
- Mobile-friendly experience

## 📂 Projects Highlight

- E-Commerce Design
- Tour & Travel Project
- UI/UX Exploration
- Web Development Projects
- Creative Landing Pages

## ⚙️ DevOps

### Architecture

```mermaid
flowchart LR
  Dev[Developer] -->|push / PR| GH[GitHub]
  GH --> CI[GitHub Actions]
  CI --> T[Lint + Typecheck + Build]
  CI --> S[Gitleaks]
  CI --> K[Kustomize build + kubeconform]
  CI --> TF[terraform fmt + validate + Trivy config]
  T --> D[Docker build]
  S --> D
  K --> D
  D --> V[Trivy image scan]
  V -->|pass, main only| R[(GHCR image)]
  TFA[Terraform apply] --> C[kind cluster + Traefik + Argo CD]
  GH -.->|k8s/overlays/dev| A[Argo CD]
  A -->|sync| C
```

### CI/CD pipeline

1. **test**: `npm ci`, lint, `tsc --noEmit`, tests, build.
2. **secret-scan**: Gitleaks scans the full commit history.
3. **k8s-validate**: renders every Kustomize overlay with `kubectl kustomize` and validates the output against Kubernetes schemas with `kubeconform`.
4. **terraform-validate**: `terraform fmt -check`, `terraform init` (with retry), `terraform validate`, and a Trivy config scan of the Terraform code.
5. **docker**: runs after `test`, `secret-scan`, and `k8s-validate` pass. It builds the image, scans it with Trivy (fails on fixable HIGH/CRITICAL findings), and pushes to GHCR only on `main`.
6. **Dependabot** opens weekly PRs for npm, Docker, and GitHub Actions dependencies.

### Run with Docker

```bash
docker compose up --build
# open http://localhost:8080
```

Health check:

```bash
curl http://localhost:8080/health
```

### Run without Docker

```bash
npm ci
npm run dev
```

### Kubernetes

Manifests live in `k8s/` and are managed with Kustomize, with separate `dev` and `prod` overlays.

Render an overlay locally:

```bash
kubectl kustomize k8s/overlays/dev
kubectl kustomize k8s/overlays/prod
```

CI renders both overlays and validates them with kubeconform on every PR, so a broken manifest blocks the image push.

### Infrastructure as Code (Terraform)

The `terraform/` directory provisions a local Kubernetes platform:

- a **kind** cluster
- **Traefik** as the ingress controller
- **Argo CD** for GitOps

```bash
cd terraform
terraform init
terraform plan
terraform apply
```

Tear everything down with `terraform destroy`.

### GitOps (Argo CD)

An Argo CD `Application` keeps the `dev` overlay (`k8s/overlays/dev`) in sync with this repository, so the cluster state follows what is committed to Git.

### Technical decisions

- **Multi-stage build:** the final image contains only Nginx and the static build output, with no Node.js and no source code, keeping it small and reducing the attack surface.
- **Non-root, locked-down runtime:** the container runs as a non-root user with a read-only filesystem, all Linux capabilities dropped, and `no-new-privileges` enabled. The Kubernetes Deployment applies the same restrictions.
- **Layer caching:** dependencies are installed in a separate stage so rebuilds stay fast.
- **Health endpoint:** `/health` backs the Docker `HEALTHCHECK` and the Kubernetes readiness and liveness probes.
- **No secrets in the image:** this site needs no API keys at build or run time.
- **Manifests are validated before shipping:** the image is only built and pushed after the Kubernetes overlays render and pass schema validation.
- **Resilient CI downloads:** the `kubeconform` binary is fetched with retries, verified against a SHA-256 checksum, and cached, so a GitHub outage is far less likely to break the pipeline.
- **Traefik instead of ingress-nginx:** the Kubernetes project retired ingress-nginx in March 2026, so it is no longer a safe choice for new setups.

### Roadmap

- [x] Dockerfile, Nginx config, and docker-compose
- [x] CI pipeline with Gitleaks and Trivy
- [x] Dependabot
- [x] Kubernetes manifests with Kustomize (dev and prod overlays)
- [x] Manifest validation in CI (kubectl kustomize + kubeconform)
- [x] Terraform: local kind cluster + Traefik ingress
- [x] Terraform: Argo CD installation
- [x] GitOps: Argo CD Application for the dev overlay
- [x] IaC validation in CI (terraform fmt and validate + Trivy config)
- [ ] Observability with Prometheus and Grafana
- [ ] Automated image tag promotion (CI updates the Kustomize tag, Argo CD syncs)
- [ ] Pin GitHub Actions to commit SHAs (supply-chain hardening)

## 📬 Contact

Feel free to connect or collaborate with me:

- Email: rickyrohaendi1@gmail.com
- LinkedIn: [linkedin.com/in/ricky-rohaendi](https://www.linkedin.com/in/ricky-rohaendi/)
- GitHub: [github.com/rickyrohaendi12](https://github.com/rickyrohaendi12)

## 📌 Note

This portfolio will continue to evolve as I learn, build, and explore new technologies.

---

⭐ If you like this project, feel free to give it a star and support my journey!
