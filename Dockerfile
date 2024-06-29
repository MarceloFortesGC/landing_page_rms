# Use a imagem oficial do Node.js como base
FROM node:16-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package.json package-lock.json ./

# Instale as dependências do projeto
RUN yarn

# Copie todos os arquivos do projeto para o diretório de trabalho
COPY . .

# Construa o projeto Next.js
RUN yarn run build

# Exponha a porta que a aplicação irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["yarn", "start"]