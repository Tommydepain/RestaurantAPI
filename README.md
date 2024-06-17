# RESTaurant API

**Ce projet s'appelle "RESTaurant API".**

**Le but de ce projet est de créer une base de données avec le logiciel MySQL, cette base de données doit être complétée avec un menu de restaurant. Il y a 3 tables : items, categories et formulas.**

**Grâce au code JavaScript sur VScode qui est lié à la base de données, nous pouvons obtenir des informations, poster des informations, mettre à jour des informations et supprimer des informations. Tout cela est possible sur le logiciel Postman. Il suffit de sélectionner l'action que nous voulons faire sur Postman, puis d'envoyer la requête et de regarder la réponse dans la console.**

## Démarrer le serveur

Pour exécuter le serveur Express, suivez les étapes suivantes :
1. Allez sur le terminal de VScode.
2. Exécutez la commande :
    ``` npm run dev ```
3. Ouvrez Postman et envoyez les différentes requêtes.

## Requêtes disponibles

### Items

- **Voir tous les items**
  - Méthode : `GET`
  - URL : `/items`
  - Description : Retourne tous les items de la base de données.
  - Postman : "get Item"

- **Voir un item par ID**
  - Méthode : `GET`
  - URL : `/items/:id`
  - Description : Retourne un item spécifique grâce à son ID.
  - Postman : "get Item by id"

- **Poster un nouvel item**
  - Méthode : `POST`
  - URL : `/items`
  - Description : Ajoute un nouvel item dans la base de données.
  - Postman : "post item"

- **Mettre à jour un item**
  - Méthode : `PUT`
  - URL : `/items/:id`
  - Description : Met à jour les informations d'un item existant.
  - Postman : "put Item"

- **Supprimer un item**
  - Méthode : `DELETE`
  - URL : `/items/:id`
  - Description : Supprime un item de la base de données.
  - Postman : "del Item"

### Categories

- **Voir toutes les catégories**
  - Méthode : `GET`
  - URL : `/categories`
  - Description : Retourne toutes les catégories de la base de données.
  - Postman : "get category"

- **Voir une catégorie par ID**
  - Méthode : `GET`
  - URL : `/categories/:id`
  - Description : Retourne une catégorie spécifique grâce à son ID.
  - Postman : "get category by id"

- **Poster une nouvelle catégorie**
  - Méthode : `POST`
  - URL : `/categories`
  - Description : Ajoute une nouvelle catégorie dans la base de données.
  - Postman : "post category"

- **Mettre à jour une catégorie**
  - Méthode : `PUT`
  - URL : `/categories/:id`
  - Description : Met à jour les informations d'une catégorie existante.
  - Postman : "put category"

- **Supprimer une catégorie**
  - Méthode : `DELETE`
  - URL : `/categories/:id`
  - Description : Supprime une catégorie de la base de données.
  - Postman : "del category"

### Formulas

- **Voir toutes les formules**
  - Méthode : `GET`
  - URL : `/formulas`
  - Description : Retourne toutes les formules de la base de données.
  - Postman : "get formula"

- **Voir une formule par ID**
  - Méthode : `GET`
  - URL : `/formulas/:id`
  - Description : Retourne une formule spécifique grâce à son ID.
  - Postman : "get formula by id"

- **Poster une nouvelle formule**
  - Méthode : `POST`
  - URL : `/formulas`
  - Description : Ajoute une nouvelle formule dans la base de données.
  - Postman : "post formula"

- **Mettre à jour une formule**
  - Méthode : `PUT`
  - URL : `/formulas/:id`
  - Description : Met à jour les informations d'une formule existante.
  - Postman : "put formula"

- **Supprimer une formule**
  - Méthode : `DELETE`
  - URL : `/formulas/:id`
  - Description : Supprime une formule de la base de données.
  - Postman : "del formula"


## Sécurité

**Toutes les actions de POST, PUT et DELETE peuvent uniquement être exécutées par un administrateur qui doit entrer un nom d'utilisateur et un mot de passe.**