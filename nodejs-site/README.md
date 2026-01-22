# Exemple de site à déployer

Ce site permet de comprendre les mécanismes de déploiement d'un site web et d'un docker. 

## Comment l'utiliser sans docker?

Installer Node.js et npm sur votre système : https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

A la racine de ce projet, lancer la commande : "npm run start"

Le site devrait être accessible depuis votre localhost sur le port 8000


## Comment l'utiliser avec docker?

Installer docker sur votre système : https://www.docker.com/get-started

A la racine de ce projet, construisez votre conteneur : "docker build -t traiteur/site-traiteur ."

Puis lancer votre conteneur sur le port 80 en mode "détaché", c'est à dire en tache de fond : "docker run -p 80:8000 -d traiteur/site-traiteur"

Vous pouvez maintenant ouvrir votre navigateur et visiter "localhost", le site du traiteur est fonctionnel !

Pour retrouver le processus attaché au docker : "docker ps", pour l'arrêter "docker stop <CONTAINER ID>".

Par exemple pour le conteneur suivant :

CONTAINER ID        IMAGE                    COMMAND                  CREATED             STATUS              PORTS                  NAMES
11539aee964e        traiteur/site-traiteur   "docker-entrypoint.s…"   21 seconds ago      Up 20 seconds       0.0.0.0:80->8000/tcp   silly_carson

docker stop 11539aee964e


Ce conteneur est également disponible sur dockerhub au travers de la commande suivante : 
docker pull traiteur/site-traiteur
docker run -p 80:8000 -d traiteur/site-traiteur
