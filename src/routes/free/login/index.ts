import { Router } from "express";

export const router = Router();

router.get("/login", (_req, res) => {
  res.status(200).send("hello login");
});
