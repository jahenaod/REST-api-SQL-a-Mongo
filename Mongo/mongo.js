const mongoose = require('mongoose')
require('dotenv').config()
const{Schema, model} = require('mongoose')

const connectionString ="mongodb+srv://usuario1:juanan1025@cluster0.sbl9ehx.mongodb.net/?retryWrites=true&w=majority"
//process.env.MONGO_DB_URI

mongoose.connect(connectionString) 
    .then(() => {
        console.log('Conectado a Mongodb')
    }).catch(err =>{
        console.log(err)
     })



