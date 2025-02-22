import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


const storage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => {
        return {
            folder: "gallery", // Cloudinary folder name
            allowed_formats: ["jpg", "png", "jpeg"], // Allowed formats
            // public_id: file.originalname, // Use original file name as public ID 
            // If you don't specify a public ID, Cloudinary generates a random one
        };
    },
});

export const upload = multer({ storage });
