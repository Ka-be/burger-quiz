#Node / Alpine
FROM node:18-alpine

WORKDIR /app/frontend

COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application dans le conteneur
COPY . .

# Exposez le port sur lequel le service écoutera
EXPOSE 5173
