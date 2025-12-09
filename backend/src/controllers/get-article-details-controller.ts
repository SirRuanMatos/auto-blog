import type { Request, Response } from "express";
import { db } from "../db/connection";

export const getArticleDetailsController = async (
    req: Request,
    res: Response
) => {
    const { articleId } = req.params;

    if (!articleId) {
        return res.status(404).send("Article not found");
    }

    const articleDetails = await db.query.articles.findFirst({
        columns: {
            id: true,
            title: true,
            description: true,
            article: true,
            image: true,
            createdAt: true,
        },
        where: (articles, { eq }) => eq(articles.id, articleId),
    });

    if (!articleDetails) {
        return res.status(404).send("Article not found");
    }

    return res.status(200).send(articleDetails);
};
