import { Request, Response } from "express";
import { createUserService } from "../services/createUserService";

export class UserController{
    async handle(request: Request, response: Response){
        const {name, cpf, endereco} = request.body;
        const service = new createUserService();
        const result = await service.execute({name, cpf, endereco});
        response.json(result);
    }
}