const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27107:/students-api", 
{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(() =>{
    console.log("Connection sucessfull");
}).catch((err) =>{
    console.log(`Connection is not successfull ${err}`);
});