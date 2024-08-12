import { Request } from "express";

export interface iReqApp extends Request {
  user?: { name: string };
}
