const db = require('./server/db')
const {green, red} = require('chalk')
const {User, Product, Order, Review, Category} = require('./server/db/models')
const users = require('./seedUser.json')
const categories = require('./seedCategory.json')
const orders = require('./seedOrder.json')
//const orderProducts = require('./seedOrderProduct.json')
const products = require('./seedProduct.json')
const reviews = require('./seedReview.json')

const seed = async () => {
  await db.sync({force: true})

  Promise.all(users.map(user => User.create(user)))
  Promise.all(categories.map(category => Category.create(category)))
  Promise.all(orders.map(order => Order.create(order)))
  Promise.all(products.map(product => Product.create(product)))
  Promise.all(reviews.map(review => Review.create(review)))
  //Promise.all(orderProducts.map(orderProduct => Review.create(orderProduct)))

  // seed your database here!

  // await db.query(
  //   "SELECT setval('students_id_seq', (SELECT MAX(id) FROM students));"
  // )
  // await db.query(
  //   "SELECT setval('campuses_id_seq', (SELECT MAX(id) FROM campuses));"
  // )

  console.log(green('Seeding success!'))
  db.close()
}

seed().catch(err => {
  console.error(red('Oh noes! Something went wrong!'))
  console.error(err)
  db.close()
})
