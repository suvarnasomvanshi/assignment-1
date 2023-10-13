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

    phone : {
        type :Number,
        required :true,
    },

    gender :{
         type : String,

    },

    city :{
        type : String,
    },

    state :{
        type : String,
    }
    

})


export default mongoose.model("User",userSchema);
