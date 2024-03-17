const express = require('express');
const router = express.Router();
const coder = require('../models/userip'); 
const array=[];


// Route to handle the POST request from the frontend
router.post('/updateFilters', async (req, res) => {
  try {
    const selectedOptions = req.body.selectedOptions;
    console.log(selectedOptions);
    array.push(...selectedOptions);
    console.log(array);
    

    res.redirect( '/updateFilters');
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Server Error' }); // Handle errors and send a response
  }
});
router.post('/addData', async (req, res) => {
  try {
    const {username,userid,ccc_score,skills} = req.body;
    console.log(req.body)
    const savedData = await coder.create({username,userid,ccc_score,skills});

    if(!savedData) return res.status(404).send({status:"not ok",msg:"data not added"});
    return res.status(200).send({status:" ok",msg:"data  added"});
  } catch (error) {
    console.log(error)
  }
})

// Backend route to display filtered data
router.get('/updateFilters', async (req, res) => {
  try {
    console.log(array);
    const filteredData =await coder.find({skills: { $in: array}});
    console.log(filteredData);
    // Render an HTML page with the filtered data
    return res.json(filteredData);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Server Error' }); // Handle errors and send a response
  }
});



module.exports = router;




