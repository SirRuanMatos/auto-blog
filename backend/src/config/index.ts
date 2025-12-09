import * as dotenv from "dotenv";
import { z } from "zod";

dotenv.config();


const envSchema = z.object({
    HF_TOKEN: z.string().min(1),
    DATABASE_URL: z.string().url().min(1),
    AUTH_USERNAME: z.string().min(1),
    AUTH_PASSWORD: z.string().min(1),
});

export const env = envSchema.parse(process.env);
