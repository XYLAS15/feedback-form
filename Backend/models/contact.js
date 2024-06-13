const mongoose= require("mongoose");

const contact = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email: {
        type:String,
        require: true,
    },
    number: {
        type:Number,
        require: true,
    },
    feedback: {
        type:String,
        require: true,
    }

  
});

module.exports = mongoose.model("contact", contact);