// Permet à NodeJs de manipuler notre base de données
const Pool = require('pg').Pool

// Connexion à la base de données
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432,
})

const getUsers = (request, response) => {
    // pool.query() est utilisée pour exécuter une requête SQL sur la base de données PostgreSQL. 
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const { name, email } = request.body

    pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Utilisateur ajouté avec l'ID: ${id}`)
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body

    pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id],
        (error) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Utilisateur modifié avec l'ID: ${id}`)
        }
    )
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM users WHERE id = $1', [id], (error) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Utilisateur supprimé avec l'ID: ${id}`)
    })
}

// Permet d'acceder à nos fonctions à partir de index.js
module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}