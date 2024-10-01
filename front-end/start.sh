#!/bin/sh

# Obter certificados com Certbot
certbot certonly --nginx -d garmsops.com.br -d www.garmsops.com.br --non-interactive --agree-tos --email seu_email@example.com

# Verifique se os certificados foram gerados
if [ -f /etc/letsencrypt/live/garmsops.com.br/fullchain.pem ]; then
    echo "Certificados gerados com sucesso."
else
    echo "Falha ao gerar certificados."
    exit 1
fi

chown root:root /etc/letsencrypt/live/garmsops.com.br/*
chown -R www-data:www-data /etc/letsencrypt/
chmod 755 /etc/letsencrypt
chmod 755 /etc/letsencrypt/live
chmod 755 /etc/letsencrypt/archive
chmod 644 /etc/letsencrypt/live/garmsops.com.br/fullchain.pem
chmod 600 /etc/letsencrypt/live/garmsops.com.br/privkey.pem

ls -l /etc/letsencrypt/live/garmsops.com.br/





# Iniciar o Nginx
nginx -g "daemon off;"
