'use strict'

// Assertions
const chai = require('chai')
const expect = chai.expect
const chaiThings = require('chai-things')
chai.use(chaiThings)

const db = require('../server/db/models')
const User = db.model('user')
const Product = db.model('product')
const Order = db.model('order')
const Review = db.model('review')

// ******* USER tests***********
describe('basic model tests: User', () => {
  // Users must have a valid email address
  // Users email must be unique
  describe('user model', () => {
    it('requires an email address', async () => {
      const user = User.build()
      try {
        await user.validate()
        throw Error(
          'validation was successful but should have failed without `email`'
        )
      } catch (err) {
        expect(err.message).to.contain('email cannot be null')
      }
    })

    it('requires email address to be unique', async () => {
      const user1 = User.build({
        email: 'person1@aol.com'
      })
      const user2 = User.build({
        email: 'person1@aol.com'
      })
      try {
        await user2.validate()
        throw Error(
          'validation was successful but should have failed because email is not unique'
        )
      } catch (err) {
        expect(err.message).to.contain('Validation error')
      }
    })
  })
})

// *******product tests***********
describe('basic model tests: Product', () => {
  //Must have title,
  //   description,
  //    price,
  //    and inventory quantity
  // Must belong to at least one category
  // If there is no photo, there must be a placeholder photo used
  describe('product model', () => {
    it('requires a title', async () => {
      const product = Product.build()

      try {
        await product.validate()
        throw Error(
          'validation was successful but should have failed without a title'
        )
      } catch (err) {
        expect(err.message).to.contain('title cannot be null')
      }
    })

    it('requires a price ', async () => {
      const product = Product.build({
        name: 'smile'
      })
      try {
        await product.validate()
        throw Error('price is required')
      } catch (err) {
        expect(err.message).to.contain('Validation error')
      }
    })
  })
})

// *******order tests***********
describe('basic model tests: Order', () => {
  // Orders must belong to:
  //  a user OR guest session (authenticated vs unauthenticated)
  // Orders must contain line items that capture:
  //  the price,
  //  current product ID
  //  and quantity
  // If a user completes an order, that order should keep the price of the item at the time when they checked out even if the price of the product later changes

  describe('order model', () => {
    it('contains a foreign key pointing to user ', async () => {
      const order = Order.build()

      try {
        await order.validate()
        throw Error(
          'validation was successful but should have failed without an associated user'
        )
      } catch (err) {
        expect(err.message).to.contain(
          'shouldn not exist without a user--guest or otehrwise'
        )
      }
    })

    it('contains a foreign key pointing to product id ', async () => {
      const order = Order.build({
        userId: 1,
        quanitity: 4
      })

      try {
        await order.validate()
        throw Error(
          'validation was successful but should have failed without a product'
        )
      } catch (err) {
        expect(err.message).to.contain('Validation error')
      }
    })
    it('should have a property indicating if a order has been fulfilled ', async () => {
      const order = await Order.build({
        userId: 1,
        productId: 1,
        quanitity: 1,
        fulfilled: 'closed'
      })
      expect(order.fulfilled).to.equal('closed')
    })

    it('should set fulfilled to open by default ', async () => {
      const order2 = await Order.build({
        userId: 1,
        productId: 1,
        quanitity: 1
      })
      expect(order2.fulfilled).to.equal('open')
    })
  })
})

// *******review tests***********
describe('basic model tests: Reviews', () => {
  // All reviews must belong to a product
  // All reviews must belong to a user
  // All reviews must be at least X characters
  describe('review model', () => {
    it('contains a foreign key pointing to a product', async () => {
      const review = Review.build()
      try {
        await review.validate()
        throw Error(
          'validation was successful but should have failed without an associated product'
        )
      } catch (err) {
        expect(err.message).to.contain('reviews must belong to a product')
      }
    })

    it('contains a foreign key pointing to its author', async () => {
      const review = Review.build({
        name: ''
      })

      try {
        await review.validate()
        throw Error(
          'validation was successful but should have failed wihtout an author'
        )
      } catch (err) {
        expect(err.message).to.contain('Validation error')
      }
    })

    it('reviews under the specified length should not be accepted', async () => {
      const review = Review.build({
        userId: 1,
        productId: 1,
        review: 'its ok I guess',
        stars: 1
      })
      try {
        await review.validate()
        throw Error('should not allow reviews shorter than 60 characters')
      } catch (err) {
        expect(err.message).to.contain('Validation error')
      }
    })
  })
})
