const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, "Please enter product name"],
        },

        quantity:{
            type:Number,
            required: true,
            defult: 0,
        },

        price:{
            type:Number,
            required: true,
            default: 0,
        },

        image:{
            type:String,
            required: false,
        },
    },
    {
        timestamp:{
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

const Product = mongoose.model("Product",ProductSchema);
module.exports = Product;