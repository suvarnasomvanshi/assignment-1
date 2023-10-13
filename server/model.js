import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({

    name :{
        type : String,
        required : true,
    },

    email :{
        type : String,
        required :true,
        unique : true,
    },

    password : {
        type : String,
        required :true,
        minlength : 6
    },

    Phone : {
        type :Number,
        required :true,
    },

    gender :{
         type : String,

    },

    city :{
        type : String,
    },

    State :{
        type : String,
    }
    

})


export default mongoose.model("User",userSchema);
