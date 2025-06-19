# Context - exo stackblitz useContext langSwitcher S17 - 

https://stackblitz.com/edit/react-ts-bsmrxved?file=context%2Fcontext.tsx


Un context en React permet de transmettre des données (généralement de state) à travers l'arborescence des composants sans avoir besoin de les transmettre explicitement via les props à chaque niveau.

C'est une sorte de gestion global du state. On y place donc généralement des données utiles dans toute l'appli, comme des données d'authentification, des paramètres de thème, ..

## 1. Créer le context

On créé le contexte avec la fonction `createContext` de React. On pense à l'exporter car il faudra l'importer pour récupérer la valeur qu'il contient.

```js
import { createContext } from 'react';

const MyContext = createContext();

export default MyContext;
```

Lorsqu'on créé le context, on doit lui passer une valeur par défaut dans le cas où aucun context provider ne serait défini. Mais techniquement, les données par défaut ne seront jamais utilisées car on va toujours définir un context provider donc on met ici undefined en valeur par défaut. Et si on est en typescript il faut alors fournir en generic le futur type du contexte :

```js
import { createContext } from 'react';

const MyContext = createContext<undefined | boolean>(undefined);

export default MyContext;
```

## 2. Mise à dispo du context

On englobe tous les composants qui auront besoin du context avec le Context.Provider.
Le contexte sera disponible dans les composants englobés et dans toute leur descendance (enfants, petits enfants, ...)
Le Provider prend une propriété value qui contient les données à partager.

```js
<MyContext.Provider value={/* valeur du context à partager */}>
  {/* arbre de composants providés */}
</MyContext.Provider>
```

Une bonne idée est de créer un custom composant pour contenir ce code :

```js
interface ProviderProps {
  children: ReactNode;
}
function MyContextProvider({children}: ProviderProps) {
  const [isZen, setIsZen] = useState(false);

return (
  <MyContext.Provider value={isZen}>
    {children}
  </MyContext.Provider>
)}
```

Dans value, j'indique ce que je passe à mon contexte. ici, isZen, mais je pourrais aussi passer le setter.

et on utilise la fonction autour de la plus haute branche de l'arbre dans lequel on souhaite utiliser ce context :

```jsx
// j'importe ma fonction
import TokenProvider from './context/tokenContext.tsx';

createRoot(document.getElementById('root')!).render(

// j'encadre App avec ma fonction

    <TokenProvider>
      <App />
    </TokenProvider>
);
```
ici, App vient remplir le children de mon provider avec tout ce qu'il contient

## 3. Utilisation du context

De n'importe quel composant faisant parti de l'arbre englobé par le provider on accède "directement" à la valeur contenue dans le context avec le hook `useContext`.
Et si la valeur du context change, le composant refera son rendu.

```js
// on importe le hook
import { useContext } from 'react';
// on importe le context
import MyContext from './MyContext';

function Composant() {
  const isZen = useContext(MyContext);

  // on peut ensuite utiliser la value et le setter...
}
```

Une bonne idée est de créer un custom hook pour utiliser ce context sans avoir à importer le hook useContext + le context :

```js
import { useContext } from 'react';
import MyContext from './MyContext';

const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a Provider');
  }
  return context;
};

export default useMyContext;
```

### Utiliser le custom Hook

Je me place dans le composant qui a besoin du contenu du context et je destructure le résultat de ma fonction qui utilise mon context (mon custom hook) pour en sortir les éléments dont j'ai besoin. 

```jsx
const {isZen} = useMyContext()
```

Ici, je récupère ma valeur isZen, dont le state a été défini dans mon provider, et passser en value lorsque j'ai englobé App avec mon provider.