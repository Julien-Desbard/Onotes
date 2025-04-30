# hasher le mdp

```js
// controller de l'enregistrement d'un nouvel utilisateur
export const signup = async (req, res) => {
    // nb de tours de hash, plus il y en a plus c'est long mais plus c'est sécure
    const saltRounds = 10
    // mdp saisi par l'utilisateur
    const plainPassword = req.body.password
    // generation du salt
    const salt = await bcrypt.genSalt(saltRounds);
    // hashage du password
    const hash = await bcrypt.hash(plainPassword, salt);
    //upload des infos du user + mdp hashé en BDD
    const newUser = await AppUser.create({ firstname: req.body.firstname, name: req.body.lastname, email: req.body.email, password: hash })
    // controle de l'enregistrement du user en BBD
    const check = await AppUser.findAll()
    console.log(check)
    res.redirect("/")
}
```

## Vérification du mdp saisi lors du login

```js
export const loginCheck = async (req, res) => {
    const login = req.body.email
    const mdp = req.body.password
    //récupération du mdp en base selon email renseigné
    const infos = await AppUser.findOne({where : {email : login}})
    const hash = infos.password
    //controle du password entré vs celui en base
    const hashPassword = await bcrypt.compare(mdp,hash)
    if (hashPassword) {
        console.log("comparaison ok")
        res.redirect('/')
    } else {
        console.log('comparaison infructueuse')
        res.redirect('/login')
    }
}
```