import { Request, Response } from "express";
import { createUserService } from "../services/createUserService";
import jwt from 'jsonwebtoken';

export class UserController{
    async handle(request: Request, response: Response){
        const {name, cpf, endereco} = request.body;
        const service = new createUserService();
        const result = await service.execute({name, cpf, endereco});
        response.json(result);
    }

    async createToken(request: Request, response: Response){
        try{
            const token = jwt.sign({id: 'teste'}, process.env.SECRET, {expiresIn: 300});
            response.json(token)
        }catch(err){
            console.log(err)
        }
    }
}