const db = require('../data/db-config')
const Soldier = require('./soldiers/soldiers-model')
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
        expect(res.body).toHaveLength(3)
    })
})

describe('[GET] /soldiers/id', () => {
    test('gets by id', async () => {
        const res = await request(server).get('/api/soldiers/1')
        expect(res.body).toBeDefined()
        expect(res.body).toMatchObject({soldier_id: 1, soldier_name: 'Art'})
    })
})

describe('[POST] /soldiers', () => {
    test('posts a soldier', async () => {
        const newSoldier = {soldier_name: 'Bobby'}
        await request(server).post('/api/soldiers').send(newSoldier)
        expect(await db('soldiers')).toHaveLength(4)
        expect(await Soldier.getByName(newSoldier.soldier_name)).toMatchObject(newSoldier)
    })
    test('returns posted soldier', async () => {
        const newSoldier = {soldier_name: 'Bobby'}
        const res = await request(server).post('/api/soldiers').send(newSoldier)
        expect(res.body).toBeDefined()
        expect(res.body.soldier_name).toBe('Bobby')
    })
})

