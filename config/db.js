const mongoose = require('mongoose');

const connectDB = async (req, res, next) => {
    try{
            const conn = await mongoose.connect("mongodb+srv://admin:Mykeyin123@cluster0.iog4a.mongodb.net/to_do_list?retryWrites=true&w=majority",{
                useUnifiedTopology:true,
                useNewUrlParser:true
            })

            console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
    }
    catch(error){
            console.log(`Error : ${error.message}`.red.underline.bold);
            process.exit(1);
    }
}

module.exports = connectDB