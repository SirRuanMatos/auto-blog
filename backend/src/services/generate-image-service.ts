import type { GenericErrorResponse } from "../models";
import { logError } from "../utils/log-error";
import { InferenceClient } from "@huggingface/inference";
import { env } from "../config";
import { blobToBase64 } from "../utils/blob-to-base64";

const client = new InferenceClient(env.HF_TOKEN);

export const generateImage = async (
    imagePrompt: string
): Promise<string | GenericErrorResponse> => {
    try {
        if (imagePrompt) {
            throw new Error("Image prompt is empty");
        }

        const result = await client.textToImage({
            provider: "fal-ai",
            model: "Tongyi-MAI/Z-Image-Turbo",
            inputs: imagePrompt,
            parameters: { num_inference_steps: 5, height: 720, width: 1280 },
        });

        const base64Image = await blobToBase64(result as unknown as Blob);

        if (!base64Image) {
            throw new Error("No image URL returned from API");
        }

        return base64Image as string;
    } catch (error: any) {
        logError("Error generating image:", error);

        return {
            error: true,
            message: error?.message || "Failed to generate image",
        };
    }
};
