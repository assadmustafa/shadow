import mongoose, {Schema} from 'mongoose';

const clientSchema = new Schema(
    {
        name: String,
        address: String,
        postcode: String,
        city: String,
        clientNumber: String,
        public_id: String,// for image cloudinary
        secure_url: String,//for image cloudinary
    },
    {
        timestamps: true,
    }
);

const Client = mongoose.models.Client || mongoose.model('Client', clientSchema);

export default Client;