import { Student } from "../models/students.mjs"

export const getAllStudents = async(req,res) =>{
    const students = await Student.findAll()  
      res.json(students)
}

export const getOneStudent = async(req,res) =>{
    const student = await Student.findByPk(req.param.id);
    res.json(student)
}

export const addStudent = async(req,res)=>{
    const student = await Student.create(req.body)
    res.json(student)
    }

export const updateStudent = async(req,res)=>{
    const student = await Student.findByPk(req.params.id);
    if(student){
        await Student.update(req.body) 
        res.json(student)  
        }else{
            res.status[404].json({message:'Student not found'})
        }
}

export const deleteStudent = async(req,res)=>{
    const student = await Student.findByPk(req.params.id)
    if(student){
        await Student.destroy()
    }else{
        res.status[404].json({message:'Student not found'})
    }
}