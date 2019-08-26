const express = require('express');

const user = require('./app/controllers/user');

const routes = express.Router();

routes.get('/findall', user.index);
routes.get('/find/:id', user.show);
routes.post('/register', user.store);
routes.put('/update/:id', user.update);
routes.delete('/delete/:id', user.destroy);

module.exports = routes;
