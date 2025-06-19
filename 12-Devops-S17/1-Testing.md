# Testing des fonctions de mon site

Pour construire un test, on utilise trois syntaxes de base : 

Describe : décrit ce que l'on veut tester
Test : la fonction qu'on va utiliser pour effectuer les tests
Expect : les tests en eux-même, qui passent des data à la fonction test

Ne pas oublier d'importer les fonctions que l'on souhaite tester

```js
import { add, multiplie } from "../modules/maths.js";

describe('Est capable de faire des opérations arithmétiques', () => {
    // ? Dans ce block describe, on écrit nos tests unitaires
    // ? Un tests unitaire va tester des fonctions isolées
    // ? un test test()
    test('Est capable de faire des additions', () => {
        // ? une assertion
        expect( add(1, 2) ).toBe(3);
        // ?
        expect( add('1', 2) ).toBe(3);

        expect( add('1.5', 2.6) ).toBe(4.1);

        expect( add('toto', 2.6) ).not.toBe(4.1);

        expect( add('toto', 2.6) ).toBe(NaN);

        expect( add(undefined, 2.6) ).toBe(NaN);

        expect( add(null, 2.6) ).toBe(2.6);

        expect( add(undefined, undefined) ).toBe(NaN);

        expect( add(null, null) ).toBe(0);
    });
});

```

## Testing des routes

```js
import { createRequest, createResponse } from "node-mocks-http";
import { appController } from "../app/controllers/appController.js";

describe('Retourne la vue avec le code http correct', () => {
    let controller;
    let request;
    let response;

    // * Le résultat d'un test ne doit pas influencer le fonctionnement / résultat d'un autre test
    //  * ça nécessite de remettre à zéro notre environnement entre chaque test.

    beforeEach(() => {
        controller = appController;
        response = createResponse();
    });

    test('Le controller doit être défini', () => {
        expect(controller).toBeDefined();
    });

    test('Retourne la page d\'accueil avec le code de statut 200', (done) => {
        request = createRequest({
            method: 'GET',
            url: '/'
        });

        controller.index(request, response);

        expect( response._getRenderView() ).toBe('index');

        expect( response.statusCode ).toBe(200);

        expect( response._getStatusCode() ).toBe(200);

        done();
    });


    test('Retourne la vue show avec le code de statut 200', (done) => {
        request = createRequest({
            method: 'GET',
            url: '/test'
        });

        controller.show(request, response);

        expect( response.statusCode ).toBe(200);

        expect( response._getRenderView() ).toBe('show');

        done();
    });


    test('Retourne une erreur 500', (done) => {
        request = createRequest({
            method: 'GET',
            url: '/error'
        });

        controller.show(request, response);

        expect( response.statusCode ).toBe(200);

        expect( response._getRenderView() ).toBe('show');

        done();
    });

});
```

### testing HTTP => Via Supertest et Chai

Je teste mes routes et les codes qui me sont retournés

```js
import request from 'supertest';
import { expect } from 'chai';
import { app } from '../app.js';

describe('On teste des endpoints', () => {

    test('Content Type de la page / ainsi que le code http', async () => {
        try {
            // je lance la route '/' dans mon app
            const res = await request(app).get('/');
            
            // j'attends comme retour du text html, aussi vu comme du string par Chai
            expect(res.type).to.be.a('string');
            expect(res.type).to.equal('text/html');
            // je m'assure que je reçois bien un code 200
            expect(res.statusCode).to.equal(200);

        } catch (error) {
            throw error;
        }
    });

// je vérifie si j'obtiens bien une erreur 404
    it('should return a 404', () => {
        request(app)
        // ici je fais du chainage de fonctions en commençant ma ligne par .
            .get('/users')
            .expect(404)
            .end((err, res) => {
                if(err) throw err;
            });
    });

        // je controle le contenu de ma page HTML
    it('should return the correct html and headers', async () => {
        const response = await request(app).get('/')

        if(response.ok) {
            expect(response.statusCode).to.equal(200);
        //  je contrôle que je suis bien en utf-8
            expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
        // Attention, ici l'indentation du texte est fondamentale, il comier/coller le fichier html.
            return expect(response.text).to.equal(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/app.css">
    <title>Intro Test Express</title>
</head>

<body>
    <h1>Welcome to nodejs TDD intro</h1>
    <script src="js/app.js"></script>
</body>

</html>`);
        }


    });

});
```

#### Je test la partie Json => Viz supertest

```js
import request from "supertest";
import { app } from "../app";


it('Should return an array', async () => {
    const products = [
        {
            name: 'PS5',
            price: 500,
        },
        {
            name: 'XBOX Series X',
            price: 400,
        },
    ];
    // j'appelle la réponse de ma route et je m'ens eres pour effectuer mes contrôles
    const res = await request(app).get('/products');

    expect(res.statusCode).toEqual(200);

    expect(res.headers['content-type']).toEqual('application/json; charset=utf-8');
    // je m'assure que ma route me renvoit bien l'équivalent de mon objet products
    expect(res.body).toMatchObject(products);
});

    // j'appelle ma route sur un seul produit et je m'assure que c'est bien celui que je récupère
it('Should return an array', async () => {
    const product = {
        name: 'XBOX Series X',
        price: 400,
    }


    const res = await request(app).get('/products/1');


    expect(res.body).toMatchObject(product);
});
```
