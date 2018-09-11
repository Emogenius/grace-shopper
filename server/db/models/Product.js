const db = require('../db')
const Sequelize = require('sequelize')

const Product = db.define('products', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  decription: {
    type: Sequelize.TEXT
    // allowNull: false,
    // validate: {notEmpty: true}
  },
  price: {
    type: Sequelize.DECIMAL, //Seqeulize.INTEGER
    allowNull: false,
    validate: {min: 0} //defaultValue: 1
  },
  inventoryQuantity: {
    type: Sequelize.INTEGER,
    validate: {min: 0}
  },
  category: {
    type: Sequelize.STRING, //Sequelize.ARRAY(Sequelize.STRING) ?
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    //'/smiling_face_emoji.png' sth
    defaultValue:
      'http://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Face_Emoji_grande.png?v=1480481056'
  }
})

module.exports = Product
