"use client";

import CustomerSearch from "@/components/invoiceCreate/CustomerSearch";
import InvoiceDetailsForm from "@/components/invoiceCreate/InvoiceDetailsForm";
import InvoiceSummary from "@/components/invoiceCreate/InvoiceSummary";
import PaymentInfo from "@/components/invoiceCreate/PaymentInfo";
import PageHeader2 from "@/components/layout/PageHeader2";
import TableServices from "@/components/tables/service";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";

interface Customer {
  id: number;
  name: string;
}

const mockBank: Customer[] = [
  { id: 1, name: "BCA" },
  { id: 2, name: "Mandiri" },
  { id: 3, name: "BRI" },
];

const InvoiceCreate = () => {
  return (
    <div>
      <PageHeader2 title="Buat Invoice" />
      <InvoiceDetailsForm />

      <CustomerSearch />

      <Card className="m-6 gap-4 items-start">
        <p className="body-large-bold px-5">Layanan</p>

        <TableServices />

        <Button variant="ghost" className="text-primary mx-3">
          <PlusCircle fill="black" color="white" />
          Tambah layanan
        </Button>
      </Card>

      <div className="grid grid-cols-2 items-start gap-5 m-6">
        <PaymentInfo banks={mockBank} />
        <InvoiceSummary />
      </div>

      <div className="bg-neutral-10 p-6 flex items-center justify-end gap-4">
        <Button variant={"outline"}>Batal</Button>
        <Button variant={"outline"}>Simpan sebagai draft</Button>
        <Button disabled>Simpan</Button>
      </div>
    </div>
  );
};

export default InvoiceCreate;
