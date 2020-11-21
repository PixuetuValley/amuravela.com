FROM alpine:latest

RUN apk update \
    && apk add nodejs npm hugo --no-cache \
    && rm -vrf /var/cache/apk/*

WORKDIR /web

EXPOSE 1313