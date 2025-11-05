import {
  DialogRight,
  DialogRightClose,
  DialogRightContent,
  DialogRightFooter,
  DialogRightHeader,
  DialogRightTitle,
} from "@/components/ui/dialog-right";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { XIcon } from "lucide-react";
import { useCustomerDialogStore } from "@/stores/customerDialogStore";
import { Textarea } from "../ui/textarea";

const DialogRightCustomer = () => {
  const { isCustomerDialogOpen, closeCustomerDialog } =
    useCustomerDialogStore();

  return (
    <DialogRight open={isCustomerDialogOpen} onOpenChange={closeCustomerDialog}>
      <DialogRightContent className="max-w-lg">
        <DialogRightHeader className="flex-row items-center justify-between">
          <DialogRightTitle>Tambah Customer</DialogRightTitle>
          <DialogRightClose asChild>
            <Button variant={"outline"}>
              <XIcon />
            </Button>
          </DialogRightClose>
        </DialogRightHeader>

        <div className="mt-4 flex flex-col justify-between gap-10">
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label>Nama Customer / Perusahaan</Label>
              <Input placeholder="Cth: PT ABC" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>No Telepon</Label>
              <div className="flex items-center gap-2">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="+62" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="+63">+63</SelectItem>
                      <SelectItem value="+64">+64</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Input placeholder="8123456789" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Email</Label>
              <Input type="email" placeholder="company@mail.com" />
            </div>
            <p className="body-large-bold text-neutral-100">Alamat Penagihan</p>
            <div className="flex flex-col gap-2">
              <Label>Negara</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih Negara" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Indonesia">Indonesia</SelectItem>
                    <SelectItem value="Malaysia">Malaysia</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Alamat</Label>
              <Textarea placeholder="Alamat"></Textarea>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label>Provinsi</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih Provinsi" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Indonesia">Indonesia</SelectItem>
                      <SelectItem value="Malaysia">Malaysia</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Kota</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih Kota" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Indonesia">Indonesia</SelectItem>
                      <SelectItem value="Malaysia">Malaysia</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Kecamatan</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih Kecamatan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Indonesia">Indonesia</SelectItem>
                      <SelectItem value="Malaysia">Malaysia</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Kode Pos</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Masukan Kode Pos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Indonesia">Indonesia</SelectItem>
                      <SelectItem value="Malaysia">Malaysia</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogRightFooter>
            <Button onClick={closeCustomerDialog}>Simpan</Button>
            <Button variant="outline" onClick={closeCustomerDialog}>
              Batal
            </Button>
          </DialogRightFooter>
        </div>
      </DialogRightContent>
    </DialogRight>
  );
};

export default DialogRightCustomer;
