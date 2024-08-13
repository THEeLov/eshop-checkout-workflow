// https://www.npmjs.com/package/express-jsdoc-swagger
// Types are generated in @repo/openapi package

/**
 * A customer type.
 * @typedef {object} Customer
 * @property {string} fullName.required - Full name
 * @property {string} phoneNumber.required - Phone number
 * @property {string} email.required - E-mail address
 */
type Customer = {
  // Stub type, do not use, it is available through `@repo/openapi` types instead
};

/**
 * A billing address type.
 * @typedef {object} BillingAddress
 * @property {string} address.required - Address (street and house no.)
 * @property {string} city.required - City
 * @property {string} stateOrProvince.required - State or province
 * @property {string} country.required - Country
 * @property {string} zipCode.required - Zip code
 */
type BillingAddress = {
  // Stub type, do not use, it is available through `@repo/openapi` types instead
};

/**
 * A card payment method type.
 * @typedef {object} CardPaymentMethod
 * @property {string} kind.required - enum:Card - Kind of payment.
 * @property {string} cardNumber.required - Card number
 * @property {string} cardExpirationMonth.required - Card Expiration month
 * @property {string} cardExpirationYear.required - Card Expiration year
 * @property {string} cardCvv.required - Card Cvv
 * @property {string} cardHolder.required - Card holder
 */
type CardPaymentMethod = {
  // Stub type, do not use, it is available through `@repo/openapi` types instead
};

/**
 * A google pay payment method type.
 * @typedef {object} GooglePayPaymentMethod
 * @property {string} kind.required - enum:GooglePay - Kind of payment.
 */
type GooglePayPaymentMethod = {
  // Stub type, do not use, it is available through `@repo/openapi` types instead
};

/**
 * An apple pay payment method type.
 * @typedef {object} ApplePayPaymentMethod
 * @property {string} kind.required - enum:ApplePay - Kind of payment.
 */
type ApplePayPaymentMethod = {
  // Stub type, do not use, it is available through `@repo/openapi` types instead
};

/**
 * An order create type.
 * @typedef {object} OrderCreate
 * @property {Customer} customer.required - Customer
 * @property {oneOf|CardPaymentMethod|GooglePayPaymentMethod|ApplePayPaymentMethod} paymentMethod.required - Payment method
 * @property {BillingAddress} billingAddress.required - Billing address
 * @property {number[]} products.required - Products to be ordered (at least one)
 * @property {string} giftRecipient - E-mail address of the customer to gift to (optional)
 */
type OrderCreate = {
  // Stub type, do not use, it is available through `@repo/openapi` types instead
};

/**
 * An order type.
 * @typedef {object} Order
 * @property {number} id.required - ID of the order
 * @property {Customer} customer.required - Customer
 * @property {BillingAddress} billingAddress.required - Billing address
 * @property {number[]} products.required - Products to be ordered
 * @property {string} giftRecipient - E-mail address of the customer to gift to
 */
type Order = {
  // Stub type, do not use, it is available through `@repo/openapi` types instead
};

//@ts-expect-error unused
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type _ =
  | Customer
  | BillingAddress
  | OrderCreate
  | Order
  | CardPaymentMethod
  | GooglePayPaymentMethod
  | ApplePayPaymentMethod;
