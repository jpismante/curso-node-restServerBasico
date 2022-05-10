const { response } = require('express');

const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'Get controller'
    });
}

const usuariosPost = (req, res = response) => {

    const body = req.body;

    res.json({
        msg: 'Post controller',
        body
    });
}


const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete controller'
    });
}


const usuariosPut = (req, res = response) => {
    res.json({
        msg: 'Put controller'
    });
}


module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut
}