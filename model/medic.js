const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new mongoose.Schema({
    proname: String,
},
    {
        collection: 'product',
        timestamps: true,
        versionKey: false
    });
module.exports = mongoose.model('Product', ProductSchema);