import {Model, DataTypes } from "sequelize";
import { sequelize } from "../database.mjs";


export class Student extends Model{}
Student.init({
    name:DataTypes.STRING,
    department:DataTypes.STRING,
    school:DataTypes.STRING
},{sequelize,modelName:'student'})