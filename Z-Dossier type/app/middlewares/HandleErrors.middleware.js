export const handleErrors = (err, req, res, next) => {
    //  if environnement de dev -> console.error(err);
    if(process.env.NODE_ENV === "developpement"){
        console.error(err);
    }
    switch (err.statusCode) {

        case 400:
            res.status(400).render("errors/400");
            break;
        case 401:
            res.redirect("/se-connecter");
            break;
         case 403:
            res.status(403).send("tu n'as pas les droits necessaires");
            break;
        case 404:
            res.status(404).render("errors/404");
            break;
        default:
            res.status(500).render("errors/500")
            break;
    }

}