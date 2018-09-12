const router = require('express').Router()
const {Product, Review} = require('../db/models')
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
    console.log('id in here is:', req.params.id)
    const product = await Product.findById(req.params.id, {
      include: [{model: Review}]
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

//need to also eager load the review
// router.get('/:id', async (req, res, next) => {
//   try {
//     console.log('id in here is:', req.params.id)
//     const product = await Product.findById(req.params.id, {
//       include: [{model: Reviews}]
//     })
//     res.json(product)
//   } catch (err) {
//     next(err)
//   }
// })

// router.get('/', async (req, res, next) => {
//   try {
//     const product = await Product.findAll()
//     res.json(product)
//   } catch (err) {
//     next(err)
//   }
// })
