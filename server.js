'use strict'

const express = require('express')
const mod = require('./mod')
const app = express()

app.get('/', mod.rootPage)

app.get('/mods', mod.findAll)

app.get('/mod/:id', mod.findById)

app.listen(3000)
console.log('Port 3000')
