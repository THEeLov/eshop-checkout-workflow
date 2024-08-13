import type { Request, Response } from "express";
import { handleRepositoryErrors, parseRequest } from "../utils";
import { orderRepository } from "./repository";
import { createOrderRequestSchema } from "@repo/validation-schemas/schemas.ts";

const createOrder = async (req: Request, res: Response) => {
  const request = await parseRequest(createOrderRequestSchema, req, res);
  if (request === null) return;

  const order = request.body;

  const newOrder = await orderRepository.create(order);
  if (newOrder.isErr) {
    handleRepositoryErrors(newOrder.error, res);
    return;
  }

  res.status(201).send(newOrder.value);
};

/* 
   In case you wish to achieve persistence of the order form
   by sending / getting draft order data to / from the server before final 
   submission, implement some dedicated endpoints for that and adjust
   'createOrder' handler to accept incomplete data.
*/

export const ordersController = {
  createOrder,
};
