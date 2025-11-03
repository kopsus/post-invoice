import { Card } from "@/components/ui/card";

const InvoiceInfoCard = () => (
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
);

export default InvoiceInfoCard;
