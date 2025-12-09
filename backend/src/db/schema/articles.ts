import { pgTable, timestamp, text } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

export const articles = pgTable("articles", {
    id: text("id")
        .$defaultFn(() => createId())
        .primaryKey(),
    title: text("title").notNull(),
    description: text("description"),
    article: text("article"),
    image: text("image"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

