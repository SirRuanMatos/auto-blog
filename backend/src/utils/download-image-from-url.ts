import { GenericErrorResponse } from "../models";
import axios from "axios";
import { logError } from "./log-error";

export const downloadImageFromUrl = async (
    imageUrl: string
): Promise<string | GenericErrorResponse> => {
    try {
        const response = await axios.get(imageUrl, {
            responseType: "arraybuffer",
        });

        const mime = response.headers["content-type"];
        const base64 = Buffer.from(response.data, "binary").toString("base64");

        return `data:${mime};base64,${base64}`;
    } catch (error: any) {
        logError("Error downloading image:", error);

        return {
            error: true,
            message: error?.message || "Failed to download image",
        };
    }
};
