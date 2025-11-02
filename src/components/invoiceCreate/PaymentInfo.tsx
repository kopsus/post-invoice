"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

interface Bank {
  id: number;
  name: string;
}

interface PaymentInfoProps {
  banks: Bank[];
}

const PaymentInfo = ({ banks }: PaymentInfoProps) => {
  const [searchBank, setSearchBank] = useState("");

  const filteredBank = banks.filter((c) =>
    c.name.toLowerCase().includes(searchBank.toLowerCase())
  );

  const showDropdownBank = searchBank.trim().length > 0;

  const handleSelect = (name: string) => {
    setSearchBank(name);
  };

  return (
    <Card className="p-5 flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <p className="body-large-bold">Bank</p>
          <Button variant="ghost" className="text-primary">
            <PlusCircle fill="black" color="white" />
            Tambah rekening baru
          </Button>
        </div>
        <div className="relative w-full">
          <Input
            type="text"
            placeholder="Cari jenis bank, nomor rekening"
            value={searchBank}
            onChange={(e) => setSearchBank(e.target.value)}
            className="w-full"
          />
          {showDropdownBank && (
            <Card className="absolute top-full left-0 right-0 mt-1 z-10 py-0 overflow-hidden">
              {filteredBank.length > 0 ? (
                <ul className="max-h-60 overflow-y-auto">
                  {filteredBank.map((bank) => (
                    <li
                      key={bank.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      onClick={() => handleSelect(bank.name)}
                    >
                      {bank.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="flex flex-col">
                  <div className="h-[136px] flex items-center justify-center body-small-medium">
                    Belum ada rekening terdaftar
                  </div>

                  <Button
                    variant="ghost"
                    className="text-primary whitespace-nowrap my-2 border-t"
                  >
                    <PlusCircle />
                    Tambah rekening baru
                  </Button>
                </div>
              )}
            </Card>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="body-large-bold">Catatan</p>
        <Textarea placeholder="Cth: Pengiriman Bulan Oktober 2025"></Textarea>
      </div>
    </Card>
  );
};

export default PaymentInfo;
