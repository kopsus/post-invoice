import InvoiceInfoCard from "@/components/invoiceDetail/InvoiceInfoCard";
import CustomerInfoCard from "@/components/invoiceDetail/CustomerInfoCard";
import ServicesTable from "@/components/invoiceDetail/ServicesTable";
import PaymentDetailsCard from "@/components/invoiceDetail/PaymentDetailsCard";
import InvoiceSummaryCard from "@/components/invoiceDetail/InvoiceSummaryCard";
import SignatureStatusCard from "@/components/invoiceDetail/SignatureStatusCard";
import RecentActivity from "@/components/invoiceDetail/RecentActivity";
import { Button } from "@/components/ui/button";
import PageHeader3 from "@/components/layout/PageHeader3";

const DetailInvoice = () => {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader3 title="09289/KCUBD/102025" status="Pending Approval">
        <Button variant={"outline"}>Lihat PDF</Button>
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
