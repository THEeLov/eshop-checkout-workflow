import type { Request, Response } from "express";
import products from "./data.json";

const getProducts = async (_req: Request, res: Response) => {
  res.status(200).send(products);
};

export const productsController = {
  getProducts,
};
