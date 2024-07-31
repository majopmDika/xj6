const Router = require('express');

//API middleware
const {createUserAPI} = require('../api/auth.api.js');

//inicializar router

const router = Router();

//Rutas post

router.post('/auth/createUser', createUserAPI);

module.export