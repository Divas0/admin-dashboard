const mongoose=require("mongoose")

const GuestSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        
    },
    address:{
        type: String,
        required: true,
        trim: true,
        unique: true,

    },
    contactno:{
        type: Number,
        required: true,
        trim: true,
        unique: true,

    },
   
},  {timestamps:true})

const Guest = mongoose.model("Guest", GuestSchema);
module.exports = Guest;
