import { Card } from "@/components/ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { TypeServices } from "@/types/services";
import { formatIDR } from "@/lib/formatIDR";

interface IInvoiceSummary {
  data: TypeServices[];
}

const InvoiceSummary = ({ data }: IInvoiceSummary) => {
  return (
    <Card className="p-5 flex flex-col gap-5 bg-success-surface border border-success-border">
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <p className="body-small-reguler">Total Harga : </p>
          <p className="body-small-reguler">
            {data?.length ? formatIDR(data[0]?.harga) : "Rp 0"}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="body-small-reguler">Total Pajak :</p>
          <p className="body-small-reguler">
            {data.length ? data[0]?.pajak + "%" : "Rp 0"}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="body-small-reguler">Total Diskon :</p>
          <p className="body-small-reguler">
            {data.length ? data[0]?.diskon + "%" : "Rp 0"}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="body-large-bold">Total Tagihan :</p>
        <p className="body-large-bold">
          {data.length ? formatIDR(data[0]?.harga) : "Rp 0"}
        </p>
      </div>
      {data.length && (
        <>
          <div className="flex flex-col gap-2">
            <Label>Jumlah yang Sudah Dibayar</Label>
            <Input type="number" placeholder="0" />
            <p className="caption-large-reguler text-neutral-90">
              Sisa Tagihan: Rp 0
            </p>
          </div>
          <div className="flex items-center gap-1.5 justify-end">
            <Checkbox id="terms" />
            <p className="body-small-reguler text-neutral-100">
              Tandai sudah lunas
            </p>
          </div>
        </>
      )}
    </Card>
  );
};

export default InvoiceSummary;
