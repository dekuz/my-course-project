import express from "express";
import cors from "cors";
const morgan = require("morgan");
require("dotenv").config();

//create express app
const app = express();

//apply middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(()=>console.log('this is my own middleware'));


//route
app.get('/',(req,res)=>{
    res.send('you hit server endpoint')
})

//setup port
const port = process.env.PORT||8000;

app.listen(port,()=>console.log(`Server is running in port ${port}`))
