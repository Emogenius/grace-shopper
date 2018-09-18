const router = require('express').Router()
const {OrderProduct, Product, Order, User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    let orders = await Order.findAll({
      include: [{all: true}]
    })
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    let order = await Order.findById(req.params.id)
    let data = await order.update(req.body)
    console.log(data, '-------update status here ???')
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    let data = await Order.create(req.body)
    res.json(data)
  } catch (err) {
    next(err)
  }
})
