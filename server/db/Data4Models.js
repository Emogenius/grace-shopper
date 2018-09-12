// -------------------- USER DATA -----------------------
const users = [
  {
    fullName: 'Ester Park',
    isAdmin: true,
    email: 'ester@email.com',
    password: '123'
  },
  {
    fullName: 'Evie',
    address: '123 New York City',
    phoneNumber: '123-456-7899',
    isAdmin: false,
    email: 'evie@email.com',
    password: '123'
  },
  {
    fullName: 'Kristin Haper',
    phoneNumber: '636-333-3333',
    isAdmin: true,
    email: 'kristin@email.com',
    password: '123'
  },
  {
    fullName: 'Jasmine English',
    address: '123 NYC',
    phoneNumber: '636-333-3333',
    isAdmin: true,
    email: 'jasmine@email.com',
    password: '123'
  }
]

// ------------------------------ PRODUCTS -----------------------------
const products = [
  {
    title: 'Smiling Face With Sunglasses',
    description:
      'A face smiling and wearing dark sunglasses that is used to denote a sense of cool. The nerd face emoji is a similar face, but with regular glasses.',
    price: 1,
    inventoryQuantity: 4,
    imageUrl: '/images/smiling-face-with-sunglasses.png',
    categoryId: 3
  },
  {
    title: 'Smiling Face With Smiling Eyes',
    description:
      'A yellow face with smiling eyes and a closed smile turning up to rosy cheeks. Expresses genuine happiness and various warm, positive feelings. An emoji form of the ^^ emoticon.',
    price: 3,
    inventoryQuantity: 4,
    imageUrl: '/images/face-smiling-eyes.png',
    categoryId: 3
  },
  {
    title: 'Pouting Face',
    description:
      "A pouting face outwardly showing displeasure with a person or situation. Displayed with a furrowed brow on most platforms, this emoji is commonly used for mad or angry emotions. Samsung's version of this emoji includes a red anger symbol on the forehead.",
    price: 3,
    inventoryQuantity: 4,
    imageUrl: '/images/pouting-face.png',
    categoryId: 3
  },
  {
    title: 'Avocado',
    description:
      'A pear-shaped avocado, sliced in half to show its yellow-green flesh and large brown pit. Ready for toast, guacamole, or millennial jokes.',
    price: 3,
    inventoryQuantity: 4,
    imageUrl: '/images/avocado.png',
    categoryId: 1
  },
  {
    title: 'Fried Shrimp',
    description:
      'A prawn or shrimp breaded and deep-fried golden-brown. Known as ebi furai in Japan but commonly called shrimp tempura and served in a bento box. Not to be confused with the Shrimp. May be used to represent a small penis.',
    price: 3,
    inventoryQuantity: 4,
    imageUrl: '/images/fried-shrimp.png',
    categoryId: 1
  },
  {
    title: 'Baby Bottle',
    description:
      'A bottle of milk or formula, as or fed to a baby, with a bluish cap and rubber nipple or teat. Positioned upright or at a 45° angle, and filled to various levels, sometimes showing fill lines. Often used for newborns and childrearing.',
    price: 3,
    inventoryQuantity: 4,
    imageUrl: '/images/baby-bottle.png',
    categoryId: 1
  },
  {
    title: 'Tropical Drink',
    description:
      'A sunset-orange-colored tropical beverage in a stemmed glass, as a rum punch or mai tai. Served with a straw and fruit garnish. Many platforms include a cocktail umbrella, hence umbrella drink. Samsung previously featured an electric-blue concoction.',
    price: 3,
    inventoryQuantity: 4,
    imageUrl: '/images/tropical-drink.png',
    categoryId: 1
  }
]

// ------------------------------ REVIEWS -----------------------------

const reviews = [
  {
    title: 'love this review',
    review: 'heheheheeeee',
    stars: 2,
    userId: 1,
    productId: 2
  },
  {
    title: 'love this review twice',
    review: 'heheheheeeee',
    stars: 2,
    userId: 3,
    productId: 2
  }
]

// ------------------------------ CATEGORY -----------------------------

const categories = [
  {name: 'food'},
  {name: 'animal'},
  {name: 'emotion'},
  {name: 'activity'}
]

// ------------------------------ ORDER -----------------------------

const orders = []

module.exports = {users, products, reviews, categories, orders}
