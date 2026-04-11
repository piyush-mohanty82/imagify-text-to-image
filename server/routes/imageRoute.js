import express from 'express';
import {generateImage} from '../controllers/imageController.js';
import userAuth from '../middlewares/auth.js';
const imageRouter = express.Router();

imageRouter.post("/generate-image",userAuth, generateImage);
//Without userAuth Anyone can call your API:
//First → authentication happens
//Then → image is generated

export default imageRouter;
