import { Express } from "express";
import { rootErrorHandler } from "./handlers/rootErrorHandler";

export const useErrorHandlers = (app: Express) => {
  app.use(rootErrorHandler);
};
