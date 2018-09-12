const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Product = db.module('product')

describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/products/', () => {
    const product = {
      title: 'Fire',
      description:
        'A small flame, mostly yellow but red at the top. Can be used to describe something or someone being hot, or in the context of being exemplary (lit, slang).',
      price: 10,
      inventoryQuantity: 10,
      imageUrl:
        'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/129/fire_1f525.png',
      category: 1
    }

    beforeEach(() => {
      return Product.create(product)
    })

    it('GET /api/products', async () => {
      const res = await request(app)
        .get('/api/products')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].title.to.be.equal(product.name))
    })
  })
})
