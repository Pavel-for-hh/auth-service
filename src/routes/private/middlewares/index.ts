import { RequestHandler } from "express";
import { iReqApp } from "../../../types/iReqApp";

export const authMiddleware: RequestHandler = (req: iReqApp, _res, next) => {
  // throw new Error("auauthorized error");
  console.log("authMiddleware");

  req.user = { name: "Anna" };
  next();
};
