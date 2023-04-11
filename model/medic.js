const mongoose = require('mongoose');
const { Schema } = mongoose;

const MedicineSchema = new mongoose.Schema({
    m_name: { type: String },
    amount: { type: Number },
    price: { type: Number },
    cate_id: { type: Schema.Types.ObjectId, Ref: "category" },
    detail: { type: String },
    use_for: { type: String },
    pic1: String,
    pic2: String
},
    {
        collection: 'medicine',
        timestamps: true,
        versionKey: false
    });
module.exports = mongoose.model('Medicine', MedicineSchema);