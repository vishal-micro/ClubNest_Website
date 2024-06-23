const mongoose = require('mongoose');
const {Schema} = mongoose

const userSchema = new mongoose.Schema({
   user_id: {
       type: String,
       required: true,
       unique: true
   },
   
   password: {
       type: String,
       required: true
   }
 
});

exports.User = mongoose.model("user", userSchema);