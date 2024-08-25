# Use uma imagem base com Node.js
FROM node:20

# Defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie o arquivo package.json e package-lock.json
COPY front-end/package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY front-end . .

# Construa a aplicação
RUN npm run build

# Instale o serve para servir a aplicação estática
RUN npm install -g serve

# Exponha a porta em que a aplicação será executada
EXPOSE 80

# Comando para iniciar a aplicação
CMD ["serve", "-s", "dist", "-l", "80"]
