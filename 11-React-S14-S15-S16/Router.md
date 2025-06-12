# BrowserRouter (cf. correction solène S17 vs Orecipes projet perso)

Mettre BrowserRouter autour de notre app dans le fichier Main :

```jsx
ReactDOM.createRoot(document.getElementById('root')!).render(
 <BrowserRouter>
  <App />,
  </BrowserRouter>
```

## NavLink

Passer les liens Nav en Navlink :

```jsx
      <nav>
        {categories.map((category) => (
          <NavLink
            className={handleLinkClassName(userSearch, category.label)}
            to={"/categ" + category.route}
            key={category.label}
          >
            {category.label}
          </NavLink>
        ))}
```

### Routes

On crée ensuite les routes (<Route/>) pour chaque URL que l'on souhaite traiter, et on les encadre dans la balise <Routes></Routes> au pluriel.

Ces routes sont à ranger dans le composant App pour être en haut de l'arbre des composants.

```jsx
        <Routes>
          {categoriesData.map((category) => (
            <Route path={"/categ/" + category.label} element={<Posts
              posts={postsData.filter((post)=> post.category === category.label)}
              isZenModeEnabled={zenModeEnabled}
              userSearch={userSearch}
              setUserSearch={setUserSearch}
            />} />
          ))}
          <Route path={"/categ/"} element={<Posts
        posts={postsData}
        isZenModeEnabled={zenModeEnabled}
        userSearch={userSearch}
        setUserSearch={setUserSearch}
      />}/>
                <Route path={"/categ/*"} element={<div>No such route</div>}/>
          {postsData.map((post) => 
          <Route path={"/post/" + post.slug} element={<Postpage post={post} />}/>
          )}
        </Routes>
```

#### Route

Dans la balise route, on doit indiquer au minimum le path pour l'URL attendue et l'element, le composant React qui sera rendu comme réponse à cette URL.

```jsx
<Route path={"/post/" + post.slug} element={<Postpage post={post} />}/>
```

##### Routes dynamiques

Tout comme sur le back, on peut utiliser /:id ou /:toto pour récupérer les infos d'un champ dynamique