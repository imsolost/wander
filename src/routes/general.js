const utils = require('../utils/bcrypt')
const users = require('../database/users.js')
const moment = require('moment')
const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.route('/signup')
  .get((req, res) => res.render('signup'))
  .post((req, res) => {
    const username = req.body.username
    utils.encryptPassword(req.body.password)
      .then((password) => {
        users.create(username, req.body.email, password)
          .then(() => {
            req.session.username = username
            req.session.save( res.redirect(`/profile/${rusername}`))
          })
      })
      .catch(error => res.status(500).render('error', {error}))
  })

router.route('/signin')
  .get((req, res) => res.render('signin'))
  .post((req, res) => {
    const username = req.body.username
    users.getByUsername(username)
      .then((user) => {
        utils.comparePasswords(req.body.password, user.password)
          .then((boolean) => {
            if (boolean) {
              req.session.username = username
              req.session.save(res.redirect(`/profile/${username}`))
            } else res.redirect('/signin')
          })
      })
      .catch(error => res.status(500).render('error', {error}))
  })

router.get('/logout', (req, res) => {
  req.session.destroy(res.redirect('/'))
})

router.get('/profile/:username', (req, res) => {
  users.getByUsername(req.params.username)
    .then(user => res.render('profile', {user, moment}))
    .catch(error => res.status(500).render('error', {error}))
})

module.exports = router
