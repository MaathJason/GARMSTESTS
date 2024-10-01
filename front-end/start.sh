#!/bin/sh

# Obter certificados com Certbot
certbot certonly --nginx -d garmsops.com.br -d www.garmsops.com.br --non-interactive --agree-tos --email garmsltda@gmail.com --debug


# Verifique se os certificados foram gerados
if [ -f /etc/letsencrypt/live/garmsops.com.br/fullchain.pem ]; then
    echo "Certificados gerados com sucesso."
else
    echo "Falha ao gerar certificados."
    exit 1
fi

# Iniciar o Nginx
nginx -g "daemon off;"
