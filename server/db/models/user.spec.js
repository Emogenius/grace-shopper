const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User Model', () => {
  let user1
  before(() => {
    user1 = User.build({
      fullName: 'Cody Awesome',
      address: '5 Hanover Square New York, NY 10004',
      phoneNumber: '123-456-789',
      email: 'cody_awesome@email.com',
      password: 'ilovepugs'
    })
  })
  describe('fields in model', () => {
    it('contains full name', () => {
      expect(user1.fullName).to.equal('Cody Awesome')
    })
    it('contains address', () => {
      expect(user1.address).to.equal('5 Hanover Square New York, NY 10004')
    })
    it('contains phone number', () => {
      expect(user1.phoneNumber).to.equal('123-456-789')
    })
    it('contains email', () => {
      expect(user1.email).to.equal('cody_awesome@email.com')
    })
  })
})
