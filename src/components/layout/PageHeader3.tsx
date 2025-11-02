"use client";

import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { TypeStatusInvoice } from "@/types/invoice";

import { type VariantProps } from "class-variance-authority";
import { Badge, badgeVariants } from "../ui/badge";

type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];

const mapStatusToVariant = (status?: TypeStatusInvoice): BadgeVariant => {
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
      return "default";
  }
};

interface IPageHeader3 {
  title: string;
  children?: React.ReactNode;
  status?: TypeStatusInvoice;
}

const PageHeader3 = ({ title, children, status }: IPageHeader3) => {
  const router = useRouter();

  const badgeVariant = mapStatusToVariant(status);

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
