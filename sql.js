"use strict";

const http = require("http");
const mssql = require('mssql');

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("Servidor sql");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

module.exports = class Sql {
    constructor(stringConnection) {
        this.stringConnection = stringConnection;
    }

    connect() {
        mssql.on('error', err => {
            console.log(err);
            mssql.close();
        });

        return mssql.connect(this.stringConnection);
    }

    close() {
        return mssql.close();
    }

    async select(table) {
        return new Promise((resolve, reject) => {
            this.connect().then(pool => {
                return pool.request().query(`select * from ${table}`);
            }).then(result => {
                mssql.close();
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }
    
    async selectById(table, id) {
        if (id == undefined || id === 0) {
            return await this.select(table);
        } else {
            return new Promise((resolve, reject) => {
                this.connect().then(pool => {
                    return pool.request().query(`select * from ${table} where id=${id}`);
                }).then(result => {
                    mssql.close();
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
            });
        }
    }
    

    async execStoreProcedure(storeProcedure){
        return new Promise((resolve, reject) => {
            this.connect().then(pool => {
                return pool.request().execute(storeProcedure);
            }).then(result => {
                mssql.close();
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }
    

    async execStoreProcedureById(storeProcedure, parameter, parameter2){
        return new Promise((resolve, reject) => {
            this.connect().then(pool => {
                return pool.request()
                    .input("fechaInicio", mssql.VarChar, parameter)
                    .input("fechaFin", mssql.VarChar, parameter2)
                    .execute(storeProcedure);
            }).then(result => {
                mssql.close();
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }
    

}