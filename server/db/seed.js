const {
  db,
  User,
  Order,
  Product,
  Review,
  Category
} = require('./models/index.js')

const users = [
  {
    fullName: 'Ester Park',
    address: 'Night Fury',
    phoneNumber: '636-333-3333',
    isAdmin: true,
    email: 'ester@email.com',
    password: '123'
  }
]

const products = [
  {
    title: 'World of Dreams',
    description: 'hellow work',
    price: 1,
    inventoryQuantity: 2,
    imageUrl:
      'http://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Face_Emoji_grande.png?v=1480481056'
  }
]

const reviews = [
  {
    title: 'hellow work',
    review: 'heeee',
    stars: 2
  }
]

const categories = [
  {
    name: 'food'
  },
  {
    name: 'animal'
  },
  {
    name: 'emotion'
  },
  {
    name: 'activity'
  }
]

const seed = () =>
  Promise.all(users.map(user => User.create(user)))
    .then(() => Promise.all(products.map(product => Product.create(product))))
    .then(() => Promise.all(reviews.map(review => Review.create(review))))
    .then(() =>
      Promise.all(categories.map(category => Category.create(category)))
    )

const main = () => {
  console.log('syncing db....')
  db
    .sync({force: true})
    .then(() => {
      console.log('seeding database....')
      return seed()
    })
    .catch(err => {
      console.log('Error seeding/...')
      console.log(err.stack)
    })
    .then(() => {
      db.close()
      return null
    })
}

main()
