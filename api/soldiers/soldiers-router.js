const express = require('express')
const Soldier = require('./soldiers-model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    await Soldier.getAll()
        .then (soldiers => {
            res.status(200).json(soldiers)
        })
        .catch(next)
})

router.get('/:id', async (req, res, next) => {
    await Soldier.getByID(req.params.id)
        .then (soldier => {
            res.status(200).json(soldier)
        })
        .catch(next)
})

router.post('/', async (req, res, next) => {
    await Soldier.insert(req.body)
        .then (soldier => {
            res.status(201).json(soldier)
        })
        .catch (next)
})



module.exports = router