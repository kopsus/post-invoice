"use client";

import CustomerSearch from "@/components/invoiceCreate/CustomerSearch";
import InvoiceDetailsForm from "@/components/invoiceCreate/InvoiceDetailsForm";
import InvoiceSummary from "@/components/invoiceCreate/InvoiceSummary";
import PaymentInfo from "@/components/invoiceCreate/PaymentInfo";
import PageHeader2 from "@/components/layout/PageHeader2";
import TableServices from "@/components/tables/service";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getDataServices } from "@/data/services";
import { TypeServices } from "@/types/services";
import { PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useServiceDialogStore } from "@/stores/serviceDialogStore";
import DialogRightService from "@/components/dialog/DialogRightService";
import DialogRightCustomer from "@/components/dialog/DialogRightCustomer";

const InvoiceCreate = () => {
  const [data, setData] = useState<TypeServices[]>();
  const openServiceDialog = useServiceDialogStore(
    (state) => state.openServiceDialog
  );

  useEffect(() => {
    async function fetchData() {
      const servicesData = await getDataServices();
      setData(servicesData);
    }
    fetchData();
  }, []);

  const handleDelete = (layanan: string) => {
    const updatedData = data?.filter((item) => item.layanan !== layanan);
    setData(updatedData);
  };

  return (
    <div>
      <PageHeader2 title="Buat Invoice" />
      <InvoiceDetailsForm />

      <CustomerSearch />

      <Card className="m-6 gap-4 items-start">
        <p className="body-large-bold px-5">Layanan</p>

        <TableServices data={data ?? []} handleDelete={handleDelete} />

        <Button
          onClick={openServiceDialog}
          variant="ghost"
          className="text-primary mx-3"
        >
          <PlusCircle fill="black" color="white" />
          Tambah layanan
        </Button>
      </Card>

      <div className="grid grid-cols-2 items-start gap-5 m-6">
        <PaymentInfo />
        <InvoiceSummary data={data ?? []} />
      </div>

      <div className="bg-neutral-10 p-6 flex items-center justify-end gap-4">
        <Button variant={"outline"}>Batal</Button>
        <Button variant={"outline"}>Simpan sebagai draft</Button>
        <Button disabled>Simpan</Button>
      </div>

      {/* dialog */}
      <DialogRightService />
      <DialogRightCustomer />
    </div>
  );
};

export default InvoiceCreate;
