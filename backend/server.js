require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const DB = require('./models')

app.get('/api', async (req, res) => {
    const ppl = await DB.User.findAll()
    res.json(ppl)
})

app.use(express.static(path.join(__dirname, 'build')))

DB.sequelize.sync().then(function() {
    // DB.User.create({
    //     email: 'tom@tom.com'
    // })
    app.listen(process.env.PORT, () => {
        console.log(`Example app listening on port ${process.env.PORT}`)
    })
})
