import { LoginController } from '../controllers/login/LoginController';
import { createUsersController } from '../controllers/users/CreateUsersController';
import { Router } from 'express';
import Multer from 'multer';

const router: Router = Router();
const upload = Multer();

//-------------Creates------------------------------------
const createUser = new createUsersController();
router.post('/createUser', upload.single('imgUser'), createUser.handle);

const loginUser = new LoginController();
router.post('/login', loginUser.handle);

//-------------Finds------------------------------------

//-------------Updates------------------------------------

//-------------Deletes------------------------------------

export { router };
