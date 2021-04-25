const mongoose = require("mongoose");

//creating the connection of the database
mongoose.connect("mongodb://localhost:27017/GeoDatabase", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(() => console.log("connection to database sucessfull"))
    .catch((err) => console.log("connection error to database. Error ==", err));

    