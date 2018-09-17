// -------------------- USER DATA -----------------------
const users = [
  {
    fullName: 'Esther Park',
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
  },
  {
    fullName: 'Cody',
    address: 'Fullstack Academy of Code, 5 Hanover Square',
    phoneNumber: '636-333-3333',
    isAdmin: true,
    email: 'cody@CodysCafe.com',
    password: '1337'
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
    title: 'Screaming',
    description: 'What?! That is due tomorrow?!.',
    price: 3,
    inventoryQuantity: 4,
    imageUrl: '/images/face-screaming-in-fear.png',
    categoryId: 3
  },
  {
    title: 'Tears of Joy ',
    description: 'This feature finally works! Thank god!',
    price: 3,
    inventoryQuantity: 4,
    imageUrl: '/images/face-tears-joy.png',
    categoryId: 3
  },

  {
    title: 'Smiling Face With Heart Eyes',
    description:
      'A yellow face with heart eyes. Expresses intense approval or excitment. An emoji form of the ^^ emoticon.',
    price: 3,
    inventoryQuantity: 4,
    imageUrl: '/images/heart-shaped-eyes.png',
    categoryId: 3
  },
  {
    title: 'Thinking face',
    description: 'How am I supposed to solve this REACTO problem? ',
    price: 3,
    inventoryQuantity: 4,
    imageUrl: '/images/thinking-face.png',
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
  },
  {
    title: 'Woman Does Yoga',
    description:
      'An emoji woman in lotus position getting her zen on. Because coding can be stressful!',
    price: 1,
    inventoryQuantity: 4,
    imageUrl: '/images/woman-in-lotus-position.png',
    categoryId: 4
  },
  {
    title: 'Woman Does Cartwheel',
    description:
      'An emoji woman celebrates victorious coding with a cartwheel.',
    price: 1,
    inventoryQuantity: 4,
    imageUrl: '/images/woman-doing-cartwheel.png',
    categoryId: 4
  },
  {
    title: 'Woman Enjoys Steam Room ',
    description:
      'After a hard week of coding, emoji woman luxuriates in the steam room during a well-deserved spa day.',
    price: 1,
    inventoryQuantity: 4,
    imageUrl: '/images/woman-spa.png',
    categoryId: 4
  },
  {
    title: 'Woman Juggles',
    description: 'Emoji woman juggles many tasks when creating applications.',
    price: 1,
    inventoryQuantity: 4,
    imageUrl: '/images/woman-juggling.png',
    categoryId: 4
  },
  {
    title: 'Woman Biking',
    description:
      'The subways are a mess so emoji woman has decided to take a citibike to Grace Hopper.',
    price: 1,
    inventoryQuantity: 4,
    imageUrl: '/images/woman-biking.png',
    categoryId: 4
  },
  {
    title: 'Woman Surfing',
    description:
      'Emoji woman wishes she could be on a beach surfing rather than surfing the web for clue about that wierd error message she keeps getting.',
    price: 1,
    inventoryQuantity: 4,
    imageUrl: '/images/woman-surfing.png',
    categoryId: 4
  },
  {
    title: 'Woman Dancing',
    description:
      'Emoji woman is doing what Kristin wishes she was doing RIGHT NOW.',
    price: 1,
    inventoryQuantity: 4,
    imageUrl: '/images/dancer.png',
    categoryId: 4
  },
  {
    title: 'Baby Shark',
    description: 'Baby shark! do do do do do do. Baby shark!',
    price: 1,
    inventoryQuantity: 100000,
    imageUrl: '/images/shark.png',
    categoryId: 2
  },
  {
    title: 'Unicorn',
    description: 'Not unicorn Robert Pattinson, but will do for now ',
    price: 1,
    inventoryQuantity: 16,
    imageUrl: '/images/unicorn-face.png',
    categoryId: 2
  },

  {
    title: 'tiger',
    description: 'Tigers are pretty cool too. Also, a previous Mac OSX',
    price: 1,
    inventoryQuantity: 16,
    imageUrl: '/images/tiger-face.png',
    categoryId: 2
  },
  {
    title: 'cat',
    description:
      'Kristin, Abby, Michelle and Tricia have one of these cute fuzzballs at home. ',
    price: 1,
    inventoryQuantity: 2,
    imageUrl: '/images/cat-face.png',
    categoryId: 2
  },
  {
    title: 'Monkey',
    description: 'Code monkey can NOT believe he broke all the code',
    price: 1,
    inventoryQuantity: 16,
    imageUrl: '/images/see-no-evil-monkey.png',
    categoryId: 2
  },
  {
    title: 'Cody',
    description:
      'This renaissance pup runs a cafe, maintains a wide-social circle of animal pals and occasionally administers quizes to fledgling coders',
    price: 1,
    inventoryQuantity: 2,
    imageUrl: '/images/dog-face.png',
    categoryId: 2
  },
  {
    title: 'Eeyore',
    description: 'Belongs to Jess',
    price: 1,
    inventoryQuantity: 16,
    imageUrl: '/images/rabbit.png',
    categoryId: 2
  },
  {
    title: 'Pig',
    description: 'How you feel after all the code-induced stress eating',
    price: 1,
    inventoryQuantity: 16,
    imageUrl: '/images/pig.png',
    categoryId: 2
  },
  {
    title: 'sushi',
    description: 'Is pretty good ',
    price: 1,
    inventoryQuantity: 16,
    imageUrl: '/images/sushi.png',
    categoryId: 1
  },
  {
    title: 'Coffee',
    description: 'Have you sucessfully installed java today?',
    price: 1,
    inventoryQuantity: 46,
    imageUrl: '/images/coffee.png',
    categoryId: 1
  },
  {
    title: 'Lollipop',
    description: "Kids get these after going to the doctor. Why don't adults?",
    price: 1,
    inventoryQuantity: 46,
    imageUrl: '/images/lollipop.png',
    categoryId: 1
  },
  {
    title: 'Champagne',
    description: 'Use these champagne glasses to toast your coding victories',
    price: 1,
    inventoryQuantity: 46,
    imageUrl: '/images/champ.png',
    categoryId: 1
  },
  {
    title: 'Grace Hopper',
    description: 'Coding like a boss.',
    price: 1,
    inventoryQuantity: 400,
    imageUrl: '/images/GH.jpg',
    categoryId: 4
  }
]

