# S17E03 : Docker - cf S18 - Devops / S17-Docker-file

---

Docker E01


## Installation

<https://docs.docker.com/engine/install/ubuntu/>
<https://docs.docker.com/engine/install/linux-postinstall/>

<https://docs.docker.com/desktop/>

<https://learn.microsoft.com/en-us/windows/wsl/install#install-wsl-command>

## Docker : la conteneurisation

## Gestion des images et des conteneurs

**Il faut faire très attention, il faut gérer la place que pourraient prendre les images et conteneurs sur le disque**

`docker images` permet de visualiser les images locales.

`docker rmi <IDIMAGE>` efface une image
`docker rmi $(docker images -aq)` efface plusieurs images

`docker ps -a` permet de visualiser tous les conteneurs, qu'il soient actifs ou non.

`docker rm $(docker ps -aq)` efface plusieurs conteneurs.

Les images ne peuvent être effacées qe si aucun conteneurs n'en dépend.

Les conteneurs ne peuvent être effacés que s'il sont éteints.

Il vaut mieux utiliser l'option `--rm` quand on teste un conteneur afin de ne pas se retrouver avec 15000 conteneurs

`docker run --rm hello-world`

La commande suivante permet d'exécuter un conteneur ubuntu, l'option `-d` permet de'exécuter le conteneur, l'option `-i` indique que l'on va vouloir se connecter à ce conteneur.

`docker run --rm -di ubuntu:latest /bin/bash`

Après cette commande, on a un conteneur qui tourne dans le background et on peut s'y connecter

`docker exec -it <NOMDUCONTENEUR> bash`

Pour se déconnecter d'un conteneur : `exit`

**Quand on développe une config, un conteneur, on utilise l'option --rm pour tester, et quand on satisfait, on  enlève l'option rm pour garder le conteneur et le réutiliser.**

La commande suivante permet de réinitialiser docker, on efface les images, conteneurs, cache et réseaux qui ne servent plus.

`docker system prune -a`

---

La commande suivant permet d'exécuter le serveur apache sur le port 8080 de l'hôte grace à l'option `-p` :

`docker run -i -p 8080:80 httpd`

`docker run -i -p 8080:80 nginx`

---

### Un premier conteneur avec Dockerfile

Dans un dossier de travail dédié sous Vscode : 

1. On crée un fichier `Dockerfile`.

On lui donne les instructions que dépendent de ce qu'on veut faire, mais qui vont toujours commencer par :

`FROM uneimagedebase`

[voir Dockerfile](./apache-docker)

Conrtenu d'exmple du fichier Dockerfile : 

```js
# * à partir de l'image de base httpd:2.4, on créer notre propre image dans ce Dockerfile
FROM httpd:alpine3.22

# * On envoie le fichier dans le conteneur : dans le répertoire de travail du serveur apache
COPY ./index.html /usr/local/apache2/htdocs
```

2. On crée un fichier `index.html` que l'on remplie

On crée un ficher html pour envoyer dans le conteneur.

3. On construit l'image

Dans le terminal, on se met dans le dossier qui contient nos fichiers Dockerfile et index.html et on compile l'image avec la commande suivante :

`docker build -t demoapache .`

L'option `-t` sert à nommer/tagguer l'image.

le `.` est le contexte : ça permet à Docker de trouver le `Dockerfile` à utiliser.

Quand l'image est compilé :

`docker run --rm -it --name democonteneurapache2 -p 8080:80 demoapache`

On peut désormais aller sur [locahost](http://localhost:8080/) et voir le rendu du fichier html

ici le -rm veut dire que le conteneur va s'effacer lorsqu'on le fermera avec ctrl C dans le terminal. Il n'apparaitra pas non plus via docker ls -a car il est effeacé et pas simplement arrêté.
