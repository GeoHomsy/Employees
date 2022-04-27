const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');


app.use(bodyParser.json());

//Import Routes
const empRoute = require('./routes/empRoutes');
app.use('/employees',empRoute);


app.listen(PORT, () => {
    console.log('Server is listenning on Port:: ' + PORT)
});




