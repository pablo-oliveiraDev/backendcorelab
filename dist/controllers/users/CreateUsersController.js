"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsersController = void 0;
const prismaClient_1 = require("../../database/prismaClient");
const date_fns_1 = require("date-fns");
class createUsersController {
    async handle(request, response) {
        const imgBuffer = request.file?.buffer.toString('base64');
        const createdAt = Date.now();
        const { userName, email, password } = request.body;
        try {
            const users = await prismaClient_1.prismaClient.user.create({
                data: {
                    userName: userName,
                    email,
                    password,
                    createdAt: (0, date_fns_1.format)(createdAt, 'dd/MM/yyyy HH:mm:ss'),
                    userImages: {
                        create: {
                            image: imgBuffer,
                        },
                    },
                },
                include: {
                    userImages: true,
                },
            });
            return response.status(201).json({ msg: 'User as created!', users });
        }
        catch {
            return response.status(500).json({
                msg: 'Error to create user!Please waiting for minutes and try again!',
            });
        }
    }
}
exports.createUsersController = createUsersController;
