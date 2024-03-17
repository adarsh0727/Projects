const mongoose = require('mongoose');

const coderSchema = new mongoose.Schema({
  username:{type:String,unique:true} ,
  userid:Number,
  ccc_score: Number,
  skills: [String],
});

const coder = mongoose.model('coder', coderSchema);

module.exports = coder;
