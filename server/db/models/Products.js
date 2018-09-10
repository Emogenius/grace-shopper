const db = require('../db')
const Sequelize = require('sequelize')

const Product = db.define('products', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  decription: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {notEmpty: true}
  },
  price: {
    type: Sequelize.DECIMAL,
    validate: {min: 0}
  },
  inventoryQuantity: {
    type: Sequelize.INTEGER,
    validate: {min: 0}
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: ''
  }
})

module.exports = Product
