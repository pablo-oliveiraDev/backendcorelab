"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const LoginController_1 = require("../controllers/login/LoginController");
const CreateUsersController_1 = require("../controllers/users/CreateUsersController");
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)();
const createUser = new CreateUsersController_1.createUsersController();
router.post('/createUser', upload.single('imgUser'), createUser.handle);
const loginUser = new LoginController_1.LoginController();
router.post('/login', loginUser.handle);
