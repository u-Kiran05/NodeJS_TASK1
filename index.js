const express = require('express'); 
const mongoose = require('mongoose'); 
const route = require('./routes/employees.routes'); 
const dotenv = require('dotenv'); 
 
dotenv.config(); 
 
const app = express(); 
app.use(express.json()); 
 
app.use('/employees', route); 
 
app.listen(3000, () => { 
    console.log("Server is running at port 3000") 
}); 
 
mongoose.connect(process.env.mongo_url) 
    .then(() => { 
        console.log("Database Connected") 
    }) 
    .catch((err) => { 
        console.log("Connection Failed", err) 
    }); 
