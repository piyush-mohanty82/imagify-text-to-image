import express from 'express';
import {registerUser, loginUser, userCredits} from '../controllers/userController.js';
import userAuth from '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/credits',userAuth, userCredits);

export default userRouter;

// http://localhost:4000/api/user/register - -hit the register user controller function
// localhost:4000/api/user/login - -hit the loginuser controller function