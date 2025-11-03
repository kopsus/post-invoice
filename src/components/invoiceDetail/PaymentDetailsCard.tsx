import { Card } from "@/components/ui/card";

const PaymentDetailsCard = () => (
  <Card className="p-5 flex flex-col gap-5">
    <div className="flex flex-col gap-3">
      <p className="body-large-bold">Bank</p>
      <div className="flex flex-col gap-2">
        <p className="body-small-reguler">Bank Mandiri - 130.00.7200005.5</p>
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
        Apabila Saudara sudah melakukan pembayaran melalui bank dan pelaporan
        bukti potong pph 23 harap konfirmasi melalui email:
        widiyanti.lestari@posindonesia.co.id atau mengirimkan bukti transfer fax
        ke nomor 022-4240725 paling lambat 1 (satu) bulan setelah pembayaran.
      </p>
    </div>
  </Card>
);

export default PaymentDetailsCard;
