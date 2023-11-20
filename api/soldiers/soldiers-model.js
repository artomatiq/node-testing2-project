const db = require('../../data/db-config')

async function getAll () {
    return db(`soldiers`)
}

async function getByID (id) {
    const soldier = await db('soldiers')
        .select('soldier_id', 'soldier_name')
        .where('soldier_id', id)
        .first()

    return soldier
}

async function getByName (name) {
    const soldier = await db('soldiers')
        .select('soldier_id', 'soldier_name')
        .where('soldier_name', name)
        .first()

    return soldier
}

async function insert (soldier) {
    const id = await db('soldiers').insert(soldier)
    return await getByID(id)
}

module.exports = {
    getAll, getByID, insert, getByName
}