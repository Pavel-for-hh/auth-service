import { Router } from "express";
import { router as routerWhoami } from "./whoami";
import { authMiddleware } from "./middlewares";

export const router = Router();

router.use(authMiddleware);
router.use(routerWhoami);
