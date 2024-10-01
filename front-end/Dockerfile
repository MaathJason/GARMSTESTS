# Etapa de build
FROM node:20 AS builder

# Defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie os arquivos necessários e instale as dependências
COPY package*.json ./
RUN npm install

# Copie o código e faça o build
COPY . .
RUN npm run build

# Etapa de produção com Nginx
FROM nginx:alpine

# Instalar Certbot
RUN apk add --no-cache certbot

# Copiar o arquivo de configuração do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar os arquivos de build do frontend para o Nginx
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# Copiar o script de inicialização
COPY start.sh /start.sh
RUN chmod +x /start.sh

# Expor a porta 80
EXPOSE 80
EXPOSE 443

# Iniciar o script de inicialização
CMD ["/start.sh"]
