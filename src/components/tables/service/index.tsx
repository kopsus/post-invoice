import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatIDR } from "@/lib/formatIDR";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Pen, PlusCircle, Trash2 } from "lucide-react";
import { TypeServices } from "@/types/services";
import { useState } from "react";
import {
  DialogRight,
  DialogRightContent,
  DialogRightHeader,
  DialogRightTitle,
} from "@/components/ui/dialog-right";

interface ITableServices {
  handleDelete: (layanan: string) => void;
  data: TypeServices[];
}

const TableServices = ({ handleDelete, data }: ITableServices) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="pl-5">Deskripsi Layanan</TableHead>
            <TableHead>Harga</TableHead>
            <TableHead>Diskon</TableHead>
            <TableHead>Pajak</TableHead>
            <TableHead>Subtotal</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.length ? (
            data?.map((invoice) => (
              <TableRow key={invoice.layanan}>
                <TableCell className="pl-5">
                  <div className="flex flex-col">
                    <p>{invoice.layanan}</p>
                    <p className="caption-large-reguler text-neutral-80">
                      {invoice.kiriman}
                    </p>
                  </div>
                </TableCell>
                <TableCell>{formatIDR(invoice.harga)}</TableCell>
                <TableCell>{invoice.diskon + "%"}</TableCell>
                <TableCell>{invoice.pajak + "%"}</TableCell>
                <TableCell>{formatIDR(invoice.harga)}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-4">
                    <Pen size={20} className="cursor-pointer" />
                    <Trash2
                      onClick={() => handleDelete(invoice.layanan)}
                      size={20}
                      className="cursor-pointer"
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="h-[200px] w-full">
                <div className="flex flex-col items-center justify-center">
                  <div className="size-20 mx-auto">
                    <Image
                      src={"/assets/empty-data.png"}
                      alt="empty data"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <p className="body-small-medium">
                    Tambahkan layanan ke dalam list
                  </p>
                  <Button variant={"ghost"} onClick={() => setOpenDialog(true)}>
                    <PlusCircle fill="black" color="white" />
                    Tambah Layanan
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <DialogRight open={openDialog} onOpenChange={setOpenDialog}>
        <DialogRightContent className="max-w-lg">
          <DialogRightHeader>
            <DialogRightTitle>Tambah Layanan</DialogRightTitle>
          </DialogRightHeader>

          {/* 👉 Isi form tambah layanan di sini */}
          <div className="mt-4 space-y-3">
            <p>
              Form isi layanan di sini (misalnya input nama, harga, diskon,
              dst).
            </p>
          </div>
        </DialogRightContent>
      </DialogRight>
    </>
  );
};

export default TableServices;
