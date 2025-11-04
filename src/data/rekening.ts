import { TypeRekening } from "@/types/rekening";

export async function getDataRekening(): Promise<TypeRekening[]> {
  return [
    {
      bank: "Bank Mandiri",
      nomorRekening: "130.00.7200005.5",
      atasNama: "PT Pos Indonesia (Persero)",
      cabang: "Asia Afrika Selatan",
      cq: "Kantor Pos Bandung",
    },
  ];
}
