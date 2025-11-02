export type TypeStatusInvoice =
  | "Draft"
  | "Pending Approval"
  | "Need Revision"
  | "Open"
  | "Sent to Customer"
  | "Partially paid"
  | "Paid"
  | "Cancelled";

export type TypeInvoice = {
  invoice: string;
  totalAmount: string;
  customer: string;
  statusInvoice: TypeStatusInvoice;
  createdAt: string;
};
