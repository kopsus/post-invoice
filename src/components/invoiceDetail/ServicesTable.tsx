import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatIDR } from "@/lib/formatIDR";

const ServicesTable = () => (
  <Card className="mx-6">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="pl-5">Deskripsi Layanan</TableHead>
          <TableHead>Harga</TableHead>
          <TableHead>Diskon</TableHead>
          <TableHead>Pajak</TableHead>
          <TableHead>Subtotal</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="pl-5">
            <div className="flex flex-col">
              <p>Pengiriman Bulanan</p>
              <p className="caption-large-reguler text-neutral-80">
                Dokumen/Barang
              </p>
            </div>
          </TableCell>
          <TableCell>{formatIDR(3047000)}</TableCell>
          <TableCell>0</TableCell>
          <TableCell>0</TableCell>
          <TableCell>{formatIDR(3047000)}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Card>
);

export default ServicesTable;
