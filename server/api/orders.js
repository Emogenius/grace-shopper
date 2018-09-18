const router = require('express').Router()
const {Product, Order, User} = require('../db/models')
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    const product = await Order.create(req.body)
    res.status(201).json(product)
  } catch (err) {
    next(err)
  }
})
