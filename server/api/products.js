const router = require('express').Router()
const {Product, Reviews} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const product = await Product.findAll()
    res.json(product)
  } catch (err) {
    next(err)
  }
})

//need to also eager load the review
router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id, {
      include: [{model: Reviews}]
    })
    res.json(product)
  } catch (err) {
    next(err)
  }
})
router.get('/category/:categoryId', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      where: {categoryId: req.params.categoryId}
    })
    res.json(products)
  } catch (err) {
    next(err)
  }
})
