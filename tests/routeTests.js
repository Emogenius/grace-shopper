'use strict'

// Assertions
const chai = require('chai')
const expect = chai.expect
const chaiThings = require('chai-things')
chai.use(chaiThings)

const db = require('../server/db/models')
const User = db.model('user')
const Product = db.model('product')
const Order = db.model('order')
const Review = db.model('review')

// >>>>>>> eventual Routes tests will need
// const app = require('../server/app')
// const agent = require('supertest')(app)

// describe('Campus routes', () => {
//   let storedCampuses

//   const campusData = [
//     {
//       name: 'Grace Hopper'
//     },
//     {
//       name: 'Fullstack Academy'
//     }
//   ]

//   beforeEach(async () => {
//     const createdCampuses = await Campus.bulkCreate(campusData)
//     storedCampuses = createdCampuses.map(campus => campus.dataValues)
//   })

//   // Route for fetching all campuses
//   describe('GET `/api/campuses`', () => {
//     it('serves up all Campuses', async () => {
//       const response = await agent.get('/api/campuses').expect(200)
//       expect(response.body).to.have.length(2)
//       expect(response.body[0].name).to.equal(storedCampuses[0].name)
//     })
//   })

//   // Route for fetching a single campus
//   describe('GET `/api/campuses/:id`', () => {
//     it('serves up a single Campus by its id', async () => {
//       const response = await agent.get('/api/campuses/2').expect(200)
//       expect(response.body.name).to.equal('Fullstack Academy')
//     })
//   })
// })
