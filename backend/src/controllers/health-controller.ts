import type { Request, Response } from "express";

export const healthController = async (req: Request, res: Response) => {


    return res.status(200).send("OK");
};
