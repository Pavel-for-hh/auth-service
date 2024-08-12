import { Router } from "express";
import { iReqApp } from "../../../types/iReqApp";

export const router = Router();

router.get("/whoami", (req: iReqApp, res) => {
  res.status(200).json(req.user ?? {});
});
