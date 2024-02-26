import  express  from "express";
import mongoose from "mongoose";
import noteRoutes from './routes/noteRoutes.js';
import dotenv from 'dotenv';


dotenv.config()
const app = express()
app.use(express.json())
const port = 8000

app.use('/api/notes', noteRoutes )

app.listen(port, ()=>{
    console.log(`server is runing on port ${port}`);
})

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Contected to Database");
})