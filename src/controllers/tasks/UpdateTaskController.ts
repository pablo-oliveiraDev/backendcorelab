import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';
import { format } from 'date-fns';
interface updateTaskBody {
    id: string;
    titulo: string;
    task: string;
    userId: string;
}
export class UpdateTaskController {
    async handle(request: Request, response: Response) {
        const { id, titulo, task, userId }: updateTaskBody = request.body;
        const updatedAt = Date.now();
        try {
            const updateTask = await prismaClient.user.update({
                where: {
                    id: userId
                },
                data: {
                    tasks: {
                        update: {
                            where: {
                                id: id
                            },
                            data: {
                                titulo: titulo,
                                task: task,
                                updatedAt: format(
                                    updatedAt,
                                    'dd/MM/yyyy HH:mm:SS'
                                )
                            }
                        }
                    }
                }
            });
            return response
                .status(200)
                .json({ msg: 'Task as updated!', updateTask });
        } catch {
            return response.status(400).json({ msg: 'Error on updated task!' });
        }
    }
}
