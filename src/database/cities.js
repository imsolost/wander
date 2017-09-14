const db = require('./db')

const getAll = () => {
  return db.query('SELECT * FROM cities', [])
    .catch((error) => {
      console.log('\nError in getAll query\n')
      throw error
    })
}

const getByCityname = (cityname) => {
  return db.one(`
    SELECT * FROM cities
    WHERE cityname = $1`,
    [cityname])
    .catch((error) => {
      console.log('\nError in getByUsername query\n')
      throw error
    })
}

const getPosts = (city) => {
  return db.query('SELECT * FROM cities', [])
    .catch((error) => {
      console.log('\nError in getAll query\n')
      throw error
    })
}

module.exports = {
  getAll,
  getByCityname,
}
