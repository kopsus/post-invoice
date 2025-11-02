import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";

const InvoiceDetailsForm = () => {
  return (
    <Card className="m-6 p-6">
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col gap-2">
          <Label>No. Invoice</Label>
          <InputGroup>
            <InputGroupInput />
            <InputGroupAddon align="inline-end">/KCUBD/102025</InputGroupAddon>
          </InputGroup>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Tanggal Terbit</Label>
          <Input type="date" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Due Date</Label>
          <Input type="date" disabled />
          <p className="caption-large-reguler text-neutral-90">
            Due date dihitung otomatis 14 hari setelah tanggal terbit.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label>No. PKS</Label>
            <span className="body-small-reguler text-neutral-90">Optional</span>
          </div>
          <Input type="text" placeholder="Masukkan nomor PKS" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label>No. PKS</Label>
            <span className="body-small-reguler text-neutral-90">Optional</span>
          </div>
          <Input type="date" />
        </div>
      </div>
    </Card>
  );
};

export default InvoiceDetailsForm;
