const mongoose = require('mongoose');
const {Schema} = mongoose


const adminSchema = new mongoose.Schema({
   username:{
       type:String,
       required:true,
       unique:true,
   },
   password:String,
});


exports.Admin = mongoose.model("Admin",adminSchema);
