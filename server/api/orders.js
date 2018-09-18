const router = require('express').Router()
const {OrderProduct, Product, Order, User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    console.log('-----should come here ')
    let orders = await Order.findAll({
      include: [{all: true}]
    })
    console.log(orders, '--------------orders here ?')
    res.json(orders)
  } catch (err) {
    next(err)
  }
})
