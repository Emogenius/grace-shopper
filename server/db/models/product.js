const db = require('../db')
const Sequelize = require('sequelize')
//const Category = require('./')

const Product = db.define('product', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.DECIMAL, // INTEGER
    allowNull: false
  },
  inventoryQuantity: {
    type: Sequelize.INTEGER,
    validate: {min: 0}
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'http://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Face_Emoji_grande.png?v=1480481056'
  }
})

Product.findByKeyword = function(query) {
  return Product.findAll({
    where: {
      [Sequelize.Op.or]: [
        {
          name: {
            [Sequelize.Op.iLike]: `%${query}%`
          },
          description: {
            [Sequelize.Op.iLike]: `%${query}%`
          }
        }
      ]
    }
  })
}

// Not sure if we need these yet
// Product.findInName = function(query) {
//   return Product.findAll({
//     where: {
//       name: {
//         [Sequelize.Op.iLike]: `%${query}%`
//       }
//     }
//   })
// }

// Product.findInDescription = function(query) {
//   return Product.findAll({
//     where: {
//       description: {
//         [Sequelize.Op.iLike]: `%${query}%`
//       }
//     }
//   })
// }

// Product.findInCategory = function(id) {
//   return Product.findAll({
//     where: {
//       categoryId: id
//     },
//     include: Category
//   })
// }

module.exports = Product
