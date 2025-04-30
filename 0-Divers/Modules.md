# session

L'ajout du module sessions permet de stocker des informations dans la session, en lui ajoutant par exemple un objet

```js
import session from "express-session";

const deckController = {
addToDeck (req,res){
   let addedCard = req.params.card
   
   // si l'objet deck n'existe pas encore dans session, on l'ajoute
   if(!req.session.deck){
        req.session.deck = []
    }
    let createdDeck = req.session.deck
    if(createdDeck[4] || createdDeck.find((card) => card === addedCard)) {
        return res.status(303).redirect("/");
    }
    createdDeck.push(addedCard)
    res.status(303).redirect("/");
},
}

// session se paramètre dans index.js
app.use(session({
  
  // le mot de passe qui permet de signer le cookie (un cookie de session est crée pour le client, il se base sur ce mot de passe pour générer le cookie)
  secret: process.env.secret, // on stocke le mdp dans le fichier .env pour éviter qu'il ne soit visible dans le code sur github
  
  // si on met à true, permet de sauvegarder la session même si celle ci n'est pas modifié, pour préserver les performances du serveur, en général on le laissera à false
  resave: false,

  // chaque personne entrante sur notre serveur aura une session peu importe s'il va l'utiliser ou non, je mets cette option à false pour économiser les ressources du serveur
  saveUninitialized: false,
  cookie: { 

    secure: false,  // ! TOUJOURS METTRE TRUE EN PROD (pour le https)
    httpOnly: true, // bloque l'usage du cookie coté front, (protection contre le vol de cookie par xss ...)
    maxAge: 60*60*1000 // ici, permet de définir l'age du cookie coté client en ms, au bout d'1h il expire

  }
}))

// dans le fichier env : 
secret = "mdp"
```

