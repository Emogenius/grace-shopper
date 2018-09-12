const router = require('express').Router()
module.exports = router

router.get('/', (req, res, next) => {
  try {
    res.json(req.session.cart)
    console.log('REQ SESSION CART', req.session.cart)
  } catch (err) {
    next(err)
  }
})

router.delete('/:productId', (req, res, next) => {
  try {
    req.session.cart = req.session.filter(
      product => product.id !== req.params.productId
    )
    res.json(req.session.cart)
  } catch (err) {
    next(err)
  }
})

// POST

// router.put('/:productId', (req, res, next) => {
//   try {
//     req.session.cart = req.session.filter(
//       product => product.id === req.params.productId
//     )
//   } catch (err) {
//     next(err)
//   }
// })
