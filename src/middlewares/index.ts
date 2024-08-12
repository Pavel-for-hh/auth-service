import { Express } from "express";
import morgan from "morgan";

export const useMiddlewares = (app: Express) => {
  app.use(
    morgan(
      ":date :method :url :status :res[content-length] - :response-time ms"
    )
  );
};
