// https://www.npmjs.com/package/express-jsdoc-swagger
// Types are generated in @repo/openapi package

/**
 * A product type.
 * @typedef {object} Product
 * @property {number} id.required - ID
 * @property {string} title.required - Title
 * @property {number} price.required - Price in dollars
 * @property {number} discountedPrice - Discounted price in dollars (in case of discount)
 */
type Product = {
  // Stub type, do not use, it is available through `@repo/openapi` types instead
};

//@ts-expect-error unused
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type _ = Product;
