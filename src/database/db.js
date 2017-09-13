const pgp = require('pg-promise')()

const dbName = 'wander'

const connectionString = process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`
const db = pgp(connectionString)

module.exports = db
