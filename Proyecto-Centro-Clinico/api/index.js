const express = require('express');
const bodyParser = require('body-parser');
const { crearUsuario } = require('../models/paciente');
const { crearMedico } = require('../models/medico');

const { addUser } = require('../models/user');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use(bodyParser.json());
const path = require('path');
const port = process.env.port || 5000;


app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));

app.get('/', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/index.html'));
});
app.get('/login', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/login.html'));
});
app.get('/secretary', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/secretary/secretary.html'));
});
app.get('/secretary/venta', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/secretary/registar-venta.html'));
});
app.get('/secretary/registrar-paciente', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/secretary/registrar-paciente.html'));
});
app.post('/secretary/registrar-paciente', async (req, res) => {
    let exito = '';
    let fracaso = '';
    const { cui, nombre, direccion, nit, fechaNacimiento, telefono } = req.body;
    const nuevaFecha = () => {
        const info = fechaNacimiento.split('/').reverse().join('-');
        return info;
    };
    await crearUsuario(cui, nombre, direccion, nuevaFecha(), nit, telefono)
        .then(msg => exito = "exito")
        .catch(err => fracaso = 'Error al escribir en la DB' + err);
    if (exito !== '') {
        console.log(exito)
        exito = '';
        fracaso = '';
        return res.status(202).json({ status: 'conectado' });
    } else if (fracaso !== '') {
        console.log(fracaso)
        exito = '';
        fracaso = '';
        return res.status(503).json({ status: "error" });
    } else {
        console.log("no paso nada")
    }
});


app.get('/secretary/registrar-medico', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/secretary/registrar-medico.html'));
});

app.post('/secretary/registrar-medico', async (req, res) => {
    let exito = '';
    let fracaso = '';
    const { nombre_medico, numero_colegiado } = req.body;
    await crearMedico(nombre_medico, numero_colegiado)
        .then(msg => exito = "exito")
        .catch(err => fracaso = 'Error al escribir en la DB' + err);
    if (exito !== '') {
        console.log(exito)
        exito = '';
        fracaso = '';
        return res.status(202).json({ status: 'conectado' });
    } else if (fracaso !== '') {
        console.log(fracaso)
        exito = '';
        fracaso = '';
        return res.status(503).json({ status: "error" });
    } else {
        console.log("no paso nada")
    }
});

app.get('/admin', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/admin/admin.html'));
});

app.get('/admin/corte-caja', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/admin/corte-caja.html'));
});
app.get('/admin/crear-examen', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/admin/crear-examen.html'));
});

app.get('/admin/control-examenes', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/admin/control-examenes.html'));
});

app.get('/admin/crear-usuario', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/admin/crear-usuario.html'));
});

// METODO POST PARA AGREGAR USUARIO
app.post('/admin/crear-usuario', addUser);

app.get('/admin/control-users', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/admin/control-users.html'));
});
app.get('/admin/registro-medicos', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/admin/registro-medicos.html'));
});

app.post('/admin/registro-medicos', async (req, res) => {
    let exito = '';
    let fracaso = '';
    const { nombre_medico, numero_colegiado } = req.body;
    await crearMedico(nombre_medico, numero_colegiado)
        .then(msg => exito = "exito")
        .catch(err => fracaso = 'Error al escribir en la DB' + err);
    if (exito !== '') {
        console.log(exito)
        exito = '';
        fracaso = '';
        return res.status(202).json({ status: 'conectado' });
    } else if (fracaso !== '') {
        console.log(fracaso)
        exito = '';
        fracaso = '';
        return res.status(503).json({ status: "error" });
    } else {
        console.log("no paso nada")
    }
});


app.get('/admin/control-medicos', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/admin/control-medicos.html'));
});
app.get('/admin/reportes', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/admin/reportes.html'));
});
app.get('/laboratorio', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/laboratorista/ventanaLaboratorista.html'));
});
app.get('/laboratorio/modificar-resultados', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/laboratorista/busquedaBoleta.html'));
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));