import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    description:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required:true
    },
})

 const productmodel = mongoose.model("product", productSchema);

export default productmodel;

