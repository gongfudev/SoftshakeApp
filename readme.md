Application mobile pour la conférence Softshake.ch.


# Séances

## Séance #10

Propositions :

* Mettre en place l'envrionnement de debug : desktop, simulateur (inspecter, breakpoints... ?).
* Améliorer la performance de l'UI en ne composant les pages de détail que lors de la consultation
    * refactoring composition du détail de l'orateur ...
* Upgrade de jQueryMobile à la version 1.1.0 (nous avons RC1)
* Supprimer `ios/www`


## Séance #9

Stories

* Affiner la présentation du détail d'un orateur
    * afficher l'image dans le détail d'un orateur
    * interpréter les balises HTML (actuellement transcrites telles quelles)
* Affiner la présentation de la liste des orateurs
    * ajouté thumbnail de l'orateur dans la liste des orateurs

Tips

* Mustache.js rend du HTML "escapé" par défaut; pour injecter du code HTML au sein d'un template, il faut utiliser la syntaxe `{{{variable}}}` ou `{{&variable}}`


## Séance #8

Stories

* Construire dynamiquement le Detail de chaque Orateur


Tâches

* Fabriquer dynamiquement une sous page par Orateur
* Lier la liste avec les sous pages (Ajouter l'id des Orateurs dans le JSON)



## Séance #7

(JS Genève du 26/04/2012 : Présentation GongFu.IO)


Stories

* Créé un enchaînement de pages (template "multipages") pour afficher le détail d'un Orateur

Tâches

* Créer nouveau bloc pour une sous-page
* Créer le lien vers la sous page Orateur (le tiret dans le ID de la page posait problème; il fallait l'enlever)
* Citer URL des sites distants dans Cordova.plist (photos des orateurs...)



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
* Attention: le tiret dans le ID de la page posait problème; il fallait l'enlever
* Citer URL des sites distants dans Cordova.plist (photos des orateurs...)
* Attention d'utiliser les bonnes versions entre JQuery et JQuery Mobile (nous concernant, respectivement 1.7.1 et 1.1.0-rc.1)
