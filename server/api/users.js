const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email', 'isAdmin']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// PUT /api/users/:id
router.put('/:id', async (req, res, next) => {
  const userToUpdate = await User.findById(req.params.id)
  const updatedUser = await userToUpdate.update({
    // what should we update?
    isAdmin: req.body.user.isAdmin,
    email: req.body.user.email
  })
  try {
    if (!userToUpdate) return res.sendStatus(404)
    res.json(updatedUser)
  } catch (err) {
    next(err)
  }
})
