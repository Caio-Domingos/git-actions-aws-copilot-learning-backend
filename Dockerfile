# Etapa 1: Base da Imagem
# Usar uma versão específica do node, neste caso, uma versão alpine por ser mais leve
FROM node:16-alpine

# Definir o diretório de trabalho no container
WORKDIR /usr/src/app

# Copiar os arquivos de definição de pacote.
# Isso aproveita o cache das camadas do Docker para acelerar as builds subsequentes
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Compilar o aplicativo para produção
RUN npm run build

# Expõe a porta em que a aplicação vai rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "dist/main"]
