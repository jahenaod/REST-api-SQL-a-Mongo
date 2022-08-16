"use strict";

const config = require("./config");
const sqlConnection = require("./sql");
const sql = new sqlConnection(config.connectionSQL);

(async () => {
    try {
        let select = await sql.execStoreProcedureById("ConsultarDatosLotesXDia",'2020-01-27 00:00:00','2020-01-27 23:59:59');
        console.log(JSON.stringify(select.recordset))
    } catch (error) {
        sql.close();
        console.log(error);
    }
})();