"use client";

import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { TypeStatusInvoice } from "@/types/invoice";
import { Badge } from "../ui/badge";
import { mapStatusToVariant } from "@/data/invoice";

interface IPageHeader3 {
  title: string;
  children?: React.ReactNode;
  status?: TypeStatusInvoice;
}

const PageHeader3 = ({ title, children, status }: IPageHeader3) => {
  const router = useRouter();

  const badgeVariant = mapStatusToVariant(status!);

  return (
    <div className="flex items-center justify-between bg-neutral-10 p-4">
      <div onClick={() => router.back()} className="flex items-center gap-3">
        <Button variant={"outline"}>
          <ArrowLeft />
        </Button>
        <p className="body-large-bold">{title}</p>

        {status && <Badge variant={badgeVariant}>{status}</Badge>}
      </div>
      <div className="flex items-center gap-4">{children}</div>
    </div>
  );
};

export default PageHeader3;
