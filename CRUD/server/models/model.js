const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type:Array,

    },
    lastname:{
        type:String,
    
    },
    
    email:{
        type:Array,
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