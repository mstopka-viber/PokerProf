import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express) {
  app.get("/api/terms", async (_req, res) => {
    const terms = await storage.getTerms();
    res.json(terms);
  });

  app.get("/api/terms/search", async (req, res) => {
    const query = req.query.q as string;
    if (!query) {
      return res.status(400).json({ message: "Search query required" });
    }
    const results = await storage.searchTerms(query);
    res.json(results);
  });

  app.get("/api/search", async (req, res) => {
    const query = req.query.q as string;
    if (!query) {
      return res.status(400).json({ message: "Search query required" });
    }
    const results = await storage.searchContent(query);
    res.json(results);
  });

  const httpServer = createServer(app);
  return httpServer;
}
