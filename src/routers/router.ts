//--------------------------import creates---------------------
import { LoginController } from '../controllers/login/LoginController';
import { CreateUsersController } from '../controllers/users/CreateUsersController';

//------------------import finds---------------------------
import { FindUserByIdController } from '../controllers/users/FindUserByIdController';
import { FindAllUsersController } from '../controllers/users/FindAllUsersController';
//------------------import updates---------------------------
import { UpdateUserController } from '../controllers/users/UpdateUserController';
//------------------import deletes---------------------------
import { DeleteUserByIdController } from '../controllers/users/DeleteUserByIdController';

import { Router } from 'express';
import Multer from 'multer';

const router: Router = Router();
const upload = Multer();

//-------------Creates------------------------------------
const createUser = new CreateUsersController();
router.post('/createUser', upload.single('imgUser'), createUser.handle);

const loginUser = new LoginController();
router.post('/login', loginUser.handle);

//-------------Finds------------------------------------
const findUserById = new FindUserByIdController();
router.get('/user', findUserById.handle);

const findAllUsers = new FindAllUsersController();
router.get('/allUsers', findAllUsers.handle);

//-------------Updates------------------------------------
const updateUser = new UpdateUserController();
router.patch('/updateUser', updateUser.handle);

//-------------Deletes------------------------------------
const deleteUser = new DeleteUserByIdController();
router.delete('/deleteUser', deleteUser.handle);

export { router };
