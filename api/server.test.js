const db = require('../data/db-config')
const server = require('./server')
const request = require('supertest')

beforeAll( async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach( async () => {
    await db.seed.run()
})

describe('[GET] /soldiers', () => {
    test('gets all soldiers', async () => {
        const res = await request(server).get('/api/soldiers')
        console.log(res.body)
        expect(res.body).toHaveLength(3)
    })
})