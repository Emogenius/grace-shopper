const router = require('express').Router()
const {OrderProduct, Product, Order, User} = require('../db/models')
const stripe = require('stripe')(process.env.STRIPE_CLIENT_SECRET)

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

router.post('/checkout', async (req, res, next) => {
  console.log('POST------------', req.body)
  try {
    let {status} = await stripe.charges.create({
      amount: req.body.total,
      currency: 'USD',
      source: req.body.token,
      receipt_email: req.body.email
    })

    res.json({status})
    await Order.create(req.body)

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
  let cartOrder = req.body.cartOrder
  let {email, shippingAddress, billingAddress, userId} = req.body.cartOrder
  let items = cartOrder.items
  // let order = []

  let createdOrder = {}
  try {
    if (userId) {
      let user = await User.findById(userId)

      createdOrder = await user.addOrder({
        isFulfill: 'Pending',
        email,
        shippingAddress,
        billingAddress
      })
    } else {
      createdOrder = await Order.create({
        isFulfill: 'Pending',
        email,
        shippingAddress,
        billingAddress
      })
    }

    await items.forEach(item => {
      let createdOrderItem = {
        quantity: item.quantity,
        price: item.price,
        productId: item.id
      }
      console.log('ORDER ITEM', createdOrderItem)
      createdOrder.addOrderItem(createdOrderItem)
    })
    console.log('---------CREATED ORDER', createdOrder)

    let resOrder = {
      isFulfill: createdOrder.getDataValue('isFulfill'),
      email: createdOrder.getDataValue('email'),
      shippingAddress: createdOrder.getDataValue('shippingAddress'),
      billingAddress: createdOrder.getDataValue('billingAddress')
    }

    res.json(resOrder)

    // Order needs method to get total
    // Order needs to add orderQuantity and orderPrice to each product
    // Order needs to add email for guest or user

  } catch (err) {
    next(err)
  }
})
