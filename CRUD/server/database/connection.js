const mongoosee= require('mongoose')

const connectDB = async()=>{
    try{
        const con = await mongoosee.connect(process.env.MONGO_URI,{
            // useNewURLParser:true,
            // useUnifiedTopology:true,
            // useFindAndModify:false,
            // useCreateIndex:true,
        })
        console.log(`MongoDB connected:${con.connection.host}`);
    }
    catch(err){
        console.log(err);
        process.exit(1)

    }
}

module.exports = connectDB