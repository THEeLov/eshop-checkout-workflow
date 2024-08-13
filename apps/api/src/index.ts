import "./env";
import cors from "cors";
import express from "express";

import { ordersRouter } from "./orders/router";
import { productsRouter } from "./products/router";
import { recipientsRouter } from "./recipients/router";
import { setupSwagger } from "./swagger/codegen";

// Create express app
const app = express();

if (process.env.NODE_ENV !== "production") {
  setupSwagger(app);
}

// Setup CORS
app.use(cors());

// Make express parse JSON in body and parse url encoded strings
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Register routers
app.use("/orders", ordersRouter);
app.use("/products", productsRouter);
app.use("/recipients", recipientsRouter);

// Default route returning 404
app.use((_req, res) => {
  res.status(404).send("Not found");
});

const port = process.env.PORT ?? 6001;
// Start listening on connections
app.listen(port, () => console.log(`API listening on port ${port}`));
