import { Card } from "@/components/ui/card";

const CustomerInfoCard = () => (
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
          Indonesia Jl. Pondok Kelapa Timur Blok E7/8 DKI Jakarta Jakarta Timur
          Duren Sawit 13450
        </p>
      </div>
    </div>
  </Card>
);

export default CustomerInfoCard;
