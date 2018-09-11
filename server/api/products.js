const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const product = await Product.findAll()
    res.json(product)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)
    res.json(product)
  } catch (err) {
    next(err)
  }
})
router.get('/:category', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      where: {category: req.params.category}
    })
    res.json(products)
  } catch (err) {
    next(err)
  }
})
