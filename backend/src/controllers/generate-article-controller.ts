import type { Request, Response } from "express";
import { generateAndSaveArticle } from "../services/generate-and-save-article-service";

export const generateArticleController = async (
    req: Request,
    res: Response
) => {
    const article = await generateAndSaveArticle();

    if ("error" in article) {
        return res
            .status(500)
            .send("Error generating article: " + article.message);
    }

    return res.status(200).send();
};
