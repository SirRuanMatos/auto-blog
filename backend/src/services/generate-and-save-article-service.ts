import type { GenericErrorResponse } from "../models";
import { generateArticle } from "./article-service";
import { generateImage } from "./generate-image-service";
import { downloadImageFromUrl } from "../utils/download-image-from-url";
import { db } from "../db/connection";
import { articles } from "../db/schema";
import { logError } from "../utils/log-error";

export const generateAndSaveArticle = async (): Promise<
    GenericErrorResponse | { success: true; message: string }
> => {
    try {
        const article = await generateArticle();

        if ("error" in article) {
            throw new Error("Error generating article: " + article.message);
        }

        const imageUrl = await generateImage(article.textPromptImage);

        if (typeof imageUrl === "object" && "error" in imageUrl) {
            throw new Error("Error generating image: " + imageUrl.message);
        }

        await db.insert(articles).values({
            title: article.title,
            description: article.description,
            article: article.article,
            image: imageUrl as string,
        });

        return { success: true, message: "Article generated and saved" };
    } catch (error: any) {
        logError("Error generating and saving article:", error);

        return {
            error: true,
            message: error?.message || "Failed to generate article",
        };
    }
};
