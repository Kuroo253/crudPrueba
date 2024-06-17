const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Item = require('./models/item');

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/crud-db')
    .then(() => console.log('conectado a MongoDB correctamente'))
    .catch(err => console.error(err));

const app = express();

// Middleware
app.use(bodyParser.json());

// CRUD

// Crear un nuevo ítem - CREATE = POST
app.post('/items', async (req, res) => {
    try {
        const item = new Item(req.body);
        await item.save();
        res.status(201).send(item);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Leer todos los ítems - READ = GET
app.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).send(items);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Leer un ítem por ID - READ = GET
app.get('/items/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).send();
        }
        res.status(200).send(item);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Actualizar un ítem por ID - PUT
app.put('/items/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!item) {
            return res.status(404).send();
        }
        res.status(200).send(item);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Eliminar un ítem por ID - DELETE
app.delete('/items/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) {
            return res.status(404).send();
        }
        res.status(200).send(item);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
