const { conectar, desconectar, regresoConexion } = require('../helpers/dbConnection');

const crearMedico=async(nombre_medico, numero_colegiado)=>{
    try{
        await conectar();
        await verificar(nombre_medico, numero_colegiado);
        await desconectar();
        return 'Medico Creado Exitosamente'
    } catch (err){
        throw (err);
    }
}
const verificar=(nombre_medico, numero_colegiado)=>{
    return new Promise((res, rej)=>{
        const sql = 'INSERT INTO medico_recomendado SET ?';
        const newPaciente = {
            nombre_medico,
            numero_colegiado
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
    crearMedico
};