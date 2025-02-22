import mongoose, { Document } from "mongoose";

export interface PhotoDocument extends Document {
    path: string,
    title?: string
}

const photoSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    title: String
})

export const Photo = mongoose.model("Photo", photoSchema);

export const saveInDB = async(path:string , title:string)=>{
    let newPhoto = new Photo({path , title});
    await newPhoto.save();
}