const mongoose = require('mongoose')
require('dotenv').config()
const{Schema, model} = require('mongoose')

const connectionString = 'mongodb+srv://juanan01:juan1025@cluster0.sbl9ehx.mongodb.net/?retryWrites=true&w=majority'
//process.env.MONGO_DB_URI

mongoose.connect(connectionString) 
    .then(() => {
        console.log('Conectado a Mongodb')
    }).catch(err =>{
        console.log(err)
     })
/*
    const informacionLotesSchema = new Schema({
        Lote: String, CodigoLote: String, 
        FechaCreacion: Date, //String
        Cantidad: Number,
        tipoCerdo: String,
        Productor: String,
        Granja: String,
        Comercializador: String,
        placaVehiculo: String,
        Ciudad: String,
        Departamento: String,
        Vereda: String,
        NumeroICA: String,
        HoraLlegadaPlanta: Date, //String
        HoraIngreso: Date, //String
        HoraSalida: Date, //String
        numeroRemision: String,
        AnimalesRemisionados: Number,
        animalesPesados: Number,
        PesoTotal: Number,
        NroTiqueteBascula: String,
        Inmunocastrado: String,
        LoteDeCeba: Number,
        HoraSalidaGranja: String,
        agitadoTransporte: Number,
        caidoTransporte: Number,
        muertoTransporte: Number,
        muertoDesembarque: Number,
        agitadoCorral: Number,
        CaidoCorral: Number,
        muertoCorral: Number,
        muertoCorralObservacion: Number,
        enviadosSacrificioLineaNormal: Number,
        fechaEnvioSacrificioLineaNormal: Date, //String
        enviadosSacrificioDeEmergencia: Number,
        fechaEnvioSacrificioEmergencia: Date, //String
        Machos: Number,
        Hembras: Number,
        Inmunocastrados: Number
    }) 
    
const InformacionLotes = model('informacionLote', informacionLotesSchema)
     
const informacionLote = new InformacionLotes({
    Lote: '12433372',
    CodigoLote: '1176',
    FechaCreacion: Date.now(),
    Cantidad: 30,
    tipoCerdo: 'Cerdo de Engorde',
    Productor: 'dolem',
    Granja: 'lorem ipsut',
    Comercializador: 'tito jauana',
    placaVehiculo: 'SNU 316',
    Cuidad: 'SANTO DOMINGO',
    Departamento: 'ANTIOQUIA',
    Vereda: 'NO',
    NumeroICA: '020-0570000203',
    HoraLlegadaPlanta: Date.now(),
    HoraIngreso: Date.now(),
    HoraSalida: Date.now(),
    numeroRemision: '0000',
    AnimalesRemisionados: 30,
    animalesPesados: 30,
    PesoTotal: 3645,
    NroTiqueteBascula: '101215',
    Inmunocastrado: 'SI',
    LoteDeCeba: 0,
    HoraSalidaGranja: 'N/D',
    agitadoTransporte: 0,
    caidoTransporte: 0,
    muertoTransporte: 0,
    muertoDesembarque: 0,
    agitadoCorral: 0,
    CaidoCorral: 0,
    muertoCorral: 0,
    muertoCorralObservacion: 0,
    enviadosSacrificioLineaNormal: 30,
    fechaEnvioSacrificioLineaNormal: Date.now(),
    enviadosSacrificioDeEmergencia: 0,
    fechaEnvioSacrificioEmergencia: Date.now(),
    Machos: 0,
    Hembras: 0,
    Inmunocastrados: 30
})

informacionLote.save()
    .then(result =>{
        console.log(result)
        mongoose.connection.close()
    })
    .catch(err => {
        console.log(err)
 })

*/




/*
prueba.find({}).then(result => {
    console.log(result)
    mongoose.connection.close()
})
 */


