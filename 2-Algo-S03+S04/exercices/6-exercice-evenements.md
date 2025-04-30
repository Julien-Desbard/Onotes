(facultatif) Dans le challenge dice-roller, 2 missions pour travailler sur les événements :

- Mission 1 : ajouter un bouton qui permet de démarrer le lancement de dés (appliquer l'instruction prompt et la suite) quand on clique dessus

- Mission 2 : choisir le nombre de dés avec un formulaire au lieu de prompt (un input pour choisir le nombre de dés à générer => quand le formulaire est soumis on génère les dés)

<details><summary>Etapes mission 1</summary>

1.1 - Ajouter le bouton dans la structure HTML

1.2 - Mise en place d'un écouteur d'événement avec juste un console.log

1.3 - Remplacer le console.log par le prompt puis le lancement des dés

</details>




<details><summary>Etapes mission 2</summary>

2.1 - Supprimer le bouton de la mission 1 et le handler d'événement, garder dans un coin le traitement pour démarrer la partie (on l'utilisera au moment de la soumission du formulaire) et supprimer l'instruction prompt

2.2 - Ajouter un formulaire dans la structure HTML (un input et un bouton de type submit)

2.3 - Réagir à la soumission du formulaire avec un console.log (il y aurait pas une histoire de _preventDefault_ ?)

2.4 - Remplacer le console.log par la récupération du contenu de l'input et le lancement du nombre de dés indiqué

</details>
