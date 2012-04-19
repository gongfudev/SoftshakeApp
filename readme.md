Application mobile pour la conférence Softshake.ch.


# Séances

## Séance #6

Stories

* Mise en oeuvre du modèle de données des Orateurs dans l'écran du même nom.


Tâches

* Intégration de Mustache.js (https://github.com/janl/mustache.js) en copiant le `mustache.js` dans le répertoire `www`.
    * Nous utilisons `Mustache.js` pour appliquer un template HTML à une collection de données
* Intégration de la lecture du fichier JSon.


## Séance #5

* Création de tous les écrans (avec un bouton Back).
* Création du modèle de données pour l'écran Orateurs.


# Tips

* Ne pas oublier d'ajouter le répertoire `images` à l'import des sources de JQueryMobile.
* Comme indiqué dans la doc, il se confirme que la balise `footer` de JQueryMobile soit bien placée en bas dans le simulateur iPhone 5, mais soit calée juste en dessous des composants dans la version 4 du simulateur iPhone (de XCode). C'est la balise `data-position="fixed"` qui ne fonctionne pas.
* Idem pour la NavigationBar (voir écran Agenda).