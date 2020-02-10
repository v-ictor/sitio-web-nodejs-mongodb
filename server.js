const database = require('./app/config/database');
const config = require('./app/config/config');
const app = require('./app/app');

database.connect();

app.listen(config.PORT, (error) => {
    if(error) return console.log(error);
    console.log(`Servidor levantado en el puerto: ${config.PORT}`);
});