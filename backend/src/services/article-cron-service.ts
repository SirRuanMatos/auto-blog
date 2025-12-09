import cron from "node-cron";
import { generateAndSaveArticle } from "./generate-and-save-article-service";
import { logError } from "../utils/log-error";

export const initArticleCron = () => {
    cron.schedule("0 6 * * *", async () => {
        try {
            const article = await generateAndSaveArticle();

            if ("error" in article) {
                throw new Error("Error generating article: " + article.message);
            }
        } catch (error: any) {
            logError("Error in scheduled article generation:", error);
        }
    });
    console.log("Article cron job initialized");
};
