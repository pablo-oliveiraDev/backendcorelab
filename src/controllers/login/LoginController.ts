import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

interface loginBody {
    email: string;
    password: string;
}

export class LoginController {
    async handle(request: Request, response: Response) {
        const { email, password }: loginBody = request.body;
        try {
            const login = await prismaClient.user.findFirst({
                where: {
                    email: email,
                    AND: {
                        password: password
                    }
                },
                include: {
                    userImages: true
                }
            });
            if (login !== null) {
                return response
                    .status(200)
                    .json({ msg: 'Login sucessfully!', login });
            } else {
                return response
                    .status(401)
                    .json({ msg: 'Email or Password incorrect' });
            }
        } catch {
            return response
                .status(401)
                .json({ msg: 'Unexpected error!Please try again!' });
        }
    }
}
