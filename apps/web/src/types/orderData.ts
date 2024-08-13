import type { Recipient } from "@repo/openapi/requests";

export interface CardPayment {
  kind: "Card" | "GooglePay" | "ApplePay";
  cardNumber?: string;
  cardExpirationMonth?: number;
  cardExpirationYear?: number;
  cardCvv?: number;
  cardHolder?: string;
}

export interface BillingInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  state: string;
  zipCode: string;
}

export default interface OrderData {
  confirmed: boolean;
  products?: Array<number>;
  recipient?: Recipient | null;
  paymentMethod?: CardPayment;
  billing?: BillingInfo;
}
