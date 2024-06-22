import multer from 'multer';
import {GridFsStorage } from 'multer-gridfs-storage';
import dotenv from
 
'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;



const storage = new GridFsStorage({
  
  url: `mongodb://${USERNAME}:${PASSWORD}@ac-56dexbh-shard-00-00.3stv4sy.mongodb.net:27017,ac-56dexbh-shard-00-01.3stv4sy.mongodb.net:27017,ac-56dexbh-shard-00-02.3stv4sy.mongodb.net:27017/?ssl=true&replicaSet=atlas-9vjgla-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blogapp`,
  
  
  file: (request, file) => {
    const match = ["image/png", "image/jpeg", "image/JPEG", "image/JPG", "image/jpg"];

    if (match.indexOf(file.mimeType) === -1) {
      return
 
`${Date.now()}-blog-${file.originalname}`;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`
    }
  }
})

export
 
default multer({ storage });