import { Result } from "@badrap/result";
import { redisClient } from "../redisClient";
import { InternalError } from "../utils";
import type { Order, OrderCreate } from "@repo/openapi/requests";

const ORDER_KEY_PREFIX = "order";
const ORDER_IDS_SET_KEY = "orderIds";
const ORDER_ID_COUNTER_KEY = "order:nextId";

export const orderRepository = {
  async create(order: OrderCreate): Promise<Result<Order>> {
    try {
      const newOrderId = await redisClient.incr(ORDER_ID_COUNTER_KEY);
      const newOrder: Order = { id: newOrderId, ...order };

      await redisClient.set(`${ORDER_KEY_PREFIX}:${newOrderId}`, JSON.stringify(newOrder));

      await redisClient.sAdd(ORDER_IDS_SET_KEY, newOrderId.toString());

      return Result.ok(newOrder);
    } catch (error) {
      return Result.err(new InternalError());
    }
  },
};
