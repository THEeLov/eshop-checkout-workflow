import { ZodError, z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z.string(),
  PORT: z.string(),
  REDIS_URL: z.string(),
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}

try {
  envSchema.parse(process.env);
} catch (err) {
  if (err instanceof ZodError) {
    console.error("Invalid environment variables: ", err.errors);
  }
  process.exit(1);
}
