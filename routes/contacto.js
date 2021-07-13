const express = require('express');
const mysql = require('mysql2');
const app = express();

const config = require('../config/config');
const connection = require('../utils/connection');

app.use(express.json());

    /* Guardar datos de los que contactan en la B.D */
        app.post('/api/contact', (req, res) => {
        const body = req.body;
    
        connection.query(`
            INSERT INTO \`contacto\` (\`nombrecontacto\`, \`apellidocontacto\`, \`emailcontacto\`, \`mensajecontacto\`) 
            VALUES ('${body.nombrecontacto}', '${body.apellidocontacto}', '${body.emailcontacto}', '${body.mensajecontacto}');
        `, 
            (error, result) => {
            if (error) {
                console.error(error);
                return res.json({ message: 'No se pudieron cargar sus datos de contacto'});
        }
                return res.json({ message: 'Sus datos de contacto se han cargado con éxito'});
        }
    );
    });
    
    app.listen(6500, () => {
        console.log('Servidor inicializado en el puerto 6500.');          
        }); 