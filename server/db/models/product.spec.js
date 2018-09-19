const {expect} = require('chai')
const db = require('../index')
const Product = db.model('product')

describe('Product Model', () => {
  let product1
  before(() => {
    product1 = Product.build({
      title: 'Cody Awesome',
      description: '5 Hanover Square New York, NY 10004',
      price: 5,
      imageUrl:
        'http://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Face_Emoji_grande.png?v=1480481056'
    })
  })
  describe('fields in model', () => {
    it('contains title', () => {
      expect(product1.title).to.equal('Cody Awesome')
    })
    it('contains description', () => {
      expect(product1.description).to.equal(
        '5 Hanover Square New York, NY 10004'
      )
    })
    it('contains price', () => {
      expect(product1.price).to.equal(5)
    })
    it('contains imageUrl', () => {
      expect(product1.imageUrl).to.equal(
        'http://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Face_Emoji_grande.png?v=1480481056'
      )
    })
  })
})
