import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/user.js";
import dotenv from 'dotenv';

const app = express();
dotenv.config();


app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);


// const CONNECTION_URL = "mongodb+srv://aiday:Password123@cluster0.mah05.mongodb.net/FixitApp?retryWrites=true&w=majority";
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((erros) => console.log(error));

