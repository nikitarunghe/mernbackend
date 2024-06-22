import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import Router from './routes/route.js';
 import cors from 'cors';
import bodyParser from 'body-parser';





const app = express();


 dotenv.config();
 


 const PORT = process.env.PORT;

  


app.use(cors(
      
));
 app.use(bodyParser.json({ extended: true }));
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use('/', Router);

 
 
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`)); 
const username = process.env.DB_USERNAME;

const password = process.env.DB_PASSWORD;
Connection(username,password); 
// app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`)); 
// // Connection(username,password).then(() => {
// //   app.listen(PORT, () => {
// //       console.log(`Server is running successfully on PORT ${PORT}`);
// //   })
// // })
