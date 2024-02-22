import mongoose, {Schema} from 'mongoose';

const storeSchema = new Schema(
    {
        name: String,
        location: String,
    },
    {
        timestamps: true,
    }
);

const Store = mongoose.models.Store || mongoose.model('Store', storeSchema);

export default Store;