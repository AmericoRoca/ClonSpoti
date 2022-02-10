'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta';


exports.ensureAuth = function(req , res, next){
    if(!req.headers.authorization){
        return res.status(403).send({mesage: 'La peticion no tiene la cabecera de autenticacion'});

    } 

    var token = req.headers.authorization.replace(/['"]+/g, '');

    try { 
        var payload = jwt.decode(token, secret);

        if (payload.ex <= moment().unix()){
            res.status(401).send({mesage: 'El token ha expirado'});
        } 

    } catch (ex){
        //console.log(ex);
        res.status(403).send({mesage: 'El token no es válido'});
    }

    req.user = payload;

    next();
}