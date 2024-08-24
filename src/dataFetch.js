import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserModel from './model.js';
const app = express();


app.use(cors());
app.use(express.json());
 

const dbURL = process.env.DATABASE_URL ;

mongoose.connect("mongodb+srv://utkarshNITJSR:RELIable00@utkarshdb.d7ebd1p.mongodb.net/rest-api")
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));



app.listen(3001, () => {
    console.log("Server is running on port 3001");
});


app.get('/getData',async (req,res)=>{
    const myData = await UserModel.find({}) ;
    res.json({myData});
})
