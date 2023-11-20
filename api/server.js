const express = require('express')
const soldiersRouter = require('./soldiers/soldiers-router')

const server = express()

server.use(express.json())

server.use('/api/soldiers', soldiersRouter)

server.use('*', (req, res, next) => {
    next({status: 404, message: 'not found'})
})

server.use( (error, req, res, next) => { //eslint-disable-line
    res.status(error.status || 500).json({
        message: error.message || 'error',
        stack: error.stack
    })
})

module.exports = server