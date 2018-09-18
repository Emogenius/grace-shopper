const {
  db,
  User,
  Order,
  Product,
  Review,
  Category
} = require('./models/index.js')
const {
  users,
  products,
  reviews,
  orders,
  orderProduct,
  categories
} = require('./Data4Models')

const {order_product: OrderProduct} = db.models

const seed = () =>
  Promise.all(users.map(user => User.create(user)))
    .then(() =>
      Promise.all(categories.map(category => Category.create(category)))
    )
    .then(() => Promise.all(products.map(product => Product.create(product))))
    .then(() => Promise.all(reviews.map(review => Review.create(review))))
    .then(() => Promise.all(orders.map(order => Order.create(order))))
    .then(() =>
      Promise.all(orderProduct.map(order => OrderProduct.create(order)))
    )

const main = () => {
  console.log('syncing db....')
  db
    .sync({force: true})
    .then(() => {
      console.log('database seeding GREAT... ^^ ')
      return seed()
    })
    .catch(err => {
      console.log('Error seeding/... T^T ')
      console.log(err.stack)
    })
    .then(() => {
      db.close()
      return null
    })
}

main()
