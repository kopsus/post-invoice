"use client";

import PageHeader from "@/components/layout/PageHeader";
import { columnsInvoice } from "@/components/tables/invoice/Columns";
import { DataTable } from "@/components/tables/invoice/DataTable";
import InvoiceTabs from "@/components/tables/invoice/InvoiceTabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getDataInvoice } from "@/data/invoice";
import { TypeInvoice } from "@/types/invoice";
import { Plus, Settings } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function InvoicePage() {
  const [data, setData] = useState<TypeInvoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const invoiceData = await getDataInvoice();
      setData(invoiceData);
      setLoading(false);
    }
    fetchData();
  }, []);

  const mapStatusToKey = (status: TypeInvoice["statusInvoice"]) => {
    switch (status) {
      case "Draft":
        return "draft";
      case "Pending Approval":
        return "pending";
      case "Need Revision":
        return "revision";
      case "Open":
        return "open";
      case "Sent to Customer":
        return "sent";
      case "Partially paid":
        return "partially";
      case "Paid":
        return "paid";
      case "Cancelled":
        return "cancel";
      default:
        return "all";
    }
  };

  const filteredData = data.filter((item) =>
    filterStatus === "all"
      ? true
      : mapStatusToKey(item.statusInvoice) === filterStatus
  );

  return (
    <div className="flex flex-col gap-5 pl-9 pr-10 py-6">
      <PageHeader title="Invoice">
        <Button variant={"secondary"}>
          <Settings /> Pengaturan dokumen
        </Button>
        <Link href={"/invoice/create"}>
          <Button>
            <Plus /> Buat Invoice
          </Button>
        </Link>
      </PageHeader>

      <div className="grid grid-cols-2 items-center gap-10">
        <Card className="gap-2">
          <CardHeader className="body-small-reguler">
            Total Nilai Invoice
          </CardHeader>
          <CardContent className="heading-6">Rp #####</CardContent>
        </Card>
        <Card className="gap-2">
          <CardHeader className="body-small-reguler">Closed</CardHeader>
          <CardContent className="heading-6">Rp #####</CardContent>
        </Card>
      </div>

      <Card className="gap-0 py-0">
        <InvoiceTabs onTabChange={setFilterStatus} />
        {loading ? (
          <div className="p-4 text-center">Loading...</div>
        ) : (
          <DataTable columns={columnsInvoice} data={filteredData} />
        )}
      </Card>
    </div>
  );
}
