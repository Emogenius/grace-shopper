const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  title: {
    type: Sequelize.STRING,
    defaultValue: 'i dont know'
  },
  description: {
    type: Sequelize.TEXT
    // validate: {
    //   len: [0, 250]
    // }
  },
  rating: {
    type: Sequelize.INTEGER,
    validate: {min: 0, max: 5}
  }
})

module.exports = Review
