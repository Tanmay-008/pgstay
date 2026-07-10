import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/ApiError';

const privateKeyRaw = process.env.PRIVATE_KEY;
const publicKeyRaw = process.env.PUBLIC_KEY;

if (!privateKeyRaw || !publicKeyRaw) {
    throw new Error("FATAL: PRIVATE_KEY or PUBLIC_KEY is missing from environment variables.");
}

const privateKey = privateKeyRaw.replace(/\\n/g, '\n');
const publicKey = publicKeyRaw.replace(/\\n/g, '\n');
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
