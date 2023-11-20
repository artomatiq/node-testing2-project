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

router.get('/:id', (req, res, next) => {
    
})

router.post('/', (req, res, next) => {
    
})



module.exports = router