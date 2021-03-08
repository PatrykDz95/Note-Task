const request = require('supertest')
const app = require('../server')
const User = require('../models/user')


describe('Post Endpoints', () => {
    it('should create a new user', async () => {
      const response = await request(app)
        .post('/api/users/register')
        .send({
            name: "PL1",
            email: "r2aaa@gmail.com",
            password: "12345Patryk",
            password2: "12345Patryk"
        })
      expect(response.statusCode).toEqual(200)
    })
})

describe('Post Endpoints', () => {
  it('should login user', async () => {
    const response = await request(app)
    .post('/api/users/login')
    .send({
      email: "r2aaa@gmail.com",
      password: "12345Patryk",
    })
    expect(response.statusCode).toEqual(200)
  })
})

describe('Post Endpoints', () => {
  it('should not login user', async () => {
    const response = await request(app)
    .post('/api/users/login')
    .send({
      email: "patryk123@gmail.com",
      password: "Patryk123",
    })
    expect(response.statusCode).toEqual(404)
  })
})