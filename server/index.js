const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors')
const alienRouter = require('./routes/aliens')


//const url = "mongodb://127.0.0.1:27017/MGIT";
//const url = 'mongodb://127.0.0.1:27020,127.0.0.1:27021,127.0.0.1:27022/cbitit1?replicaSet=m101';
const url   = "mongodb+srv://kavyasrivenkat08:9000588122@cbit.phtef.mongodb.net/?retryWrites=true&w=majority&appName=cbit";
const app = express()
mongoose.connect(url)
const con = mongoose.connection


con.on('open', () =>
{
console.log('connected...')
})
app.use(cors())
app.use(express.json())

app.use('/aliens',alienRouter)
app.listen(9000, () =>
{
console.log('Server started')
})
