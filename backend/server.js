const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const userRoutes = require('./routes/userroute'); 
const dotenv=require("dotenv");
dotenv.config();

const app = express(); 

mongoose.connect('mongodb://127.0.0.1:27017/userip', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });



app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);
 


app.get('/',(req,res)=>{
  res.sendFile(__dirname + "/dd.html")
})
app.get('/updateFilters',(req,res)=>{
  res.sendFile(__dirname + "/filteredDataPage.html")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  
});


