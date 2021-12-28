const mysql = require('mysql');

const mysqlhost = process.env.MYSQLHOST || '192.168.0.6';
const mysqluser = process.env.MYSQLUSER || "Usuario";
const mysqlpass = process.env.MYSQLPASS || "GrupoCracks";

const conexion= mysql.createConnection({
    host: mysqlhost,
    user: mysqluser,
    password: mysqlpass,
    database: 'CentroClinico'
});


const conectar = ()=>{
    return new Promise((res, rej)=>{
        conexion.connect(error =>{
            if(error){
                rej(error);
            } 
            res('Conexion realizada con éxito')
        });
    })
};

const desconectar= ()=>{
    return new Promise((res,rej)=>{
        conexion.end(error =>{
            if(error){
                rej(error);
            } 
            res('Sesion cerrada exitosamente');
            
        });
    })
};

const regresoConexion =()=>{
    return conexion;
}

module.exports={
    conectar,
    desconectar,
    regresoConexion
}

