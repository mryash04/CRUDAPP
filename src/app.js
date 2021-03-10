const express = require("express");
require("./db/connection");
const Student = require("./models/student");
const app = express();

console.log(Student);

app.use(express.json());

const port = process.env.PORT || 8000;

app.get("/", (req, res) =>{
    res.send("<h2>This is from home page side</h2>");
});

app.post("/students", (req, res) =>{
    console.log(req.body);
    const user = new Student(req.body);

    user.save().then(() =>{
        res.status(201).send(user);
    }).catch((err) =>{
        res.status(400).send(err);
    })
});

app.post("/students", async(req, res) =>{

    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(err){
        res.status(400).send(err);
    }

});

app.get("/students", async(req, res) =>{

    try{
        const studentsData = await Student.find();
        res.send(studentsData);
    }catch(err){
        res.send(err);
    }

});

app.get("/students/:id", async(req, res) =>{

    try{
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        console.log(studentData);

        if(!studentData){
            return res.status(404).send();
        }else{
            res.send(studentData);
        }
    }catch(err){
        res.send(err);
    }

});

app.patch("/students/:id", async() =>{

    try{
        const _id = req.params.id;
        const studentUpdateData = await Student.findByIdAndUpdate(_id, req.body);
        res.send(studentUpdateData);
    }catch(err){
        res.status(400).send(err);
    }

});

app.delete("/students/:id", async(req, res) =>{

    try{
        const _id = req.params.body;
        const studentDeleteData = await Student.findByIdAndDelete(_id, req.body);

        if(!studentDeleteData){
            return res.status(400).send();
        }else{
            res.send(studentDeleteData);
        }
    }catch(err){
        res.send(err);
    }

});

app.listen(port, () =>{
    console.log(`This is listening port ${port}`);
});