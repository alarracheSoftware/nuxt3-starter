FROM node:23.5.0-alpine3.20 AS base

LABEL maintainer="felixleo22"

FROM base AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM base
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/.output /usr/src/app

ENV NUXT_PUBLIC_ENVIRONMENT=${NUXT_PUBLIC_ENVIRONMENT} \
  NUXT_PUBLIC_VERSION=${NUXT_PUBLIC_VERSION} \
  NUXT_PUBLIC_APIURL=${NUXT_PUBLIC_APIURL} \
  NUXT_PUBLIC_GITHUB_PROFILE_URL=${NUXT_PUBLIC_GITHUB_PROFILE_URL} \
  NUXT_PUBLIC_GITHUB_REPO_URL=${NUXT_PUBLIC_GITHUB_REPO_URL}
  
HEALTHCHECK --interval=15s --timeout=10s --retries=5 --start-period=20s \
CMD wget -Y off --no-verbose --tries=1 --spider http://localhost:3000 || exit 1

RUN addgroup -g 1001 1001 && adduser -u 1001 -G 1001 -S 1001
RUN rm -f /bin/bash && rm -f /bin/sh
      
USER 1001

EXPOSE 3000

ENTRYPOINT [ "node", "/usr/src/app/server/index.mjs" ]