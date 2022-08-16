"use strict";

const config = require("./config");
const sqlConnection = require("./sql");
const sql = new sqlConnection(config.connectionSQL);

(async () => {
    try {
        let select = await sql.select("LoteInfoporcinos");
        console.log(JSON.stringify(select.recordset));
    } catch (error) {
        sql.close();
        console.log(error);
    }
})();