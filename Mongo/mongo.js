const mongoose = require('mongoose')

const{Schema, model} = require('mongoose')

const connectionString =process.env.MONGO_DB_URI


mongoose.connect(connectionString) 
    .then(() => {
        console.log('Conectado a Mongodb')
    }).catch(err =>{
        console.log(err)
     })



