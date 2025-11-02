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
    {
      layanan: "Desain Logo Profesional",
      kiriman: "Dokumen/Barang",
      harga: 1000000,
      pajak: 11,
      diskon: 0,
    },
    {
      layanan: "Jasa SEO Optimization",
      kiriman: "Dokumen/Barang",
      harga: 1500000,
      pajak: 11,
      diskon: 5,
    },
    {
      layanan: "Maintenance Website 6 Bulan",
      kiriman: "Dokumen/Barang",
      harga: 1200000,
      pajak: 11,
      diskon: 0,
    },
    {
      layanan: "Pembuatan Konten Sosial Media",
      kiriman: "Dokumen/Barang",
      harga: 800000,
      pajak: 11,
      diskon: 10,
    },
  ];
}
