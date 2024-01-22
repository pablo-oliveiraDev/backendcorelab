import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';
import { CreateTaskController } from '../../controllers/tasks/CreateTaskController';

const controller = new CreateTaskController();

describe('CreateTask', () => {
    it('should create a new task when valid input data is provided', async () => {
        const mockRequest = {
            body: {
                titulo: 'Task Title',
                task: 'Task Description',
                createdAt: '2022-01-01T00:00:00.000Z',
                userId: 'user123'
            }
        } as Request;
        const mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        } as unknown as Response;

        prismaClient.task.create = jest.fn().mockResolvedValue({});

        await controller.handle(mockRequest, mockResponse);

        expect(mockResponse.status).toHaveBeenCalledWith(201);
        expect(mockResponse.json).toHaveBeenCalledWith({
            msg: 'Task as created!',
            newTask: expect.any(Object)
        });
    });
});
