const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Review = db.model('review')

describe('Review routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/review/', () => {
    const review = {
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec elementum lectus. Sed imperdiet ac libero quis mollis.',
      rating: 4
    }

    beforeEach(() => {
      return Review.create(review)
    })

    it('GET /api/reviews', () => {
      return request(app)
        .get('/api/reviews')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body[0].title).to.be.equal(review.title)
          expect(res.body[0].description).to.be.equal(review.description)
          expect(Number(res.body[0].rating)).to.be.equal(review.rating)
        })
    })

    it('POST /api/reviews', () => {
      return request(app)
        .post('/api/reviews')
        .send(review)
        .expect(201)
        .then(res => {
          expect(res.body).to.be.an('object')
          expect(res.body.title).to.be.equal(review.title)
        })
    })
  })
})
