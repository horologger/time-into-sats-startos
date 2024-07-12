#FROM node:18-slim
#FROM node:18-alpine
FROM horologger/time-into-sats:v0.0.6

LABEL maintainer="horologger <horologger@protonmail.com>"

# Start9 Packaging
RUN apk add --no-cache yq; \
    rm -f /var/cache/apk/*

COPY --chmod=755 docker_entrypoint.sh /usr/local/bin/
