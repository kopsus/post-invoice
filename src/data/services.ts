import { TypeServices } from "@/types/services";

export async function getDataServices(): Promise<TypeServices[]> {
  return [
    {
      layanan: "Pembuatan Website Landing Page",
      kiriman: "Dokumen/Barang",
      harga: 2500000,
      pajak: 11,
      diskon: 10,
    },
  ];
}
