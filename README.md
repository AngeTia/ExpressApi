# CREATION D'UNE API REST NODESJS EXPRESS AVEC DB: POSTGRESQL

# On crée un nouveau utilisateur

 > postgres=# CREATE ROLE me WITH LOGIN PASSWORD 'password';
 *Attribution de rôle*
 > postgres=# ALTER ROLE me CREATEDB;
 > \q *On se deconnecte*
 *On se connecte avec notre nouveau utilisateur*
 > psql -d postgres -U me
 *On crée une base de données*
 >postgres=> CREATE DATABASE api;
 *On se connecte à la nouvelle base de donnée*
 > postgres=> \c api
   >You are now connected to database "api" as user "me".
 > api=>
 *On crée notre table*
    CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(30),
    email VARCHAR(30)
    );

 *On ajoute des données*
 INSERT INTO users (name, email)
  VALUES ('Jerry', 'jerry@example.com'), ('George', 'george@example.com');

# Configuration Express Server

> mkdir node-api-postgres
> cd node-api-postgres

*Dans le package.json on met:*
{
  "name": "node-api-postgres",
  "version": "1.0.0",
  "description": "RESTful API with Node.js, Express, and PostgreSQL",
  "main": "index.js",
  "license": "MIT"
}

*Install Express et le module de connexion à postgresql*
> npm i express pg

*Start server*
> node index.js