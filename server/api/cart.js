const router = require('express').Router()
const Order = require('../db/models')
const stripe = require('stripe')(process.env.STRIPE_CLIENT_SECRET)

module.exports = router

// router.get('/', (req, res, next) => {
//   try {
//     console.log('REQ SESSION CART BEFORE SEND', req.session.cart)
//     req.session.cart.list = []
//     res.json(req.session.cart.list)
//     console.log('REQ SESSION CART', req.session.cart)
//   } catch (err) {
//     next(err)
//   }
// })

// router.delete('/:productId', (req, res, next) => {
//   try {
//     req.session.cart = req.session.filter(
//       product => product.id !== req.params.productId
//     )
//     res.json(req.session.cart)
//   } catch (err) {
//     next(err)
//   }
// })

// // POST /api/cart
// router.post('/', (req, res, next) => {
//   try {
//     console.log('WHAT AM I', req.session.cart)
//     // console.log('HERE', req.body)
//     req.session.cart.list = [...req.session.cart.list, req.body]
//     res.status(200).json(req.session.cart.list)
//   } catch (err) {
//     next(err)
//   }
// })

// router.put('/:productId', (req, res, next) => {
//   try {
//     req.session.cart = req.session.filter(
//       product => product.id === req.params.productId
//     )
//   } catch (err) {
//     next(err)
//   }
// })
