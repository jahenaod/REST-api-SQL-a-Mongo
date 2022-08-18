require('dotenv').config()
require('./Mongo/mongo')

const express = require('express')
const app = express()
const cors = require('cors')
const InformacionLotes = require('./models/lotes')
const { request } = require('express')
const notFound = require('./middlewares/notFound')
const handleErrors = require('./middlewares/handleErrors')
/*
const app = http.createServer((request,response)=>{
    response.writeHead(200,{ 'content-type' : 'application/json'})
    response.end(JSON.stringify(informacionLotes))
})
*/

app.use(express.json())

app.get('/', (request, response) => {
    response.send('<h1>InfoPorcinos</h1>')
})

app.get('/api/informacionLotes', (request, response) => {   //Funciona
    InformacionLotes.find({}).then(informacionLotes => {
        response.json(informacionLotes)
    })
})

app.get('/api/informacionLotes/:id', async (request, response) => {

    const IdLoteIP = request.params.id
    console.log(IdLoteIP)
    const informacionLotes = await InformacionLotes.findOne({ Lote: IdLoteIP }).exec()

    if (informacionLotes) {
        response.send(informacionLotes)
    } else {
        response.status(404).send()
    }
})

app.put('/api/informacionLotes/:IdLoteIP', async (request, response, next) => {
    try {
        const { IdLoteIP } = request.params
        const informacionLotes = request.body
        const encontrado = await InformacionLotes.findOne({ Lote: IdLoteIP }).exec()
        const { _id } = encontrado

        const newinformacionLotesInfo = {
            Lote: informacionLotes.Lote,
            CodigoLote: informacionLotes.CodigoLote,
            FechaCreacion: informacionLotes.FechaCreacion, //String
            Cantidad: informacionLotes.Cantidad,
            tipoCerdo: informacionLotes.tipoCerdo,
            Productor: informacionLotes.Productor,
            Granja: informacionLotes.Granja,
            Comercializador: informacionLotes.Comercializador,
            placaVehiculo: informacionLotes.placaVehiculo,
            Ciudad: informacionLotes.Ciudad,
            Departamento: informacionLotes.Departamento,
            Vereda: informacionLotes.Vereda,
            NumeroICA: informacionLotes.NumeroICA,
            HoraLlegadaPlanta: informacionLotes.HoraLlegadaPlanta, //String
            HoraIngreso: informacionLotes.HoraIngreso, //String
            HoraSalida: informacionLotes.HoraIngreso, //String
            numeroRemision: informacionLotes.numeroRemision,
            AnimalesRemisionados: informacionLotes.AnimalesRemisionados,
            animalesPesados: informacionLotes.animalesPesados,
            PesoTotal: informacionLotes.PesoTotal,
            NroTiqueteBascula: informacionLotes.NroTiqueteBascula,
            Inmunocastrado: informacionLotes.Inmunocastrado,
            LoteDeCeba: informacionLotes.LoteDeCeba,
            HoraSalidaGranja: informacionLotes.HoraSalidaGranja,
            agitadoTransporte: informacionLotes.agitadoTransporte,
            caidoTransporte: informacionLotes.caidoTransporte,
            muertoTransporte: informacionLotes.muertoTransporte,
            muertoDesembarque: informacionLotes.muertoDesembarque,
            agitadoCorral: informacionLotes.agitadoCorral,
            CaidoCorral: informacionLotes.CaidoCorral,
            muertoCorral: informacionLotes.muertoCorral,
            muertoCorralObservacion: informacionLotes.muertoCorralObservacion,
            enviadosSacrificioLineaNormal: informacionLotes.enviadosSacrificioLineaNormal,
            fechaEnvioSacrificioLineaNormal: informacionLotes.fechaEnvioSacrificioLineaNormal, //String
            enviadosSacrificioDeEmergencia: informacionLotes.enviadosSacrificioDeEmergencia,
            fechaEnvioSacrificioEmergencia: informacionLotes.fechaEnvioSacrificioEmergencia, //String
            Machos: informacionLotes.Machos,
            Hembras: informacionLotes.Hembras,
            Inmunocastrados: informacionLotes.Inmunocastrados
        }
        console.log(newinformacionLotesInfo)

        const actualizado = await InformacionLotes.findByIdAndUpdate(_id, newinformacionLotesInfo, { new: true })
        console.log(actualizado)
        response.send({ message: "updated" })
    } catch (error) {
        response.send({ error: error })
    }
})

