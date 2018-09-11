const db = require('./server/db')
//const { green, red } = require("chalk");
const {User, Product, Order, Review} = require('./server/db/models')

const users = [
  {
    fullName: 'Evie Ren',
    email: 'evieDestroyerOfKittens@gmail.com',
    isAdmin: true
  },
  {
    fullName: 'Esther Park',
    email: 'taskMistress@gmail.com',
    isAdmin: true
  },
  {
    fullName: 'Jasmine English',
    email: 'gitMistress@gmail.com',
    isAdmin: true
  }
]

const products = [
  {
    title: 'emoji 1',
    decription: 'this is the best',
    price: 100,
    inventoryQuantity: 45,
    category: 'happiness',
    imageUrl: '/images/emoji1'
  },
  {
    title: 'emoji 2',
    decription: 'this is the best',
    price: 5,
    inventoryQuantity: 45,
    category: 'sadness',
    imageUrl: '/images/emoji1'
  }
]
const orders = [
  {
    productId: 2,
    userId: 1
  },
  {
    productId: 1,
    userId: 2
  }
]
const reviews = [
  {
    productId: 1,
    userId: 1,
    title: 'the worst',
    review: 'this emoji is super lame. I want a new one!',
    stars: 1
  },
  {
    productId: 2,
    userId: 3,
    title: 'the best',
    review: 'this emoji is awesome. I want more!',
    stars: 5
  }
]

const seed = async () => {
  await db.sync({force: true})

  await users.map(user => User.create(user))
  //await category.map(user => Category.create(category))
  await products.map(product => Product.create(product))
  await orders.map(order => Order.create(order))
  await reviews.map(review => Review.create(review))

  console.log('Seeding success!')
  db.close()
}

seed().catch(err => {
  console.error(err)
  db.close()
})
