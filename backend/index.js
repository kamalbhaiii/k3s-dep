const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/init', (req,res) => {
    res.status(200).send({
        status: true,
        message: "Server is working"
    })
})

app.listen(process.env.EXPRESS_PORT, ()=>{
    console.log(`Server is live on port ${process.env.EXPRESS_PORT}`)
})