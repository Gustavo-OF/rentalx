import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { container } from "tsyringe";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../modules/accounts/repositories/IUsersRepository";

interface IPayload{
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization;

    if(!authHeader) {
        throw new Error("Token missing!");
    }

    const [, token] = authHeader.split(" ");

    try{
        const { sub: user_id } = verify(token,"9c51c1491464653d78aa60e67a9cf9cd") as IPayload;

        const usersRepository = new UsersRepository();

        const user = await usersRepository.findById(user_id);

        if(!user) {
            throw new Error("User does not exists");
        }
        
        next();
    }catch(err) {
        throw new Error("Invalid Token!");
    }
}