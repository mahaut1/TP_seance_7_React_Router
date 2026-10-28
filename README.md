07 — TP fil rouge : React Router et gestionnaire de tâches

Bachelor 3 Informatique — IRIS Nice
Séance 7 — 7 janvier 2027
Objectif : transformer le gestionnaire de tâches React de la séance 6 en une application avec plusieurs pages, sans perdre les fonctionnalités déjà réalisées.
Ce TP est réalisé progressivement pendant le cours. Les exercices ci-dessous correspondent à ceux de la présentation Gamma : ne recommencez pas un nouveau projet à chaque étape.

Avant de commencer
Vous travaillez de préférence sur votre gestionnaire de tâches de la séance 6. Il n'est pas nécessaire d'avoir terminé les défis 6 et 7 pour suivre ce TP.

Si votre projet ne démarre plus ou si vous avez besoin d'une base fonctionnelle, utilisez le dépôt de référence de la séance 6 (branche main, défis 1 à 5 corrigés). Conservez une copie de votre travail initial avant de repartir de cette base.
1. Ouvrez votre projet dans VS Code.
2. Si nécessaire, exécutez npm install.
3. Lancez npm run dev et vérifiez le fonctionnement du gestionnaire.
4. Enregistrez un commit Git avant de modifier la structure de l'application.
Règle du TP : à chaque étape, vérifiez que l'ajout, l'affichage et les interactions avec les tâches fonctionnent toujours, selon les fonctionnalités que vous aviez déjà implémentées.
Objectifs de fin de TP
- [ ] Naviguer entre /, /taches et /a-propos.
- [ ] Afficher une barre de navigation avec un lien actif identifiable.
- [ ] Retrouver le gestionnaire de tâches fonctionnel sur /taches.
- [ ] Afficher une page personnalisée pour une URL inconnue.
- [ ] Consulter le détail d'une tâche sur /taches/:id.
- [ ] Gérer le cas d'un identifiant de tâche inexistant.
- [ ] Enregistrer le travail avec Git.
Exercice 1 — Installer React Router et créer les premières routes
But : associer une URL à un contenu React.
1. Installez la dépendance :
   npm install react-router-dom
2. Configurez BrowserRouter autour de votre application dans main.jsx.
3. Dans App.jsx, définissez deux routes avec Routes et Route :
   - / : un titre « Accueil » ;
   - /taches : un titre « Mes tâches ».
4. Testez les deux URL directement dans le navigateur.
Vérification : chaque URL affiche le titre attendu.
<details>
<summary>Indice si vous bloquez</summary>


BrowserRouter fournit le contexte de navigation. Routes regroupe les routes et chaque Route associe un path à un élément React via element.
</details>

Attention : si votre gestionnaire de tâches était directement affiché dans App.jsx, ne supprimez pas son code. Conservez-le pour le réintégrer dans la page Taches.jsx à l'exercice 3.

Exercice 2 — Ajouter une barre de navigation
But : passer d'une page à une autre sans rechargement complet du document.
1. Créez components/Navbar.jsx.
2. Ajoutez des liens vers Accueil, Mes tâches et À propos.
3. Utilisez Link ou NavLink depuis react-router-dom.
4. Faites apparaître visuellement le lien correspondant à la page active.
5. Vérifiez les boutons Précédent et Suivant du navigateur.
Vérification : les liens changent la page affichée ; le lien actif est reconnaissable.
<details>
<summary>Indices</summary>

- La destination d'un Link ou d'un NavLink est indiquée par la prop to.
- NavLink permet de connaître l'état actif via isActive.
- Si vous utilisez une classe CSS actif, définissez aussi son style dans votre CSS.
- Pour le lien /, la prop end évite qu'il reste actif sur toutes les routes.
- La page /a-propos sera créée à l'exercice 3 : son lien peut être présent avant que la page existe.
</details>

Exercice 3 — Organiser les pages et préserver les tâches
But : séparer les pages des composants réutilisables, sans casser l'application.

Créez le dossier src/pages/, puis :
1. Créez Accueil.jsx, Taches.jsx et APropos.jsx.
2. Ajoutez les routes /, /taches et /a-propos.
3. Déplacez l'affichage du gestionnaire de tâches dans Taches.jsx.
4. Conservez le state partagé des tâches et les fonctions de modification dans un parent commun, par exemple App.jsx.
5. Transmettez les tâches et les fonctions nécessaires à Taches.jsx avec des props.
6. Vérifiez les fonctionnalités déjà présentes dans votre application.
Structure cible indicative : adaptez-la à votre projet existant.
src/
├── components/
│   ├── Navbar.jsx
│   ├── TaskList.jsx
│   ├── TaskItem.jsx
│   └── TaskForm.jsx
├── pages/
│   ├── Accueil.jsx
│   ├── Taches.jsx
│   └── APropos.jsx
├── App.jsx
└── main.jsx
Vérification : les trois pages sont accessibles et le gestionnaire de tâches fonctionne toujours sur /taches.
<details>
<summary>Indices</summary>

- Une page est aussi un composant React ; son rôle est d'être affichée pour une route donnée.
- Si les fonctions d'ajout, de suppression ou de modification utilisent setTaches, vérifiez qu'elles ont toujours accès au state.
- Si Taches.jsx doit utiliser ces fonctions, passez-les en props depuis App.jsx.
- Vous pouvez conserver vos noms de variables et de propriétés existants : ne renommez pas tout le projet pour suivre un exemple.
</details>

