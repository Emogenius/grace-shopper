const User = require('./user')
const Order = require('./order')
const Product = require('./product')
const Review = require('./review')
const Category = require('./category')
const db = require('../db')

User.hasMany(Order)
Order.belongsTo(User)

Product.belongsTo(Category)
Category.hasMany(Product)

User.hasMany(Review)
Review.belongsTo(User)

Product.hasMany(Review)
Review.belongsTo(Product)

Order.belongsToMany(Product, {through: 'order_product'})
Product.belongsToMany(Order, {through: 'order_product'})

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

const {order_product: OrderProduct} = db.models

module.exports = {
  db,
  User,
  Order,
  Product,
  OrderProduct,
  Review,
  Category
}
