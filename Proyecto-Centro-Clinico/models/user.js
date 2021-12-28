const { conectar, desconectar, regresoConexion } = require('../helpers/dbConnection');
const {encriptar, comparar} = require('../helpers/bcrypt');

const addUser = async (req, res) => {
    const { username, password, name, lastname, rol } = req.body;
    const passEncrypt = await encriptar(password);
    const newUser = {
        username: username,
        password: passEncrypt,
        fullname: name + " " +lastname,
        rol: rol,
    }

    await regresoConexion().query("INSERT INTO usuario set ?", [newUser], error =>{
        if (error) throw error;
        console.log('Se creo un nuevo usuario');
    });

    res.redirect("/admin/crear-usuario");

};

module.exports ={
    addUser
}