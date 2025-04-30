// il me manque le status code http dans mes erreurs classique, je crée donc une nouvelle classe qui étends de la classe de base avec les statusCode en +

export class AppError extends Error{
    statusCode;
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}