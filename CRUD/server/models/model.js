const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type:String,

    },
    lastname:{
        type:String,
    
    },
    
    email:{
        type:String,
        lowercase:true,
        unique: true
    
    },
    password:{
        type:String,
        required:true,
        unique:true
        
      
    }
})

const Userdb = mongoose.model('userdb',schema);
module.exports = Userdb;