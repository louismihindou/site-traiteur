FROM node:21.5.0

# Creer un repertoire de travail
WORKDIR /usr/src/app

# Install les dépendances du docker
COPY package.json ./
RUN npm install

# Copy les fichiers dans le docker
COPY . .

# Ouvre le port d'écoute du serveur
EXPOSE 8000

# Lance le serveur
CMD [ "node", "site_traiteur.js" ]