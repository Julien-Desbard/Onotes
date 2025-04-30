# Bases

- Si je n'indique pas de methode, les données sont envoyées en `GET` et passent par l'url
- Dans ce cas, on retrouve les données dans `req.query`
- for et name doivent porter le même nom de variable. Sinon, la donnée rentrée dans le formulaire sera perdue

## Usage

- On se sert de `GET` dès lors qu'on **veut partager le lien** et atterrir au même endroit quand on clique dessus. Dans les autres cas, on utilise du `POST`
- Les infos de `POST`passent dans `req.body`
