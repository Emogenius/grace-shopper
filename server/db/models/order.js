const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  isFulfill: {
    type: Sequelize.STRING,
    validate: {
      isIn: {
        args: [['Shipped', 'Pending']],
        msg: 'Must be pending or shipped'
      }
    }
  }
})

module.exports = Order
