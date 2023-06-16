const express = require('express')
const fs = require('fs')

const app = express()
const port = 3004

var localIp = '127.0.0.1'

app.get('/:path', async (req, res) => {
    const host = req.headers.host
    const path = req.params.path

    const subdomain = host.split('.')[0]

    const mapping = JSON.parse(fs.readFileSync('mapping.json'))
    const foundMappings = mapping.find(x => x.subdomain == subdomain)

    if(foundMappings) {
        const reqDomain = `http://${localIp}:${foundMappings.port}/${path}`

        const request = await fetch(reqDomain, {
            method: 'GET'
        })

        const requestJSON = await request.json()
        console.log(`Tunneling from ${req.hostname}/${path} to ${reqDomain}`)
        res.status(200).json(requestJSON)
    }
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))