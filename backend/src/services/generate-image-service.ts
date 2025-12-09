import { Client } from "@gradio/client";
import type { GenericErrorResponse } from "../models";
import { logError } from "../utils/log-error";

export const generateImage = async (
    imagePrompt: string
): Promise<string | GenericErrorResponse> => {
    try {
        const client = await Client.connect("Tongyi-MAI/Z-Image-Turbo");
        const result = await client.predict("/generate", {
            prompt: imagePrompt,
            resolution: "1280x720 ( 16:9 )",
            seed: 42,
            steps: 8,
            shift: 3,
            random_seed: true,
        });
        const data: any = result.data;
        const imageUrl = data[0][0]?.image?.url;

        if (!imageUrl) {
            throw new Error("No image URL returned from API");
        }

        return imageUrl as string;
    } catch (error: any) {
        logError("Error generating image:", error);

        return {
            error: true,
            message: error?.message || "Failed to generate image",
        };
    }
};
