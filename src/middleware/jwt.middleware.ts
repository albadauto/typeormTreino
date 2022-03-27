import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export class jwtmiddleware{
    verifyJWT(request: Request, response: Response): Response{
        const token = request.headers['authorization'];
        if (!token) return response.json({auth: false});

        jwt.verify(token, process.env.SECRET, (decoded) => {
            response.json({
                decoded
            })
        })

    }
}