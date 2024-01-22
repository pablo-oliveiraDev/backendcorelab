"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prismaClient_1 = require("../../database/prismaClient");
const CreateTaskController_1 = require("../../controllers/tasks/CreateTaskController");
const controller = new CreateTaskController_1.CreateTaskController();
describe('CreateTask', () => {
    it('should create a new task when valid input data is provided', async () => {
        const mockRequest = {
            body: {
                titulo: 'Task Title',
                task: 'Task Description',
                createdAt: '2022-01-01T00:00:00.000Z',
                userId: 'user123'
            }
        };
        const mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        prismaClient_1.prismaClient.task.create = jest.fn().mockResolvedValue({});
        await controller.handle(mockRequest, mockResponse);
        expect(mockResponse.status).toHaveBeenCalledWith(201);
        expect(mockResponse.json).toHaveBeenCalledWith({
            msg: 'Task as created!',
            newTask: expect.any(Object)
        });
    });
});
