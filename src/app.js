const express = require('express')
const morgan = require('morgan')
const { default: helmet } = require('helmet')
const compression = require('compression')
const app = express()

// init middleware
app.use(morgan('dev'))
app.use(helmet())
// init db
app.use(compression())


// init routes
app.get('/', (req, res, next) => {
    const strComress = 'hello abc'
    return res.status(200).json({
        message: strComress
    })
})

// handle errors


module.exports = app