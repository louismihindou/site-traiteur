# Étape 1 : Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copier les fichiers de configuration
COPY package*.json ./

# Installer les dépendances
RUN npm install --production=false

# Copier le reste du code
COPY . .

# Construire l'application (si tu as un build front)
# RUN npm run build

# Étape 2 : Image finale
FROM node:18-alpine

WORKDIR /app

# Copier uniquement ce qui est nécessaire
COPY package*.json ./
RUN npm install --production

COPY --from=builder /app ./

# Exposer le port de l'application
EXPOSE 3000

# Commande de démarrage
CMD ["npm", "start"]
