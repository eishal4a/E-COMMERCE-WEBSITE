const port = 4000;
const express = require"expres";
const app = express();
const mongoose = require"mongoose";
const jwt = require"jsonwebtoken";
const multer = require"multer";
const path = require"path";
const cors = require"cors";

app.use(express.json());
app.use(cors());
//mongodb+srv://dubai:<db_password>@cluster0.w9lzdxz.mongodb.net/

mongoose.connect("mongodb+srv://dubai:<freshlyfreshfoodtrading>@cluster0.w9lzdxz.mongodb.net/e-commerce");

app.get


app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running");
    }
    else{
        console.log("error"+error);
    }
}
)