const {Router } = require('express');
const { 
    usuariosGet, 
    usuariosPost,
    usuariosDelete, 
    usuariosPut 
} = require('../controllers/usuarios.controller');

const router = Router();


router.get('/', usuariosGet);
router.post('/',usuariosPost);
router.delete('/',usuariosDelete);
router.put('/',usuariosPut);

module.exports = router;