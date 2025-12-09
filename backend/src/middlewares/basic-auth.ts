import type { Request, Response, NextFunction } from "express";

import { env } from "../config";

export const basicAuth = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Basic ")) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const credentials = Buffer.from(authHeader.slice(6), "base64").toString();
    const [username, password] = credentials.split(":");

    const validUsername = env.AUTH_USERNAME;
    const validPassword = env.AUTH_PASSWORD;

    if (username === validUsername && password === validPassword) {
        next();
    } else {
        res.status(401).json({ error: "Invalid credentials" });
    }
};
