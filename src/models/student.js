const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
    },
    email :{
        type : String,
        required : true,
        unique : true,
    },
    phone :{
        type : Number,
        require : true,
        unique : true,
        min : 10
    },
    address :{
        type : String,
        required : true
    }
});

const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;