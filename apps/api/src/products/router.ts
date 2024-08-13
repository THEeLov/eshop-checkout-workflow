import { Router } from "express";
import { productsController } from "./controller";
import "./types";

export const productsRouter = Router();

/**
 * GET /products
 * @summary Get products.
 * @tags Products
 * @return {Product[]} 200 - Success response - application/json
 */
productsRouter.get("/", productsController.getProducts);
