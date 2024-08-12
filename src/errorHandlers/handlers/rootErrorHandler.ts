import { NextFunction, Response } from "express";
import { iReqApp } from "../../types/iReqApp";

export const rootErrorHandler = (
  err: Error,
  _req: iReqApp,
  res: Response,
  next: NextFunction
) => {
  console.log("err", err);
  res.status(500).send("unexpected error");
  next();
};
