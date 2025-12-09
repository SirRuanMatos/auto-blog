import { OpenAI } from "openai";
import z from "zod";
import { env } from "../config";
import type { GeneratedArticleProps, GenericErrorResponse } from "../models";
import { logError } from "../utils/log-error";

const client = new OpenAI({
    baseURL: "https://router.huggingface.co/v1",
    apiKey: env.HF_TOKEN,
});

const responseSchema = z.object({
    article: z.string(),
    title: z.string(),
    description: z.string(),
    textPromptImage: z.string(),
});

export const generateArticle = async (): Promise<
    GeneratedArticleProps | GenericErrorResponse
> => {
    try {
        const chatCompletion = await client.chat.completions.parse({
            model: "deepseek-ai/DeepSeek-V3.2",
            temperature: 0.7,
            max_tokens: 4000,
            messages: [
                {
                    role: "user",
                    content: `You are a senior technical content writer and front-end developer. Your task: Search the web for the 3 most relevant news articles published within the last 24 hours about technology, artificial intelligence, or software development/programming. Prioritize trustworthy sources and do NOT invent facts. Capture title, source, publication date/time, and a short summary for each. Add source URLs as invisible HTML comments. Create a cohesive, SEO-friendly blog article in English wrapped only inside <article>...</article>, targeted at developers. Use exactly one <h1>, subsections with <h2> and <h3>, an introduction, one section per news item (context, implications, predictions), a FAQ section with at least 3 questions/answers, a conclusion, and a call-to-action. Use only Tailwind CSS classes (no inline styles or scripts) and wrap everything in <article class="max-w-3xl mx-auto bg-slate-900/80 text-slate-100 rounded-2xl shadow-lg p-6 md:p-10 space-y-6 border border-slate-800">. Ensure clean typography, spacing, responsive design, visual hierarchy, and subtle accents. Additionally generate: (1) a title summarizing the article, (2) a ~160-character SEO-friendly description, and (3) a textPromptImage describing an aesthetic AI image prompt representing the article’s theme with a natural-tech mood and a soft, muted green color palette inspired by tones similar to #8BA38E and #5C6C60 (do not mention hex codes). Return ONLY a JavaScript object with exactly: { article: z.string(), title: z.string(), description: z.string(), textPromptImage: z.string() }. No markdown, no explanations, no additional fields.`,
                },
            ],
        });

        const content = chatCompletion?.choices[0]?.message.content;

        const jsonMatch = content?.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            throw new Error("No JSON found in response");
        }

        const parsed = JSON.parse(jsonMatch[0]);
        const validated = responseSchema.parse(parsed);

        return validated;
    } catch (error: any) {
        logError("Error generating article:", error);

        return {
            error: true,
            message: error?.message || "Failed to generate article",
        };
    }
};