Exercice 4 — Gérer les URL inconnues
But : afficher une page utile lorsqu'aucune route ne correspond à l'URL.
1. Créez pages/NotFound.jsx.
2. Affichez un message indiquant que la page est introuvable.
3. Ajoutez un lien permettant de revenir à l'accueil.
4. Ajoutez une route avec le chemin *.
5. Testez une adresse inexistante, par exemple /page-inconnue.
Vérification : l'utilisateur voit un message clair et peut revenir à l'accueil.
<details>
<summary>Indice</summary>


Une route avec path="*" peut servir de solution de repli lorsque les autres chemins ne correspondent pas.
</details>

TP fil rouge — Point d'étape
Ne recommencez pas le projet : les exercices 1 à 4 constituent déjà les premières étapes du TP.

Avant de continuer :
- [ ] BrowserRouter est configuré une seule fois.
- [ ] Les routes /, /taches et /a-propos fonctionnent.
- [ ] La navigation fonctionne avec Link ou NavLink.
- [ ] Le lien actif est identifiable.
- [ ] Les fonctionnalités existantes du gestionnaire de tâches fonctionnent encore.
- [ ] Une URL inconnue affiche la page NotFound.
- [ ] Un commit Git a été réalisé.
En cas de problème : lisez le message d'erreur, vérifiez la console et les imports, testez une route à la fois et comparez avec votre dernier état fonctionnel.
Exercice 5 — Nouvelle étape : afficher le détail d'une tâche
But : utiliser une route dynamique et lire un paramètre dans l'URL.
1. Ajoutez une route /taches/:id.
2. Créez pages/DetailTache.jsx.
3. Récupérez l'identifiant dans l'URL avec useParams.
4. Retrouvez la tâche correspondante dans votre tableau de tâches.
5. Affichez au minimum son texte et son état (terminée ou non).
6. Dans la liste des tâches, ajoutez un lien « Voir le détail » vers la page correspondant à chaque tâche.
7. Prévoyez un message clair si aucune tâche ne correspond à l'identifiant demandé.
Vérification : cliquer sur « Voir le détail » ouvre la bonne tâche ; un identifiant inexistant n'entraîne pas d'erreur.
<details>
<summary>Indices progressifs</summary>

1. Une seule route /taches/:id peut correspondre à /taches/1, /taches/2, etc.
2. useParams() fournit les paramètres de l'URL.
3. Les paramètres d'URL sont des chaînes de caractères. Vérifiez le type de vos identifiants avant de les comparer.
4. La méthode de tableau find() permet de rechercher un élément.
5. Le composant de détail doit accéder au tableau des tâches, par exemple via des props depuis App.jsx.
6. Le nom du champ contenant le texte de la tâche dépend de votre projet (texte, title, etc.) : utilisez le champ réel.
</details>

Structure finale indicative
src/
├── components/
│   ├── Navbar.jsx
│   ├── TaskList.jsx
│   ├── TaskItem.jsx
│   └── TaskForm.jsx
├── pages/
│   ├── Accueil.jsx
│   ├── Taches.jsx
│   ├── APropos.jsx
│   ├── DetailTache.jsx
│   └── NotFound.jsx
├── App.jsx
└── main.jsx
Défis supplémentaires — Si vous avez terminé
Ces défis sont facultatifs. Choisissez-en un ou plusieurs selon votre avancement.
- A — Tableau de bord : afficher sur la page d'accueil le nombre de tâches restant à faire.
- B — Navigation : ajouter un lien « Retour aux tâches » sur la page de détail.
- C — Interface : améliorer le style du menu et du lien actif.
- D — Accessibilité : vérifier la navigation au clavier, les titres et les éléments HTML sémantiques.
- E — Persistance : si localStorage a été implémenté, vérifier que les tâches restent disponibles après navigation et actualisation.
Recette finale — À tester avant de terminer
- [ ] Ouvrir directement /, /taches et /a-propos.
- [ ] Naviguer entre les pages avec le menu.
- [ ] Utiliser les boutons précédent/suivant.
- [ ] Ajouter, cocher/décocher et supprimer une tâche (si ces fonctions existent dans votre version).
- [ ] Ouvrir le détail d'une tâche existante.
- [ ] Tester le détail d'une tâche inexistante.
- [ ] Tester une route inexistante.
- [ ] Actualiser une page et vérifier le comportement.
- [ ] Vérifier la console du navigateur.
- [ ] Enregistrer le résultat dans Git.
Remarque : sur un hébergement de production, l'ouverture directe ou l'actualisation d'une route React Router peut nécessiter une configuration du serveur. Pour ce TP, commencez par vérifier le fonctionnement avec le serveur de développement Vite.

En cas de blocage
1. Identifiez à quelle étape le problème est apparu.
2. Lisez le message dans le terminal et dans la console du navigateur.
3. Vérifiez les chemins, les imports et les noms de composants.
4. Vérifiez les props après le déplacement du gestionnaire vers Taches.jsx.
5. Testez une fonctionnalité à la fois.
6. Demandez de l'aide en indiquant ce que vous avez essayé et le message d'erreur obtenu.
À retenir : vous construisez une seule application, que vous faites évoluer progressivement. La priorité est de comprendre le rôle des routes et de conserver un gestionnaire de tâches fonctionnel.
