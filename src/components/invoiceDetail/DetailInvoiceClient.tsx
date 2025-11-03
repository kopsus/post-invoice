"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import PageHeader3 from "@/components/layout/PageHeader3";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { XIcon } from "lucide-react";
import InvoicePDFTemplate from "@/components/pdf/InvoicePDFTemplate";
import { TypeInvoice } from "@/types/invoice";
import InvoiceInfoCard from "./InvoiceInfoCard";
import CustomerInfoCard from "./CustomerInfoCard";
import PaymentDetailsCard from "./PaymentDetailsCard";
import InvoiceSummaryCard from "./InvoiceSummaryCard";
import SignatureStatusCard from "./SignatureStatusCard";
import RecentActivity from "./RecentActivity";
import ServicesTable from "./ServicesTable";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading PDF preview...</p>,
  }
);

interface IDetailInvoice {
  invoice: TypeInvoice;
}

const DetailInvoice = ({ invoice }: IDetailInvoice) => {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <PageHeader3 title={invoice.invoice} status={invoice.statusInvoice}>
        <Dialog open={showPdf} onOpenChange={setShowPdf}>
          <DialogTrigger asChild>
            <Button variant={"outline"}>Liat PDF</Button>
          </DialogTrigger>

          <DialogContent className="max-w-5xl h-[90vh] flex flex-col p-0">
            <DialogHeader className="p-6 pb-2 flex-row items-center justify-between border-b">
              <DialogTitle>Preview Invoice</DialogTitle>
              <div className="flex items-center gap-4">
                <Button variant="outline" asChild className="text-primary">
                  <Link href={"#"} target="_blank" rel="noopener noreferrer">
                    Buka di tab browser
                  </Link>
                </Button>
                <DialogClose asChild>
                  <Button variant={"outline"}>
                    <XIcon />
                  </Button>
                </DialogClose>
              </div>
            </DialogHeader>

            <div className="flex-1 overflow-hidden">
              <PDFViewer className="w-full h-full border-0">
                <InvoicePDFTemplate
                  invoiceId={invoice.invoice}
                  status={invoice.statusInvoice}
                  customerName={invoice.customer}
                />
              </PDFViewer>
            </div>
          </DialogContent>
        </Dialog>

        <Button variant={"outline"}>Batalkan</Button>
        <Button variant={"outline"}>Ubah</Button>
      </PageHeader3>

      <InvoiceInfoCard />

      <CustomerInfoCard />

      <ServicesTable />

      <div className="grid grid-cols-2 items-start mx-6 gap-5">
        <PaymentDetailsCard />
        <div className="flex flex-col gap-6">
          <InvoiceSummaryCard />
          <SignatureStatusCard />
        </div>
      </div>

      <RecentActivity />
    </div>
  );
};

export default DetailInvoice;
