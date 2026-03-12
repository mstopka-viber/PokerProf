import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const terms = pgTable("terms", {
  id: serial("id").primaryKey(),
  term: text("term").notNull(),
  definition: text("definition").notNull(),
  category: text("category").notNull(),
});

export const insertTermSchema = createInsertSchema(terms).pick({
  term: true,
  definition: true,
  category: true,
});

export type InsertTerm = z.infer<typeof insertTermSchema>;
export type Term = typeof terms.$inferSelect;

export type HandRank = {
  name: string;
  description: string;
  example: string[];
};

export type StartingHand = {
  hand: string;
  position: string;
  recommendation: string;
  strength: number;
};

export type SearchResult = {
  id: string;
  title: string;
  content: string;
  category: string;
  page: string;
  href: string;
  excerpt?: string;
};

export type SearchableContent = {
  id: string;
  title: string;
  content: string;
  category: string;
  page: string;
  href: string;
  keywords: string[];
};
