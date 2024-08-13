import z from 'zod'
import isCreditCard from "validator/lib/isCreditCard"
import isPostalCode from "validator/lib/isPostalCode"
import isMobilePhone from "validator/lib/isMobilePhone"
import isEmail from 'validator/lib/isEmail'
import dayjs from 'dayjs'


export const paymentMethod = z.object({
  cardNumber: z.string().min(1, 'Credit card number is required.').refine(isCreditCard, {
    message: 'Credit card number is invalid.',
  }),  
  cardExpirationMonth: z.string().min(1, 'Expiration month is required.').pipe(z.coerce.number({
    invalid_type_error: 'Expiration month is a number.',
  }).min(1, 'Expiration month is too small.').max(12, 'Expiration month is too large.')),
  cardExpirationYear: z.string().min(1, 'Expiration year is required.').pipe(z.coerce.number({
    invalid_type_error: 'Expiration year is a number.',
  }).min(dayjs().year(), 'Expiration year is too small.').max(dayjs().year() + 20, 'Expiration year is too large.')),  
  cardCvv: z.string().min(1, 'Cvv is required.').pipe(z.coerce.number({
    invalid_type_error: 'Cvv is a number.',
  }).min(100, "Cvv is too small.").max(9999, 'Cvv is too large.')),  cardHolder: z.string().min(1, 'Card holder is required.').max(100, 'Card holder is too long.'),
});

export const billInfo = z.object({
  name: z.string().min(1, "Name is required.").max(100, "Name is too long."),
  email: z.string().min(1, "E-mail address is required.").refine(isEmail, "E-mail address is invalid."),
  phone: z.string().min(1, "Phone number is required.").refine(isMobilePhone, "Phone number is invalid."),
  address:  z.string().min(1, "Address is required.").max(100, "Address is too long."),
  city:  z.string().min(1, "City is required.").max(100, "City is too long."),
  country: z.string().min(1, "Country is required.").max(100, "Country is too long."),
  state: z.string().min(1, "State is required.").max(100, "State is too long."),
  zipCode: z.string().min(1, 'Postal code is required.').refine((val) => isPostalCode(val, "any"), {
    message: 'Postal code is invalid.',
  }),
});