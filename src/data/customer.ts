import { TypeCustomer } from "@/types/customer";

export async function getDataCustomer(): Promise<TypeCustomer[]> {
  return [
    {
      name: "PT BCA FINANCE (BPKB)",
      noTlp: "081234567890",
      email: "bcafinance@gmail.com",
    },
  ];
}
