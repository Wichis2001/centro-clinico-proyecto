const { conectar, desconectar, regresoConexion } = require('../helpers/dbConnection');

const crearUsuario=async(cui, nombre, direccion, fecha_nacimiento, nit, telefono)=>{
    try{
        //await conectar();
        await verificar(cui, nombre, direccion, fecha_nacimiento, nit, telefono);
        //await desconectar();
        return 'Usuario Creado Exitosamente'
    } catch(error){
        throw error;
    }
}
const verificar=(cui, nombre, direccion, fecha_nacimiento, nit, telefono)=>{
    return new Promise((res, rej)=>{
        const sql = 'INSERT INTO paciente SET ?';
        const newPaciente = {
            cui,
            nombre,
            direccion,
            fecha_nacimiento,
            nit, 
            telefono
        };
        regresoConexion().query(sql, newPaciente, error=>{
            if(error){
                rej(error)
            } 
            res('Datos ingresados correctamente')
        })
    });
};

module.exports= {
    crearUsuario
};