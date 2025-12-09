import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import { env } from "../config";

const connection = postgres(env.DATABASE_URL, { max: 1 });

export const db = drizzle(connection, { schema });
