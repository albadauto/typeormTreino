import { getRepository } from "typeorm"
import { User } from "../entities/User"

type UserCreate = {
    name: string,
    cpf: string,
    endereco: string
}
export class createUserService{
    async execute({name, cpf, endereco}: UserCreate) : Promise<UserCreate | Error>{
        const repo = getRepository(User);
        const result = repo.create({name, cpf, endereco});
        await repo.save(result);
        return result;
    }
}