import type { Request, Response } from "express";
import recipients from "./data.json";

const getRecipients = async (_req: Request, res: Response) => {
  res.status(200).send(recipients);
};

export const recipientsController = {
  getRecipients,
};
