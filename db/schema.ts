import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const characters = sqliteTable("characters", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("user_id").notNull().unique(),
  name: text("name").notNull(),
  pronouns: text("pronouns").notNull(),
  ageBand: text("age_band").notNull(),
  context: text("context").notNull(),
  temperament: text("temperament").notNull(),
  palette: text("palette").notNull(),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
