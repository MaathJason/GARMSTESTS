#!/bin/sh

# Obter certificados com Certbot
sudo certbot certonly --nginx -d garmsops.com.br -d www.garmsops.com.br --non-interactive --agree-tos --email seu_email@example.com

# Verifique se os certificados foram gerados
if [ -f /etc/letsencrypt/live/garmsops.com.br/fullchain.pem ]; then
    echo "Certificados gerados com sucesso."
else
    echo "Falha ao gerar certificados."
    exit 1
fi

sudo chown root:root /etc/letsencrypt/live/garmsops.com.br/*

sudo chmod 644 /etc/letsencrypt/live/garmsops.com.br/*

# Iniciar o Nginx
nginx -g "daemon off;"
