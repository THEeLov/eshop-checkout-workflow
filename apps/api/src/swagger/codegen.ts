import expressJSDocSwagger, { type Options } from "express-jsdoc-swagger";
import type { Application } from "express";
import fs from "node:fs/promises";
import packageJson from "../../package.json";

const options: Options = {
  info: {
    version: "1.0.0",
    title: "API",
    description: packageJson.description,
    license: {
      name: "MIT",
    },
  },
  security: {
    BasicAuth: {
      type: "http",
      scheme: "basic",
    },
  },
  baseDir: `${process.cwd()}/src`,
  filesPattern: "./**/*.ts",
  swaggerUIPath: "/api-docs",
  exposeSwaggerUI: true,

  exposeApiDocs: false,
  notRequiredAsNullable: false,

  swaggerUiOptions: {},
  servers: [
    {
      url: `http://localhost:${process.env.PORT}`,
      description: "Development server",
    },
  ],
};

export const setupSwagger = (app: Application) => {
  const listener = expressJSDocSwagger(app)(options);
  listener.on("finish", async (swaggerObject) => {
    const openApiSchema = JSON.stringify(swaggerObject);
    await fs.writeFile(`${process.cwd()}/../../packages/openapi/openapi.json`, openApiSchema);
  });
};
