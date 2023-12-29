import  Express  from "express";
import { sequelize } from "./database.mjs";
import { getAllStudents,getOneStudent,addStudent,updateStudent,deleteStudent } from "./controller/studentController.mjs";

const PORT = 5000

const app = Express()

app.use =(Express.json())

app.get('/students',getAllStudents)

app.get('/students/:id',getOneStudent)

app.post('/students',addStudent)

app.put('/students/:id',updateStudent)

app.delete('/students/:id',deleteStudent)

app.listen(PORT,()=>{
    console.log (`app is running on  port ${PORT}`)

    console.log('Syncing Database')
    sequelize.sync()
})







