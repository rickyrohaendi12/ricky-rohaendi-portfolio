# syntax=docker/dockerfile:1

# ---------- Stage 1: install dependencies ----------
# Dipisah supaya layer node_modules bisa di-cache selama
# package.json / package-lock.json tidak berubah.
FROM node:25-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---------- Stage 2: build aplikasi ----------
FROM node:25-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# ---------- Stage 3: runtime ----------
# Image akhir hanya berisi Nginx + file statis hasil build (tanpa Node, tanpa source).
# nginx-unprivileged berjalan sebagai user non-root dan listen di port 8080.
FROM nginxinc/nginx-unprivileged:1.31-alpine AS runtime


# Perbarui paket sistem agar kerentanan yang sudah punya perbaikan tertambal.
USER root
# Diisi CI dengan tanggal hari ini supaya layer ini tidak memakai cache lama
# dan patch keamanan terbaru dari repositori Alpine selalu terambil.
ARG APK_REFRESH=manual
RUN echo "apk refresh: ${APK_REFRESH}" && apk upgrade --no-cache
USER 101

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
