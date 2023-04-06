# CREATION D'UNE API REST NODESJS EXPRESS AVEC DB: POSTGRESQL

# On crée un nouveau utilisateur

 > postgres=# CREATE ROLE me WITH LOGIN PASSWORD 'password'; </br>
 *Attribution de rôle*<br>
 > postgres=# ALTER ROLE me CREATEDB;<br>
 > \q *On se deconnecte*<br>
 *On se connecte avec notre nouveau utilisateur*<br>
 > psql -d postgres -U me<br>
 *On crée une base de données*<br>
 >postgres=> CREATE DATABASE api;<br>
 *On se connecte à la nouvelle base de donnée*<br>
 > postgres=> \c api<br>
   >You are now connected to database "api" as user "me".<br>
 > api=><br>
 *On crée notre table*<br>
    CREATE TABLE users (<br>
    ID SERIAL PRIMARY KEY,<br>
    name VARCHAR(30),<br>
    email VARCHAR(30)<br>
    );<br>

 *On ajoute des données*<br>
 INSERT INTO users (name, email)<br>
  VALUES ('Jerry', 'jerry@example.com'), ('George', 'george@example.com');<br>

# Configuration Express Server

> mkdir node-api-postgres<br>

> cd node-api-postgres<br>

*Dans le package.json on met:*<br>
{<br>
  "name": "node-api-postgres",<br>
  "version": "1.0.0",<br>
  "description": "RESTful API with Node.js, Express, and PostgreSQL",<br>
  "main": "index.js",<br>
  "license": "MIT"<br>
}

*Install Express et le module de connexion à postgresql*<br>

> npm i express pg<br>

*Start server*<br>

> node index.js<br>

# Fonctionnement

Ce code est un exemple d'une API Node.js basée sur Express, qui utilise également le module body-parser pour parser les données d'une requête. <br>

Le code commence par importer les modules express et body-parser. Ensuite, il crée une instance d'express appelée app, définit le port 3000 pour l'écoute des requêtes et configure body-parser pour traiter les requêtes entrantes.<br>

Ensuite, l'application importe un module db qui contient les fonctions pour les opérations CRUD sur les utilisateurs. Il définit plusieurs endpoints HTTP pour l'API, qui appellent les fonctions appropriées du module db en réponse aux requêtes entrantes GET, POST, PUT et DELETE.<br>

Enfin, l'application définit un point de terminaison racine qui renvoie un message JSON en réponse aux requêtes GET.<br>

En résumé, ce code configure une API RESTful simple pour effectuer des opérations CRUD sur une base de données d'utilisateurs.