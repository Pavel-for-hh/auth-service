import { Router } from "express";
import { router as routerLogin } from "./login";

export const router = Router();

router.use(routerLogin);
