const request = require('supertest')
const app = require('../server')
const Task = require('../models/note')
  

describe('Post Endpoints', () => {
    it('should create a new note', async () => {
      const res = await request(app)
        .post('/notes/add')
        .send({
          title: 'hello',
          note: 'test is cool',
        })
      expect(res.statusCode).toEqual(201)
    })
})


describe('Get Endpoints', () => {
    it('should get note', async () => {
      const res = await request(app)
        .get('/notes/all')
        .send()
        expect(res.statusCode).toEqual(200)
    })
})


describe('Get Endpoint', () => {
  it('should get length of body', async () => {
    const res = await request(app)
      .get('/notes/all')
      .send()
      expect(res.body.length).toEqual(2)
  })
})