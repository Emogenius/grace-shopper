const {expect} = require('chai')
const db = require('../index')
const Order = db.model('order')

describe('Order Model', () => {
  let order1
  before(() => {
    order1 = Order.build({
      email: 'cody_awesome@email.com',
      shippingAddress: '5 Hanover Square New York, NY 10004',
      billingAddress: '5 Hanover Square New York, NY 10004'
    })
  })
  describe('fields in model', () => {
    it('contains email', () => {
      expect(order1.email).to.equal('cody_awesome@email.com')
    })
    it('contains shipping address', () => {
      expect(order1.shippingAddress).to.equal(
        '5 Hanover Square New York, NY 10004'
      )
    })
    it('contains billing address', () => {
      expect(order1.billingAddress).to.equal(
        '5 Hanover Square New York, NY 10004'
      )
    })
  })
})
