# Ultimate-React-TS-Vite-starter-kit
Modèle de base pour commencer un projet React avec Typescript comme un pro

-----------

## Que contient ce starter kit ?
### Dépendances
 - Vite + plugins ==> [Vitejs](https://vitejs.dev)
 - Typescript ==> [Typescript](https://www.typescriptlang.org)
 - ts-node
 - postcss ==> [Postcss](https://postcss.org)
   - autoprefixer
   - cssnano ==> [CSSNano](https://cssnano.co)
   - sort-media-queries
   - flexbugs-fixes 
 - react ==> [React](https://fr.reactjs.org)
 - react-dom
 - react-router-dom
 - react-hook-form  ==> [React Hook Form](https://react-hook-form.com)
 - yup (bibliothèque de validation de données) ==> [Yup](https://github.com/jquense/yup)
 - sass-swing (framework scss/css) ==> [Sass Swing](https://jdelauney.github.io/sass-swing/)

### Dépendances de développement
 
 - ESlint + plugins ==> [ESLint](https://eslint.org)
 - stylelint + plugins ==> [Stylelint](https://stylelint.io)
 - Prettier ==> [Prettier](https://prettier.io)
 - JSDom
 - Vitest ==> [Vitest](https://vitest.dev)
   - coverage-c8
   - Testing-library/React ==> [Testing Library](https://testing-library.com)
   - Testing-library/jest-dom
   - Testing-library/user-event
 - husky ==> [Husky](https://typicode.github.io/husky)
   - commitlint
   - lint-staged

-----------

## Installation

> **ATTENTION** Si vous utilisez pnpm (principalement) comme gestionnaire de package.
> Assurez vous que votre projet ne soit pas stocké sur un HD externe branché sur USB.
> En effet, cela peut causer des problèmes d'indexation

Installation de [PNPM](https://pnpm.io/fr/)
```shell
> npm install -g pnpm
```

Installation des dépendances
```shell
> pnpm install
```

Préparation de husky _(uniquement si Husky ne s'est pas installé automatiquement)_
```shell
> pnpm run prepare
```
-----------
## Les commandes disponibles
A lancer avec `pnpm <nom_du_script>`
  - **start**    : Lance le serveur de développement en local
  - **build**    : Creation du projet final
  - **lint**     : Vérification et fix js/ts avec eslint
  - **lint:scss**: Vérification et fix scss avec stylelint
  - **prettier** : Formate le code
  - **test**     : Lance les tests
  - **test:watch**  : Lance les tests avec observation continue
  - **test:coverage** : Lance le test de couverture de code par les tests
  - **format** : Lance l'analyse et le formatage du code avec ESLint et Prettier

-----------
## Initialisation et lancer des conteneurs docker
### Initialisation du conteneur docker de développement
#### Création du conteneur et de l'image de dev
```shell
> pnpm docker:build:dev
```
#### Lancement du serveur de dev Docker
```shell
> pnpm docker:start:dev
```
#### Arrêt du serveur de dev Docker
```shell
> pnpm docker:stop:dev
```
-----------
### Initialisation du conteneur docker de production
#### Création du conteneur et de l'image de prod
```shell
> pnpm docker:build:prod
```
#### Lancement du serveur de prod Docker
```shell
> pnpm docker:start:prod
```
#### Arrêt du serveur de prod Docker
```shell
> pnpm docker:stop:prod
```
-----------

## Processus de commit et push
### Convention de nommage des commits
Ce modèle suit les recommandations du [conventionnal commit organization](https://www.conventionalcommits.org/fr/v1.0.0/)
les types autorisés sont :
> "ci", "chore", "docs", "feat", "fix", "perf", "refactor", "revert", "style"

**La description est tout en minuscule.**

_exemple_
> chore: projet setup
> 
> feat(component/foo): add new bar in foo

**Avant chaque commit eslint et prettier sont lancé automatiquement**

Si vous le désirez, il est possible de contourner l’utilisation des hooks via l’option `--no-verify` dans la plupart des commandes Git,

### Lancement des tests avant chaque Push
**(!)** Les tests sont lancés **avant chaque push** automatiquement, ce qui signifie que **tous vos tests doivent être validés (vert)**

-----------

## Information sur les tests
Par défaut l'environnement de test est **JSDom**

Pour changer l'environnement ajoutez ce commentaire au début de vos tests

```js
/**
 * @vitest-environment node
 */ 
```

Les méthodes de test sont déclarées globalement donc pas besoin de faire un import pour _expect_, _describe_, _test_, _it_,...

-----------
