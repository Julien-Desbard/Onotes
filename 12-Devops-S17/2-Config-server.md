# Installer le serveur

1- Se connecter avec la clef SSH en la collant dans le terminal à la racine (clef SHA256:POtOrUq21Z6asXDnGDtvpo49KC2CAC5jL0cQEV1cfIQ)
2- Dire yes
3- Mettre à jour : sudo apt update
4- Entrer le mdp (copier/coller possible)
5- Lancer la MAJ avec : sudo apt upgrade + Y pour continuer
6- Taper entrée quand on a l'écran rose

## BDD

CREATE USER clodomir WITH PASSWORD 'childeric';
CREATE DATABASE labddaclodo;
ALTER DATABASE labddaclodo OWNER TO clodomir;

### SSH Key

Your identification has been saved in /home/student/.ssh/id_ed25519
Your public key has been saved in /home/student/.ssh/id_ed25519.pub
The key fingerprint is:
SHA256:nHjM1E+MmN2aNKDORVINaNCSa1itJZ2CGHGQRlkG/UA julien.desbard@gmail.com

cat ~/.ssh/id_ed25519.pub
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIEbwWYOo4Bugt3HGDw4JfL6G4BGXaR19h8tayHC72m5L julien.desbard@gmail.com