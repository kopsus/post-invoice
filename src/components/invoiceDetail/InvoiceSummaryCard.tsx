import { Card } from "@/components/ui/card";

const InvoiceSummaryCard = () => (
  <Card className="p-5 bg-success-surface border border-success-border">
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <p className="body-small-reguler">Total Harga : </p>
        <p className="body-small-reguler">Rp 3.047.000</p>
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
      <p className="body-large-bold">Rp 3.047.000</p>
    </div>
  </Card>
);

export default InvoiceSummaryCard;
