const express = require('express');
const mysql = require('mysql2');
const app = express();

const config = require('../config/config');
const connection = require('../utils/connection');

app.use(express.json());

app.get('/api/health', function (req, res) {
    res.json({ message: 'App de login corriendo adecuadamente' });
    });

    /* Sign - In */
        app.post('/api/userssignin', (req, res) => {
        const body = req.body;
        
        connection.query(`
            INSERT INTO \`signin\` (\`nombreusuario\`, \`contraseñausuario\`) 
            VALUES ('${body.nombreusuario}', '${body.contraseñausuario}');
        `, 
            (error, result) => {
            if (error) {
                console.error(error);
                return res.json({ message: 'Error al crear el usuario'});
            }
            return res.json({ message: 'El usuario ha sido creado con éxito' })
            }
        );
        });
        
        app.post('/api/login', (req, res) => {
        const body = req.body;
        console.log(body);

        connection.query(
            `SELECT idusuario, nombreusuario, contraseñausuario FROM signin
            WHERE nombreusuario = '${body.nombreusuario}' AND contraseñausuario = '${body.contraseñausuario}'`,
                (error, result) => {
            if (error) {
                console.error(error);
                return res.json({ message: 'Error inesperado, nuestros mejores ingenieros estan trabajando en la solución' });
            }
            if (result.length > 0) {
                return res.json({ message: 'Usario logueado exitosamente', data: result[0]});
            } else {
                return res.json({ message: 'Usuario o contraseña incorrecta'});
            }
            }
        );
        });

        /* Sing - Up */
        app.post('/api/userssignup', (req, res) => {
        const body = req.body;
            
        connection.query(`
            INSERT INTO \`signup\` (\`nombreuser\`, \`emailuser\`, \`passworduser\`) 
            VALUES ('${body.nombreuser}', '${body.emailuser}', '${body.passworduser}');
            `, 
                (error, result) => {
            if (error) {
                console.error(error);
                return res.json({ message: 'No pudimos registrar el usuario'});
            }
                return res.json({ message: 'El usuario ha sido registrado con éxito' })
            }
        );
        });
    
        app.post('/api/register', (req, res) => {
        const body = req.body;
        console.log(body);

        connection.query(
        `SELECT iduser, nombreuser, emailuser, passworduser FROM signup 
        WHERE emailuser = '${body.emailuser}' AND passworduser = '${body.passworduser}'`,
        (error, result) => {
            if (error) {
                console.error(error);
                return res.json({ message: 'Error inesperado, nuestros mejores ingenieros estan trabajando en la solución' });
            }
            if (result.length > 0) {
                return res.json({ message: 'Usario registrado exitosamente', data: result[0]});
            } else {
                return res.json({ message: 'Usuario o contraseña incorrecta'});
            }
            }
        );
        });

        app.listen(6000, () => {
        console.log('Servidor inicializado en el puerto 6000.');          
        });