// ------------------------------ REVIEWS -----------------------------

const reviews = [
  {
    title: 'love this review',
    description: 'heheheheeeee',
    rating: 5,
    userId: 2,
    productId: 2
  },
  {
    title: 'love this review twice',
    description: 'heheheheeeee',
    rating: 5,
    userId: 2,
    productId: 1
  },
  {
    title: 'This emoji is great!',
    description: "Why isn't there more chocolate?",
    rating: 3,
    userId: 1,
    productId: 4
  },
  {
    title: 'I love this emoji',
    description: 'Oh thank god! cart finally works!',
    rating: 5,
    userId: 2,
    productId: 5
  },
  {
    title: 'I love this emoji',
    description: " If 'sees cheesecake' was an emoji it would look like this",
    rating: 5,
    userId: 3,
    productId: 6
  },
  {
    title: 'Would you like gaucamole with that?',
    description:
      'When I become a developer, this will not longer be a difficult question to answer',
    rating: 4,
    userId: 4,
    productId: 7
  },
  {
    title: ' Yep! ',
    description:
      'This is how Kristin looks when trying to come up with clever things for dummy data',
    rating: 4,
    userId: 4,
    productId: 8
  },
  {
    title: 'im hungry',
    description: 'yum',
    rating: 5,
    userId: 5,
    productId: 9
  },
  {
    title: 'this is cute',
    description: 'spillproof container!',
    rating: 2,
    userId: 5,
    productId: 10
  },
  {
    title: 'that looks good!',
    description: "I'd like to have a few of these!",
    rating: 5,
    userId: 1,
    productId: 11
  },
  {
    title: 'this reminds me...',
    description: 'that I need to stretch more between coding sessions!',
    rating: 3,
    userId: 3,
    productId: 12
  },
  {
    title: 'fun!',
    description: 'but watch out for the whiteboard!',
    rating: 4,
    userId: 4,
    productId: 13
  },
  {
    title: "i don't get it",
    description: 'why do humans do wierd things like this?',
    rating: 1,
    userId: 5,
    productId: 14
  },
  {
    title: 'i like this emoji',
    description: 'useful visual expression of common New York activity',
    rating: 2,
    userId: 3,
    productId: 15
  },
  {
    title: 'harder than it looks',
    description: 'I tried this once. It was a disaster',
    rating: 2,
    userId: 4,
    productId: 16
  },
  {
    title: 'cute',
    description:
      'I hear that peopel really do this in far rockaway. It seems cold',
    rating: 2,
    userId: 1,
    productId: 17
  },
  {
    title: 'Love it!',
    description:
      'My favorite thing to do. My emoji vocab would be incompelte without it!',
    rating: 5,
    userId: 3,
    productId: 18
  },
  {
    title: 'i LOVE this emoji',
    description: 'created specifically to torment Irene',
    rating: 5,
    userId: 3,
    productId: 19
  },
  {
    title: 'lol',
    description: 'Sorry for being so uni-corny!',
    rating: 5,
    userId: 1,
    productId: 20
  },
  {
    title: "it's the...",
    description: "Eye of the tiger. It's the thrill of the fight!",
    rating: 2,
    userId: 4,
    productId: 21
  },
  {
    title: 'LOVE',
    description: 'No cat woman is complete without this emoji.',
    rating: 5,
    userId: 3,
    productId: 22
  },
  {
    title: 'cute',
    description: 'funny',
    rating: 2,
    userId: 1,
    productId: 23
  },
  {
    title: 'HEY!',
    description: "I'm WAY cuter than this emoji!!",
    rating: 0,
    userId: 5,
    productId: 24
  },
  {
    title: 'too cute!',
    description: "Isn't he adorable?",
    rating: 5,
    userId: 1,
    productId: 24
  },
  {
    title: 'aww',
    description: 'the cutest barista ever!',
    rating: 5,
    userId: 3,
    productId: 24
  },
  {
    title: 'cute',
    description: 'But why is everything about Cody?',
    rating: 5,
    userId: 2,
    productId: 24
  },
  {
    title: 'I admit',
    description: 'he is kinda cute',
    rating: 5,
    userId: 4,
    productId: 24
  },
  {
    title: 'nope',
    description: 'mean',
    rating: 1,
    userId: 1,
    productId: 25
  },
  {
    title: 'aww',
    description: 'a fuzzy!',
    rating: 5,
    userId: 1,
    productId: 26
  },
  {
    title: 'behold',
    description: 'The real grace HOPPER',
    rating: 5,
    userId: 3,
    productId: 26
  },
  {
    title: 'Yum',
    description: 'lunch break!',
    rating: 4,
    userId: 4,
    productId: 27
  },
  {
    title: 'gives me LIFE!',
    description: "I can't human without this",
    rating: 5,
    userId: 3,
    productId: 28
  },
  {
    title: 'sugar rush!',
    description: 'yum!',
    rating: 4,
    userId: 2,
    productId: 29
  },
  {
    title: 'cheers',
    description: "When y'll finish this project, I'll let yall have some!",
    rating: 4,
    userId: 5,
    productId: 30
  },
  {
    title: 'too real',
    description: 'exactly how I feel',
    rating: 3,
    userId: 1,
    productId: 3
  },
  {
    title: 'im hungry',
    description: 'yum',
    rating: 2,
    userId: 2,
    productId: 9
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

const orders = [
  {
    isFulfill: false,
    userId: 2
  },
  {
    isFulfill: false,
    userId: 2,
    productId: 1
  },
  {
    isFulfill: true,
    userId: 2,
    productId: 1
  }
]

const orderProduct = [
  {
    orderId: 1,
    productId: 2
  },
  {
    orderId: 1,
    productId: 1
  },
  {
    orderId: 2,
    productId: 3
  },
  {
    orderId: 3,
    productId: 4
  },
  {
    orderId: 2,
    productId: 6
  },
  {
    orderId: 3,
    productId: 5
  }
]

module.exports = {users, products, reviews, categories, orders, orderProduct}
