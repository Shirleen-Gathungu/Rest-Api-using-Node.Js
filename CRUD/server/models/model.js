const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    firstname:{
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

const Userdb = mongoose.model('userdb',UserSchema);
module.exports = Userdb;