const { db } = require("./server/db");
//const { green, red } = require("chalk");
const Product = require("./server/db/Product.model");
const User = require("./server/db/User.model");
const Review = require("./server/db/Review.model");
const Order = require("./server/db/Order.model");

const Users = [
  {
    firstName: "Cher",
    lastName: "Horowitz",
    email: "whatever@aol.com",
  },
  {
    firstName: "Dion",
    lastName: "Davenport",
    email: "AsIf@aol.com",
   isAdmin: yes,

  }
];

const products = [
  {
    title:"emoji 1",
      decription: "this is the best",
      price:100, 
      inventoryQuantity: 45,
      category: sadness,
      imageUrl: '/images/emoji1'
    },
  {
        title:"emoji 2",
          decription: "this is the best",
          price:5 , 
          inventoryQuantity: 45,
          category: sadness,
          imageUrl: '/images/emoji1'
        }
  
];
const orders = [
    {
      name: "Bronson Alcott High",
      imageUrl: "/images/Clueless_campus.jpg",
      tagline: "Rollin with the homies",
      address: "Beverly Hills,CA",
      description: "it's like a really good school",
      style: "clueless"
    },
    {
      name: "North Shore High School",
      imageUrl: "/images/mean.girls.jpg",
      tagline: "I love your bracelet. Where did you get it?",
      address: "Evanston, IL",
      description: "The Plastics rule this school",
      style: "meanGirls"
    },
  ];
  const reviews= [
    {
      title: "the worst",
      review: "this emoji is super lame. I want a new one!",
      stars: 1
    },
    {
        title: "the best",
        review: "this emoji is awesome. I want more!",
        stars: 5
      },
    
  ];

const seed = async () => {
  await db.sync({ force: true });

  const seedUser= await users.map(user=> User.create(user));
  const seedEmoji = await products.map(product => Product.create(product));
  const seedOrder= await orders.map(order => Order.create(order));
  const seedReview= await reviews.map(order => Review.create(review));

  return Promise.all(seedUser, seedEmoji,seedOrder)
  //,seedReview);
  console.log(green("Seeding success!"));

  db.close();
};

seed().catch(err => {
  console.error(red("Oh noes! Something went wrong!"));
  console.error(err);
  db.close();
});
