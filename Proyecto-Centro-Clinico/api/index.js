const express = require('express');
const { reset } = require('nodemon');
const { dirname } = require('path');
const app = express();
const path= require('path');
const port = process.env.port || 5000;


app.use(express.static('public'));
app.use('/css', express.static(__dirname+'public/css'));
app.use('/js', express.static(__dirname+'public/js'));

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
app.get('/secretary/registrar-medico', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/secretary/registrar-medico.html'));
});
app.get('/admin/corte-caja', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/admin/corte-caja.html'));
});
app.get('/admin/crear-examen', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/admin/crear-examen.html'));
});
app.get('/admin/crear-usuario', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/admin/crear-usuario.html'));
});
app.get('/admin/registrar-medico', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/admin/registro-medicos.html'));
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