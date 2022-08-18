"use strict";

const config = require("./config");
const sqlConnection = require("./sql");
const sql = new sqlConnection(config.connectionSQL);

(async () => {
    try {
        let select = await sql.selectById("test", 1);
        console.log(select.recordset);
    } catch (error) {
        sql.close();
        console.log(error);
    }
})();