import Mongoose from 'mongoose';

const ItemSchema = Mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    item_name: {
        type: String,
        required:true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    },
    date: {
        type: Date,
        default: Date.now
    },
}, { strict: false });

export default Mongoose.model("Items", ItemSchema);