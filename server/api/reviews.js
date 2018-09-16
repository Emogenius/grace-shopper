const router = require('express').Router()
const {User, Product, Review} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const rev = await Review.findAll({
      include: [{model: Product}, {model: User}]
    })
    //{
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    //attributes: ['id', 'email', 'isAdmin']
    //})
    res.json(rev)
  } catch (err) {
    next(err)
  }
})

// PUT /api/users/:id
router.get('/user/:id', async (req, res, next) => {
  try {
    console.log(req.params.id)
    const userReviews = await Review.findAll({where: {userId: req.params.id}})
    res.json(userReviews)
  } catch (err) {
    next(err)
  }
})
router.get('/product/:id', async (req, res, next) => {
  try {
    const productReviews = await Review.findAll({
      where: {productId: req.params.id}
    })
    res.json(productReviews)
  } catch (err) {
    next(err)
  }
})

// router.put('/:id', async (req, res, next) => {
//     const userToUpdate = await Review.findAll({where:{userId:req.params.id}})
//     const updatedUser = await userToUpdate.update({
//       // what should we update?
//       isAdmin: req.body.user.isAdmin,
//       email: req.body.user.email
//     })
//     try {
//       if (!userToUpdate) return res.sendStatus(404)
//       res.json(updatedUser)
//     } catch (err) {
//       next(err)
//     }
//   })
