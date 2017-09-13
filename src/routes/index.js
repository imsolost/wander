const router = require('express').Router()

const setLocals = (req, res, next) => {
  let loggedIn = false
  let username = null
  if (req.session.username) {
    loggedIn = true
    username = req.session.username
  }
  res.locals = {loggedIn, username}
  next()
}

router.use(setLocals)
router.use('/', require('./general'))

// const ensureLoggedIn = (req, res, next) => {
//   if (req.session && req.session.user) {
//     next()
//   } else {
//     res.redirect('/signin')
//   }
// }

// router.use(ensureLoggedIn)
// router.use('/', require('./user'))

module.exports = router
