"use client";

import DialogAcceptInvoice from "@/components/dialog/DialogAcceptInvoice";
import DialogSendEmail from "@/components/dialog/DialogSendEmail";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { mapStatusToVariant } from "@/data/invoice";
import { formatDateWithTimeID } from "@/lib/formatDate";
import { formatIDR } from "@/lib/formatIDR";
import { TypeInvoice } from "@/types/invoice";
import { ColumnDef } from "@tanstack/react-table";
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
      const status = row.getValue(
        "statusInvoice"
      ) as TypeInvoice["statusInvoice"];
      return <Badge variant={mapStatusToVariant(status)}>{status}</Badge>;
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
              <DialogAcceptInvoice />
              <DialogSendEmail />
              <DropdownMenuItem>
                <Pen />
                Ubah
              </DropdownMenuItem>
              <DropdownMenuItem>
                <XCircle fill="black" color="white" />
                Batalkan
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
