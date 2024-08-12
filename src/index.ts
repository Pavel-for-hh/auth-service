import express from "express";
import { useRoutes } from "./routes";
import { useMiddlewares } from "./middlewares";
import { useErrorHandlers } from "./errorHandlers";

const app = express();
const port = 3000;

useMiddlewares(app);
useRoutes(app);
useErrorHandlers(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
