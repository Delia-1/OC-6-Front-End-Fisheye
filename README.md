# 📸 FishEye - Plateforme de Photographes

> **Projet d'apprentissage** - Développement d'une plateforme web accessible pour photographes freelances dans le cadre de la formation OpenClassrooms "Développeur Front-End".

## 🎨 Aperçu du projet

FishEye est une plateforme web accessible dédiée aux photographes freelances. Le projet met l'accent sur l'accessibilité web (WCAG 2.1), l'architecture modulaire et l'utilisation des fonctionnalités modernes de JavaScript ES6+.

**Fonctionnalités principales :**
- Navigation intuitive entre photographes et leurs portfolios
- Lightbox accessible avec navigation clavier
- Système de likes dynamique
- Formulaire de contact modal
- Tri des médias par popularité, titre ou date

## 🎯 Objectifs pédagogiques

- ♿ **Accessibilité web** : Conformité WCAG, navigation clavier, lecteurs d'écran
- 🏗️ **Architecture modulaire** : Design patterns, code maintenable
- ⚡ **JavaScript moderne** : ES6+, classes, modules, async/await
- 🎨 **Interfaces dynamiques** : Lightbox, modales, gestion d'événements

## ✨ Fonctionnalités

### Page d'accueil
- 📋 Liste des photographes avec leurs informations (nom, localisation, prix/heure, slogan)
- 🖼️ Vignettes cliquables menant aux portfolios individuels
- 💰 Affichage clair des tarifs et localisations
- ♿ Navigation entièrement accessible au clavier

### Page photographe
- 🖼️ **Galerie multimédia** : Affichage de photos et vidéos avec miniatures
- 🔄 **Système de tri** : Par popularité, titre ou date
- ❤️ **Gestion des likes** : Compteur dynamique avec mise à jour du total
- 🔍 **Lightbox accessible** : Navigation avec flèches clavier (←/→) et Escape
- 📧 **Formulaire de contact** : Modale avec validation et accessibilité
- 📊 **Informations photographe** : Tarif journalier et total des likes

## 🛠️ Technologies utilisées

### Core Technologies
- **HTML5 sémantique** : `<main>`, `<section>`, `<article>`
- **CSS3 moderne** : Flexbox, variables CSS
- **JavaScript ES6+** : Classes, modules, async/await, destructuring

### Design Patterns
- **Factory Pattern** :
  - Création différenciée médias (Photo/Video) et photographes
  - Création différenciée des tags
- **Module Pattern** : Séparation claire des responsabilités

### Outils d'accessibilité
- **ARIA** : Labels descriptifs, rôles, états dynamiques
- **Navigation clavier** : Tab, Enter, Escape, flèches directionnelles
- **Focus management** : Piégeage de focus, restauration appropriée
- **Lecteurs d'écran** : Descriptions et annonces appropriées


## 🚀 Installation et lancement

```bash
# Cloner le repository
git clone https://github.com/votre-username/p-6-Front-End-Fisheye.git

# Accéder au dossier
cd p-6-Front-End-Fisheye

# Ouvrir dans le navigateur
# Double-clic sur index.html


🌐 **Accès** : `http://localhost:5000`

```

## 💡 Défis relevés:

- **Découverte des design patterns** : Mise en pratique du Factory Pattern pour la première fois
- **Gestion de l'accessibilité** : Apprentissage des bonnes pratiques ARIA et navigation clavier
- **Architecture modulaire** : Structuration du code en modules ES6 réutilisables

## ♿ Tests d'accessibilité

### Outils de validation
- ✅ **AChecker** : Validation WCAG 2.1 AA
- ✅ **Lighthouse** : Score accessibilité = 100
- ✅ **NVDA/JAWS** : Tests avec lecteurs d'écran
- ✅ **Navigation clavier** : Tests manuels complets
- ✅ **Extension ESLint** : Aucune erreur relevée.


*Développé avec 💙 dans le cadre de ma formation en développement front-end*
