import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import productrouter from './routes/productRoute.js';


dotenv.config()
const app = express()
const port = process.env.PORT || 5000
app.use(express.json())

try {
    mongoose.connect(process.env.MONGO_URL)
    console.log("Mongo DB Connect")
}
catch (error) {
    console.log(error.message);
}

app.use('/api', productrouter);

app.listen(port, () => {
    console.log(`server is running http://localhost:${port}`);

})
