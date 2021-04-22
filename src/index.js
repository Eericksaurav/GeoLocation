const express = require('express');
require("./database/db.js");
//importing the router
const importRouter = require('./routes/routesFile.js');

//creating port environment 
const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());

//using the imported router
app.use(importRouter);

//listening to the database 
app.listen(port, () => {
    console.log(`connected: ${port} port number`);
});
