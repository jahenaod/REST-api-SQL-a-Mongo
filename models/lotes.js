const { LongWithoutOverridesClass } = require('bson')
const{Schema, model} = require('mongoose')

const informacionLotesSchema = new Schema({
    Lote: String,
    CodigoLote: String, 
    FechaCreacion: Date, //String
    Cantidad: Number,
    TipoCerdo: String,
    Productor: String,
    Granja: String,
    Comercializador: String,
    PlacaVehiculo: String,
    Ciudad: String,
    Departamento: String,
    Vereda: String,
    NumeroICA: String,
    HoraLlegadaPlanta: Date, //String
    HoraIngreso: Date, //String
    HoraSalida: Date, //String
    NumeroRemision: String,
    AnimalesRemisionados: Number,
    animalesPesados: Number,
    PesoTotal: Number,
    NroTiqueteBascula: String,
    Inmunocastrado: String,
    LoteDeCeba: Number,
    HoraSalidaGranja: String,
    AgitadoEnTransporte: Number,
    CaidoEnTransporte: Number,
    MuertoEnTransporte: Number,
    MuertoEnDesembarque: Number,
    AgitadoEnCorral: Number,
    CaidoEnCorral: Number,
    MuertoEnCorral: Number,
    MuertoEnCorralObservacion: Number,
    EnviadosASacrificioLineaNormal: Number,
    FechaEnvioASacrificioLineaNormal: Date, //String
    EnviadosASacrificioDeEmergencia: Number,
    FechaEnvioASacrificioEmergencia: Date, //String
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

