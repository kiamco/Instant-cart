import Mongoose from 'mongoose';

const ItemSchema = Mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: Date.now
    },
}, { strict: false });

export default Mongoose.model("Items", ItemSchema);