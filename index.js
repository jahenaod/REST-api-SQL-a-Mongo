require('dotenv').config()
require('./Mongo/mongo')

const express = require('express')
const app = express()
const cors = require('cors')
const InformacionLotes = require('./models/lotes')
const { request } = require('express')
const notFound = require('./middlewares/notFound')
const handleErrors = require('./middlewares/handleErrors')

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
            TipoCerdo: informacionLotes.TipoCerdo,
            Productor: informacionLotes.Productor,
            Granja: informacionLotes.Granja,
            Comercializador: informacionLotes.Comercializador,
            PlacaVehiculo: informacionLotes.PlacaVehiculo,
            Ciudad: informacionLotes.Ciudad,
            Departamento: informacionLotes.Departamento,
            Vereda: informacionLotes.Vereda,
            NumeroICA: informacionLotes.NumeroICA,
            HoraLlegadaPlanta: informacionLotes.HoraLlegadaPlanta, //String
            HoraIngreso: informacionLotes.HoraIngreso, //String
            HoraSalida: informacionLotes.HoraIngreso, //String
            NumeroRemision: informacionLotes.NumeroRemision,
            AnimalesRemisionados: informacionLotes.AnimalesRemisionados,
            AnimalesPesados: informacionLotes.AnimalesPesados,
            PesoTotal: informacionLotes.PesoTotal,
            NroTiqueteBascula: informacionLotes.NroTiqueteBascula,
            Inmunocastrado: informacionLotes.Inmunocastrado,
            LoteDeCeba: informacionLotes.LoteDeCeba,
            HoraSalidaGranja: informacionLotes.HoraSalidaGranja,
            AgitadoEnTransporte: informacionLotes.AgitadoEnTransporte,
            CaidoEnTransporte: informacionLotes.CaidoEnTransporte,
            MuertoEnTransporte: informacionLotes.MuertoEnTransporte,
            MuertoEnDesembarque: informacionLotes.MuertoEnDesembarque,
            AgitadoEnCorral: informacionLotes.AgitadoEnCorral,
            CaidoEnCorral: informacionLotes.CaidoEnCorral,
            MuertoEnCorral: informacionLotes.MuertoEnCorral,
            MuertoEnCorralObservacion: informacionLotes.MuertoEnCorralObservacion,
            EnviadosASacrificioLineaNormal: informacionLotes.EnviadosASacrificioLineaNormal,
            FechaEnvioASacrificioLineaNormal: informacionLotes.FechaEnvioASacrificioLineaNormal, //String
            EnviadosASacrificioDeEmergencia: informacionLotes.EnviadosASacrificioDeEmergencia,
            FechaEnvioASacrificioEmergencia: informacionLotes.FechaEnvioASacrificioEmergencia, //String
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
        TipoCerdo: informacionLotes.TipoCerdo,
        Productor: informacionLotes.Productor,
        Granja: informacionLotes.Granja,
        Comercializador: informacionLotes.Comercializador,
        PlacaVehiculo: informacionLotes.PlacaVehiculo,
        Ciudad: informacionLotes.Ciudad,
        Departamento: informacionLotes.Departamento,
        Vereda: informacionLotes.Vereda,
        NumeroICA: informacionLotes.NumeroICA,
        HoraLlegadaPlanta: new Date(informacionLotes.HoraLlegadaPlanta), //String
        HoraIngreso: new Date(informacionLotes.HoraIngreso), //String
        HoraSalida: new Date(informacionLotes.HoraSalida), //String
        NumeroRemision: informacionLotes.NumeroRemision,
        AnimalesRemisionados: informacionLotes.AnimalesRemisionados,
        AnimalesPesados: informacionLotes.AnimalesPesados,
        PesoTotal: informacionLotes.PesoTotal,
        NroTiqueteBascula: informacionLotes.NroTiqueteBascula,
        Inmunocastrado: informacionLotes.Inmunocastrado,
        LoteDeCeba: informacionLotes.LoteDeCeba,
        HoraSalidaGranja: informacionLotes.HoraSalidaGranja,
        AgitadoEnTransporte: informacionLotes.AgitadoEnTransporte,
        CaidoEnTransporte: informacionLotes.CaidoEnTransporte,
        MuertoEnTransporte: informacionLotes.MuertoEnTransporte,
        MuertoEnDesembarque: informacionLotes.MuertoEnDesembarque,
        AgitadoEnCorral: informacionLotes.AgitadoEnCorral,
        CaidoEnCorral: informacionLotes.CaidoEnCorral,
        MuertoEnCorral: informacionLotes.MuertoEnCorral,
        MuertoEnCorralObservacion: informacionLotes.MuertoEnCorralObservacion,
        EnviadosASacrificioLineaNormal: informacionLotes.EnviadosASacrificioLineaNormal,
        FechaEnvioASacrificioLineaNormal: new Date(informacionLotes.FechaEnvioASacrificioLineaNormal), //String
        EnviadosASacrificioDeEmergencia: informacionLotes.EnviadosASacrificioDeEmergencia,
        FechaEnvioASacrificioEmergencia: new Date(informacionLotes.FechaEnvioASacrificioEmergencia), //String
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
    console.log(`Node server running on port ${PORT}`); 
});
