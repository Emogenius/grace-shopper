const Sequelize = require('sequelize')
const db = require('../db')


const Review = db.define('review', {
date: { type: Sequelize.DATE, 
    defaultValue: Sequelize.NOW },
 //timestamps:true
 title: {
     type: Sequelize.STRING,
     allowNull:false
 },
 review: {
     type: sequelize.TEXT,
     validate: {
        longEnough: function() {
          if(this.length < 60) {
            throw new Error('Your review must be at least 60 characters')
          }
        }
    }
},
stars: {
    type: Sequelize.INTEGER,
    validate: { min: 0, max: 5 }
},


}
//author: Sequelize.STRING(userId.name)
)

