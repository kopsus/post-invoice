import PageHeader3 from "@/components/layout/PageHeader3";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatIDR } from "@/lib/formatIDR";
import { FileText, MinusCircle } from "lucide-react";

const DetailInvoice = () => {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader3 title="09289/KCUBD/102025" status="Pending Approval">
        <Button variant={"outline"}>Lihat PDF</Button>
        <Button variant={"outline"}>Batalkan</Button>
        <Button variant={"outline"}>Ubah</Button>
      </PageHeader3>

      <Card className="p-5 mx-6">
        <div className="text-neutral-100">
          <p className="body-small-reguler">No. Invoice</p>
          <p className="body-large-bold">09289/KCUBD/102025</p>
        </div>
        <div className="flex flex-col gap-1 body-small-reguler text-neutral-80">
          <div className="grid grid-cols-12 items-center">
            <p className="col-span-4">Tanggal Terbit</p>
            <p className="text-nowrap">3 Oktober</p>
          </div>
          <div className="grid grid-cols-12 items-center">
            <p className="col-span-4">Due Date</p>
            <p className="text-nowrap">17 Oktober 2025 (H+14)</p>
          </div>
          <div className="grid grid-cols-12 items-center">
            <p className="col-span-4">No. PKS</p>
            <p className="text-nowrap">-</p>
          </div>
          <div className="grid grid-cols-12 items-center">
            <p className="col-span-4">Tanggal PKS</p>
            <p className="text-nowrap">-</p>
          </div>
        </div>
      </Card>

      <Card className="p-5 mx-6">
        <p className="body-large-bold text-neutral-100">Customer</p>
        <div className="flex flex-col gap-1 body-small-reguler text-neutral-80">
          <div className="grid grid-cols-12">
            <p className="col-span-4">Nama Customer / Perusahaan</p>
            <p className="text-nowrap">PT BCA FINANCE (BPKB)</p>
          </div>
          <div className="grid grid-cols-12">
            <p className="col-span-4">No. Telepon</p>
            <p className="text-nowrap">(62) 81234567890</p>
          </div>
          <div className="grid grid-cols-12">
            <p className="col-span-4">Email</p>
            <p className="text-nowrap">bcafinance@gmail.com</p>
          </div>
          <div className="grid grid-cols-12">
            <p className="col-span-4">Alamat Billing</p>
            <p className="col-span-8">
              Indonesia Jl. Pondok Kelapa Timur Blok E7/8 DKI Jakarta Jakarta
              Timur Duren Sawit 13450
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-5 mx-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-5">Deskripsi Layanan</TableHead>
              <TableHead>Harga</TableHead>
              <TableHead>Diskon</TableHead>
              <TableHead>Pajak</TableHead>
              <TableHead>Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="pl-5">
                <div className="flex flex-col">
                  <p>Pengiriman Bulanan</p>
                  <p className="caption-large-reguler text-neutral-80">
                    Dokumen/Barang
                  </p>
                </div>
              </TableCell>
              <TableCell>{formatIDR(3047000)}</TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
              <TableCell>{formatIDR(3047000)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>

      <div className="grid grid-cols-2 items-start mx-6 gap-5">
        <Card className="p-5 flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <p className="body-large-bold">Bank</p>
            <div className="flex flex-col gap-2">
              <p className="body-small-reguler">
                Bank Mandiri - 130.00.7200005.5
              </p>
              <div className="flex flex-col gap-1 body-small-reguler text-neutral-80">
                <div className="flex items-center justify-between ">
                  <p>Pemilik rekening</p>
                  <p>PT Pos Indonesia (Persero)</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Cabang Bank</p>
                  <p>Asia Afrika Selatan</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Cq</p>
                  <p>Kantor Pos Bandung</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="body-large-bold">Catatan</p>
            <p className="body-small-reguler text-neutral-100">
              Apabila Saudara sudah melakukan pembayaran melalui bank dan
              pelaporan bukti potong pph 23 harap konfirmasi melalui email:
              widiyanti.lestari@posindonesia.co.id atau mengirimkan bukti
              transfer fax ke nomor 022-4240725 paling lambat 1 (satu) bulan
              setelah pembayaran.
            </p>
          </div>
        </Card>

        <div className="flex flex-col gap-6">
          <Card className="p-5 bg-success-surface border border-success-border">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <p className="body-small-reguler">Total Harga : </p>
                <p className="body-small-reguler">Rp 0</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="body-small-reguler">Total Pajak :</p>
                <p className="body-small-reguler">Rp 0</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="body-small-reguler">Total Diskon :</p>
                <p className="body-small-reguler">Rp 0</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="body-large-bold">Total Tagihan :</p>
              <p className="body-large-bold">Rp 0</p>
            </div>
          </Card>

          <Card className="p-5">
            <p className="body-large-bold">Tanda Tangan</p>
            <div className="flex flex-col gap-1 body-small-reguler text-neutral-80">
              <div className="flex items-center justify-between ">
                <p>Pemilik rekening</p>
                <MinusCircle size={20} className="fill-neutral-40 text-white" />
              </div>
              <div className="flex items-center justify-between">
                <p>EGM KCU Bandung</p>
                <MinusCircle size={20} className="fill-neutral-40 text-white" />
              </div>
              <div className="flex items-center justify-between">
                <p>Manager Financial Business Partner</p>
                <MinusCircle size={20} className="fill-neutral-40 text-white" />
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="mx-6 mt-6 mb-10 flex flex-col gap-4">
        <p className="body-large-bold text-neutral-100">Aktivitas Terbaru</p>
        <div className="flex gap-2">
          <FileText />
          <div>
            <p className="body-small-reguler text-neutral-100">
              Invoice 09289/KCUBD/102025 berhasil dibuat oleh Fadhil Ibrahim
              (Admin)
            </p>
            <p className="caption-large-reguler text-neutral-90">
              3 Okt 2025, 15.06
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailInvoice;
