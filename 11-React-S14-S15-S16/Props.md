# Donner des props (cf. correction solène S17 vs Orecipes projet perso)

Quand je veux envoyer des infos à un composant, je lui passe des props : 

```jsx
<RecipeCard recipe={recipe} />
```

Dans le composant, je dois créer une interface pour passer la props à ma fonction : 

```jsx
interface RecipeCardProps {
  recipe: IRecipe;
}
```

Je passe ensuite la props à la fonction en lui indiquant qu'elle doit respecter l'interface de props:

```jsx
// RecipeCard est responsable de l'affichage d'une seule recette
export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card>
      <Card.Img variant="top" src={recipe.thumbnail} />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text>Difficulté: {recipe.difficulty}</Card.Text>
        <Button variant="primary">Voir la recette</Button>
      </Card.Body>
    </Card>
  );
}
```
## Props multiples

si j'envoie plusieurs props, je peux leur faire un interface dédié dans le composant : 

```jsx
interface HomeProps {
  isLoading: boolean;
  error: string;
  recipes: IRecipe[];
}

export default function HomePage({ isLoading, error, recipes }: HomeProps) {
  return (
    <main className="main">
      <h1>Nos recettes</h1>

      <p>Nos 6 recettes</p>

      {isLoading && <div>loading recipes...</div>}
      {error && <div>{error}</div>}

      <div className="cardContainer">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}
```

et dans App, je leur envoie ça : 

```jsx
<Routes>
    <Route
    path="/"
    element={
        <HomePage isLoading={isLoading} error={error} recipes={recipes} />
    }
    />
</Routes>
```