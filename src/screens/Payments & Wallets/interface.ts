export interface Ipayment {
  price: string;
  fee: string;
  actionType: "transfer" | "deposit";
}
export interface Idetails {
  status: string;
  date: string;
  time: string;
  "recipient name"?: string;
  "depositor name"?: string;
  "depositor acc no"?: string;
  "bank name"?: string;
  "transaction number"?: string;
  "paid with"?: string;
}

export interface IpaymentDetails {
  details: Idetails;
  payment: Ipayment;
}
