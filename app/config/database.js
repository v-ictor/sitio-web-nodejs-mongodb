const mongoose= require('mongoose');
const config = require('./config');

module.exports = {
    connection: null,
    connect: () => {
        if(this.connection) return this.connection;
        return mongoose.connect(config.DB).then(connection => {
            this.connection = connection;
            console.log('Coneccion a base de datos exitosa');
        }).catch(error => console.log(error));
    }
}