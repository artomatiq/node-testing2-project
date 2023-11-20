const db = require('../data/db-config')
const server = require('./server')
const request = require('supertest')

beforeAll( async () => {
    await db.rollback()
    await db.migrate.latest
})

beforeEach( async () => {
    await db.seed.run()
})

describe('[GET] /soldiers', () => {
    test('gets all soldiers', async () => {
        const soldiers = await request(server).get('/soldiers')
        expect(soldiers).toHaveLength(3)
    })
})