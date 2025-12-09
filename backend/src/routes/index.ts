import { Router } from "express";
import {
    healthController,
    generateArticleController,
    getArticlesController,
    getArticleDetailsController
} from "../controllers";
import { basicAuth } from "../middlewares/basic-auth";

export const router = Router();

router.get("/health", healthController);
router.get("/articles", getArticlesController);
router.get("/articles/:articleId", getArticleDetailsController);

router.post("/generate-article", basicAuth, generateArticleController);

export default router;
