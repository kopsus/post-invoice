import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { AtSign, FileText, XIcon } from "lucide-react";
import { useState } from "react";
import { DropdownMenuItem } from "../ui/dropdown-menu";

const DialogSendEmail = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <DropdownMenuItem
        onSelect={(e) => e.preventDefault()}
        onClick={() => setOpenDialog(true)}
        className="cursor-pointer"
      >
        <AtSign />
        Kirim ke email
      </DropdownMenuItem>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-lg flex flex-col gap-10">
          <DialogHeader className="flex-row items-center justify-between">
            <DialogTitle>Kirim invoice ke email?</DialogTitle>
            <DialogClose asChild>
              <Button variant={"outline"}>
                <XIcon />
              </Button>
            </DialogClose>
          </DialogHeader>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1 text-neutral-100">
                <p className="body-small-reguler">No. Invoice</p>
                <p className="body-large-bold">09289/KCUBD/102025</p>
              </div>
              <Button variant={"outline"}>
                <FileText /> Lihat PDF
              </Button>
            </div>
            <div className="flex flex-col gap-1 body-small-reguler">
              <div className="flex items-center justify-between">
                <p>Total Tagihan</p>
                <p>Rp 3.047.000</p>
              </div>
              <div className="flex items-center justify-between">
                <p>Jatuh Tempo</p>
                <p>17 Okt 2025</p>
              </div>
              <div className="flex items-center justify-between">
                <p>Penerima</p>
                <p>billing@bca.co.id</p>
              </div>
            </div>

            <div className="flex flex-col w-full gap-3">
              <Button>Kirim</Button>
              <Button onClick={() => setOpenDialog(false)} variant="outline">
                Batal
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogSendEmail;
