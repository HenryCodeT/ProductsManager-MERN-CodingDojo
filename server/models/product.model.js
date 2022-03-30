// //// FIELDS /////////////////////////////////////////////
const mongoose = require('mongoose');
console.log('******************* 3-Models ********************');

// //// SCHEMA /////////////////////////////////////////////
/**
 * customize our schema and each field
 */
const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters"],    
    },
    price:{
        type:Number,
        required: [true, "Price is required"],
        min: [0,"Price must be at least 0"]
    },
    description:{
        type:String,
        required: [true,"Description is required"],
        minlength: [3,"Description must be at least 3 characters"]
    }
},{timestamps:true})

// //// MODEL ///////////////////////////////////////////////
/**
 * creating a collection in the database
 */
const Product = mongoose.model('product',ProductSchema);

// **** EXPORT *********************************************
module.exports = Product;
console.log('------------------------ 3-Models ---------------------------');
