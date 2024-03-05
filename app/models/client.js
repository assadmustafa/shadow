import { Schema, model, models } from "mongoose";

const clientSchema = new Schema({
    public_id: String,
    secure_url: String,
}, { timestamps:true})

const Photo = models.clients || model("clients", clientSchema);

export default Photo;