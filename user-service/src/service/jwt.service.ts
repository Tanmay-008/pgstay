import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';
import { ApiError } from '../utils/ApiError';

const privateKey = fs.readFileSync(path.join(__dirname, '../../private.pem'), 'utf8');
const publicKey = fs.readFileSync(path.join(__dirname, '../../public.pem'), 'utf8');

interface JwtPayload {
    userId: string;
    userName: string;
    email?: string;
}

export const generateToken = (payload: JwtPayload): string => {
    try {
        return jwt.sign(payload, privateKey, {
            algorithm: 'RS256',
            expiresIn: '1h'
        });
    } catch (error) {
        throw new ApiError(500, "Error generating authentication token");
    }
};

export const verifyToken = (token: string): JwtPayload => {
    try {
        return jwt.verify(token, publicKey, {
            algorithms: ['RS256']
        }) as JwtPayload;
    } catch (error) {
        throw new ApiError(401, "Invalid or expired token");
    }
};
