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

