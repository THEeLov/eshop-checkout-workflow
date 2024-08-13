import { Router } from "express";
import { ordersController } from "./controller";
import "./types";

export const ordersRouter = Router();

/**
 * POST /orders
 * @summary Create order.
 * @tags Orders
 * @param {OrderCreate} request.body.required - Order to be created.
 * @return {Order} 201 - Created order - application/json
 *
 */
ordersRouter.post("/", ordersController.createOrder);
