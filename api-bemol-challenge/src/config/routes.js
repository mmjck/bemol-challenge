const express = require('express');
const router = express.Router();

const  UserController = require('../app/controllers/userController');

router.get('/users', (req, res) => {
    res.json({
        message: 'ola'
    });
});


router.post('/users/register', UserController.create);


module.exports = router;
