const mysql = require('mysql');

const mysqlhost = process.env.MYSQLHOST || '192.168.1.5';
const mysqluser = process.env.MYSQLUSER || "Usuario";
const mysqlpass = process.env.MYSQLPASS || "GrupoCracks";

const conexion= mysql.createConnection({
    host: mysqlhost,
    user: mysqluser,
    password: mysqlpass
});

const conectar = conexion.connect(error =>{
    if(error){
        throw error;
    } else {
        console.log('Conexion Exitosa');
    }
});

const desconectar = conexion.end();

module.exports(
    conectar,
    desconectar
)