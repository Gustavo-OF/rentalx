import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

        const { email, password } = request.body;

        try{
            const authenticateInfo = await authenticateUserUseCase.execute({ email, password });
            return response.status(200).json({ message: authenticateInfo });
        }catch(err){
            return response.status(403).json({ error: err.message });
        }
        
    }
}

export { AuthenticateUserController }