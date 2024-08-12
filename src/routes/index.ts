import { Express } from "express";
import { router as freeRouter } from "./free";
import { router as privateRouter } from "./private";

export const useRoutes = (app: Express) => {
  const rootPath = "/api";
  app.use(rootPath, freeRouter);
  app.use(rootPath, privateRouter);
};
