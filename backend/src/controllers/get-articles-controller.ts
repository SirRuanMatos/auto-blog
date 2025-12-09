import type { Request, Response } from "express";
import { articles } from "../db/schema";
import { db } from "../db/connection";
import { desc } from "drizzle-orm/sql/expressions/select";
import { count } from "drizzle-orm/sql/functions/aggregate";

export const getArticlesController = async (req: Request, res: Response) => {
    const { pageIndex = 0 } = req.query;
    const pageIndexNumber = parseInt(pageIndex as string, 10);

    const [amountOfArticlesQuery, articlesList] = await Promise.all([
        db.select({ count: count() }).from(articles),
        db
            .select({
                id: articles.id,
                title: articles.title,
                description: articles.description,
                image: articles.image,
                createdAt: articles.createdAt,
            })
            .from(articles)
            .offset(pageIndexNumber * 10)
            .limit(10)
            .orderBy((fields) => {
                return [desc(fields.createdAt)];
            }),
    ]);

    const amountOfArticles = amountOfArticlesQuery[0]?.count ?? BigInt(0);

    return res.status(200).send({
        articles: articlesList,
        meta: {
            pageIndex: pageIndexNumber,
            perPage: 10,
            totalCount: amountOfArticles,
        },
    });
};
