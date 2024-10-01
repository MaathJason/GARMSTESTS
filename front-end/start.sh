#!/bin/sh

# Obter certificados com Certbot
certbot --nginx -d garmsops.com.br -d www.garmsops.com.br --non-interactive --agree-tos --email garmsltda@gmail.com

# Iniciar o Nginx
nginx -g "daemon off;"
