#!/bin/sh

# Instalar Certbot
apt-get update && apt-get install -y certbot python3-certbot-nginx

# Obter o certificado SSL (adaptar conforme necessário)
certbot certonly --nginx -d garmsops.com.br -d www.garmsops.com.br --non-interactive --agree-tos

# Iniciar o Nginx
nginx -g "daemon off;"