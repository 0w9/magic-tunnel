const express = require('express')
const fs = require('fs')

const app = express()
const port = 3008

var localIp = '127.0.0.1'

app.get('/123', async (req, res) => {
    res.status(200).json({ message: '123' })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))