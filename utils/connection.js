const config = require('../config/config');
const mysql = require('mysql2');

const connection = mysql.createConnection(config);

connection.connect((error) => {
    if(error) {
        console.error(error.stack);
        process.exit();
    }
    console.info('Conexión a la Base de Datos establecida');
});

module.exports = connection;