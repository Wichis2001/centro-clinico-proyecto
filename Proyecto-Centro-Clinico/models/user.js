const { conectar, desconectar, regresoConexion } = require('../helpers/dbConnection');

const addUser = async (req, res) => {
    const { username, password, name, lastname, rol } = req.body;
    const newUser = {
        username: username,
        password: password,
        fullname: lastname,
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