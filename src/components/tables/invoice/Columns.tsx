"use client";

import { Badge, badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDateWithTimeID } from "@/lib/formatDate";
import { formatIDR } from "@/lib/formatIDR";
import { TypeInvoice, TypeStatusInvoice } from "@/types/invoice";
import { ColumnDef } from "@tanstack/react-table";
import { VariantProps } from "class-variance-authority";
import { Eye, FileText, MoreHorizontalIcon, Pen, XCircle } from "lucide-react";
import Link from "next/link";

export const columnsInvoice: ColumnDef<TypeInvoice>[] = [
  {
    accessorKey: "invoice",
    header: "Invoice",
    filterFn: "includesString",
  },
  {
    accessorKey: "totalAmount",
    header: "Nominal",
    cell: ({ row }) => {
      const nominal = row.original.totalAmount;

      return <p className="body-small-semibold">{formatIDR(nominal)}</p>;
    },
  },
  {
    accessorKey: "statusInvoice",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.statusInvoice;

      type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];

      const variantMap: Record<TypeStatusInvoice, BadgeVariant> = {
        Draft: "draft",
        "Pending Approval": "pending",
        "Need Revision": "revision",
        Open: "open",
        "Sent to Customer": "sent",
        "Partially paid": "partially",
        Paid: "paid",
        Cancelled: "cancel",
      };

      const variant = variantMap[status] ?? "default";

      return <Badge variant={variant}>{status}</Badge>;
    },
  },
  {
    accessorKey: "customer",
    header: "Customer",
  },
  {
    accessorKey: "createdAt",
    header: "Tanggal Terbit",
    cell: ({ row }) => {
      const { datePart, timePart } = formatDateWithTimeID(
        row.original.createdAt
      );
      return (
        <div className="flex flex-col">
          <p>{datePart}</p>
          <p className="caption-large-reguler text-neutral-80">{timePart}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "action",
    header: "",
    cell: ({ row }) => {
      return (
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" aria-label="Open menu" size="icon-sm">
              <MoreHorizontalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link
                  href={"/invoice/" + row.original.invoice}
                  className="flex items-center gap-2"
                >
                  <Eye />
                  Lihat detail
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText />
                Lihat PDF
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Pen />
                Ubah
              </DropdownMenuItem>
              <DropdownMenuItem>
                <XCircle />
                Batalkan
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
