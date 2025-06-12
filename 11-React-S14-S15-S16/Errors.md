# usestate (cf. correction solène S17 vs Orecipes projet perso)

j'initialise un useState d'erreur : 

```jsx
 // STATE pour l'erreur eventuelle de fecth
  const [error, setError] = useState('');
```
## Intégration dans le catch : 

```jsx
 useEffect(
    // callback avec le code du call api
    () => {
      const getRecipes = async () => {
        // le call API : https://orecipesapi.onrender.com/api/recipes

        try {
          const response = await axios.get(
            'https://orecipesapi.onrender.com/api/recipes',
          );
          // on a récupéré les recettes, on les ajoute dans le state
          setRecipes(response.data);

          // on enlève le potentiel erreur
          setError('');
        } catch (e) {
          console.log(e);
          // on enregistre un message dans le state
          setError(
            "erreur de recuperation des recettes, veuillez contacter l'administrateur...",
          );
        }

        // après le try catch si on a reçu les recettes ou si y'a eu une erreur on enlève le loader
        setIsLoading(false);
      };
      getRecipes();
    },)
```

### Display dans le code APP

```jsx
<div className="rightBlock">
        <Header />
        <h1>Nos recettes</h1>

        <p>Nos 6 recettes</p>

        {isLoading && <div>loading recipes...</div>}
        {error && <div>{error}</div>}

        <div className="cardContainer">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
```
