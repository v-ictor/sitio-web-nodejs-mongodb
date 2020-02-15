const jwt = require('jsonwebtoken');
const CONFIG = require('../config/config');

module.exports = function (req, res, next) {
    if (req.path != '/auth/login') {
        if (req.headers.authorization) {
            let token = req.headers.authorization.split(' ')[1];
            console.log(token);
            jwt.verify(token, CONFIG.SECRET_TOKEN, function (error, decoded) {
                if (error) return res.status(403).send({
                    message: 'No tiene los permisos necesarios',
                    error
                });
                console.log(decoded);
                if (req.method != 'GET') {
                    if (decoded.role == 'admin') next();
                    else res.status(403).send({
                        message: 'No tienes los permisos necesarios'
                    });
                } else {
                    next();
                }
            });
        } else res.status(403).send({
            message: 'No tienes los permisos necesarios'
        });
    } else next();
}