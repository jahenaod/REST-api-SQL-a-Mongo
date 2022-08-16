const { LongWithoutOverridesClass } = require('bson')
const{Schema, model} = require('mongoose')

const informacionLotesSchema = new Schema({
    Lote: String,
    CodigoLote: String, 
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

informacionLotesSchema.set('toJSON', {
    transform:(document, returnedObject) => {
        delete returnedObject._id
        delete returnedObject._v
    }
})

module.exports = InformacionLotes;

