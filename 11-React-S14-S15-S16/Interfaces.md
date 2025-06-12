# les bases (cf. projet perso S17 Orecipes)

Si je fais ça, typescript pense que je veux sotcker un tableau vide pour toujours :

```jsx
  // STATE pour stocker les recettes
  const [recipes, setRecipes] = useState([]);

```

Pour éviter ça, je créer une interface indiquant ce que mon tableau va contenir:

```jsx
interface IIngredient {
  id: number;
  quantity: number;
  unit: string;
  name: string;
}

export default interface IRecipe {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  author: string;
  difficulty: string;
  description: string;
  ingredients: IIngredient[];
  instructions: string[];
}
```

Si l'interface doit être créée à partir d'un Json (API), on peut le fournir à l'IA pour en tirer l'interface

Je lui assigne ensuite cet interfface comme un générique

```jsx
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

```
