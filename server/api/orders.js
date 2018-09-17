const router = require('express').Router()
const {OrderProduct, Order, User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    let orders = await OrderProduct.findAll({
      include: [{all: true}]
    })
    res.json(orders)
  } catch (err) {
    next(err)
  }
})
