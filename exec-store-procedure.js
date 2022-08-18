"use strict";

const config = require("./config");
const sqlConnection = require("./sql");
const sql = new sqlConnection(config.connectionSQL);

(async () => {
    try {
        let select = await sql.execStoreProcedure("prueba_json");
        console.log(JSON.stringify(select.recordset))
    } catch (error) {
        sql.close();
        console.log(error);
    }
})();