import DetailInvoiceClient from "@/components/invoiceDetail/DetailInvoiceClient";
import { getDataInvoice } from "@/data/invoice";
import { notFound } from "next/navigation";

async function getInvoiceById(id: string) {
  const allInvoices = await getDataInvoice();
  const invoice = allInvoices.find((inv) => inv.invoice === id);
  return invoice;
}

export default async function DetailInvoicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const invoice = await getInvoiceById(id);

  if (!invoice) {
    notFound();
  }

  return <DetailInvoiceClient invoice={invoice} />;
}
