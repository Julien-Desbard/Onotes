# typage générique

Quand on définit un state avec une valeur vide, il faut lui donner un type générique pour éviter le typage automatique qui peut nous handicaper ou poser problème.

```jsx
interface MacaronI {
    id : number;
    }
const [macaron, setMacaron] = usestate<MacaronI[]>([])
```

Ici, je dis que macaron aura la forme de l'interface mais que pour l'instant il n'a pas de valeur.

C'est utile quand on veut donner les valeur à macaron depuis une API