app.delete('/api/informacionLotes/:id', async (request, response, next) => {

    try {
        const IdLoteIP = request.params.id
        const encontrado = await InformacionLotes.findOne({ Lote: IdLoteIP }).exec()
        const { _id } = encontrado

        const borrado = await InformacionLotes.findByIdAndDelete(_id)
        response.send({ borrado })
    } catch (error) {
        response.send({ error: error })

    }
})

app.post('/api/informacionLotes', (request, response) => {
    const informacionLotes = request.body

    const newinformacionLotes = new InformacionLotes({
        Lote: informacionLotes.Lote,
        CodigoLote: informacionLotes.CodigoLote,
        FechaCreacion: new Date(informacionLotes.FechaCreacion), //String
        Cantidad: informacionLotes.Cantidad,
        tipoCerdo: informacionLotes.tipoCerdo,
        Productor: informacionLotes.Productor,
        Granja: informacionLotes.Granja,
        Comercializador: informacionLotes.Comercializador,
        placaVehiculo: informacionLotes.placaVehiculo,
        Ciudad: informacionLotes.Ciudad,
        Departamento: informacionLotes.Departamento,
        Vereda: informacionLotes.Vereda,
        NumeroICA: informacionLotes.NumeroICA,
        HoraLlegadaPlanta: new Date(informacionLotes.HoraLlegadaPlanta), //String
        HoraIngreso: new Date(informacionLotes.HoraIngreso), //String
        HoraSalida: new Date(informacionLotes.HoraSalida), //String
        numeroRemision: informacionLotes.numeroRemision,
        AnimalesRemisionados: informacionLotes.AnimalesRemisionados,
        animalesPesados: informacionLotes.animalesPesados,
        PesoTotal: informacionLotes.PesoTotal,
        NroTiqueteBascula: informacionLotes.NroTiqueteBascula,
        Inmunocastrado: informacionLotes.Inmunocastrado,
        LoteDeCeba: informacionLotes.LoteDeCeba,
        HoraSalidaGranja: informacionLotes.HoraSalidaGranja,
        agitadoTransporte: informacionLotes.agitadoTransporte,
        caidoTransporte: informacionLotes.caidoTransporte,
        muertoTransporte: informacionLotes.muertoTransporte,
        muertoDesembarque: informacionLotes.muertoDesembarque,
        agitadoCorral: informacionLotes.agitadoCorral,
        CaidoCorral: informacionLotes.CaidoCorral,
        muertoCorral: informacionLotes.muertoCorral,
        muertoCorralObservacion: informacionLotes.muertoCorralObservacion,
        enviadosSacrificioLineaNormal: informacionLotes.enviadosSacrificioLineaNormal,
        fechaEnvioSacrificioLineaNormal: new Date(informacionLotes.fechaEnvioSacrificioLineaNormal), //String
        enviadosSacrificioDeEmergencia: informacionLotes.enviadosSacrificioDeEmergencia,
        fechaEnvioSacrificioEmergencia: new Date(informacionLotes.fechaEnvioSacrificioEmergencia), //String
        Machos: informacionLotes.Machos,
        Hembras: informacionLotes.Hembras,
        Inmunocastrados: informacionLotes.Inmunocastrados

    })
    newinformacionLotes.save().then(savedInformacionLotes => {
        response.json(savedInformacionLotes)

    })
})

app.use(notFound)

app.use(handleErrors)

// Start the server on port 
const PORT = 3001
app.listen(PORT, () => {
    console.log('Node server running on port ${PORT}');
});
