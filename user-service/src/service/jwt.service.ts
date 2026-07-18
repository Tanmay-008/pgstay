import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/ApiError';

const privateKeyRaw = process.env.PRIVATE_KEY;
const publicKeyRaw = process.env.PUBLIC_KEY;

if (!privateKeyRaw || !publicKeyRaw) {
    throw new Error("FATAL: PRIVATE_KEY or PUBLIC_KEY is missing from environment variables.");
}

const privateKey = privateKeyRaw.replace(/\\n/g, '\n');
const publicKey = publicKeyRaw.replace(/\\n/g, '\n');
// interface JwtPayload {
//     userId: string;
//     role: string;
// }

interface IdTokenPayload {
    userId: string;
    role: string;
    email: string;
}

interface AccessTokenPayload {
    userId: string;
    role: string;
}

export const generateAccessToken = (payload: AccessTokenPayload): string => {
    try {
        return jwt.sign(payload, privateKey, {
            algorithm: 'RS256',
            expiresIn: '15m' // Access token usually has shorter expiry (e.g. 15m)
        });
    } catch (error) {
        throw new ApiError(500, "Error generating access token");
    }
};

export const generateIdToken = (payload: IdTokenPayload): string => {
    try {
        return jwt.sign(payload, privateKey, {
            algorithm: 'RS256',
            expiresIn: '1d' // ID token can match session length or have longer/custom expiry
        });
    } catch (error) {
        throw new ApiError(500, "Error generating ID token");
    }
};

export const verifyAccessToken = (token: string): AccessTokenPayload => {
    try {
        return jwt.verify(token, publicKey, {
            algorithms: ['RS256']
        }) as AccessTokenPayload;
    } catch (error) {
        throw new ApiError(401, "Invalid or expired access token");
    }
};

export const verifyIdToken = (token: string): IdTokenPayload => {
    try {
        return jwt.verify(token, publicKey, {
            algorithms: ['RS256']
        }) as IdTokenPayload;
    } catch (error) {
        throw new ApiError(401, "Invalid or expired ID token");
    }
};
