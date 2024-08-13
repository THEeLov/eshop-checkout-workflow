import { Router } from "express";
import { recipientsController } from "./controller";
import "./types";

export const recipientsRouter = Router();

/**
 * GET /recipients
 * @summary Get recipients.
 * @tags Recipients
 * @return {Recipient[]} 200 - Success response - application/json
 */
recipientsRouter.get("/", recipientsController.getRecipients);
