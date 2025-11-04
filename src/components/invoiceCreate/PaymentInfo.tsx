"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getDataRekening } from "@/data/rekening";
import { TypeRekening } from "@/types/rekening";
import { Pen, PlusCircle, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

const PaymentInfo = () => {
  const [data, setData] = useState<TypeRekening[]>([]);
  const [searchRekening, setSearchRekening] = useState("");
  const [selectedRekening, setSelectedRekening] = useState<TypeRekening | null>(
    null
  );

  useEffect(() => {
    async function fetchData() {
      const rekeningData = await getDataRekening();
      setData(rekeningData);
    }
    fetchData();
  }, []);

  const filteredRekening = data.filter((rekening) =>
    rekening.bank.toLowerCase().includes(searchRekening.toLowerCase())
  );

  const showDropdownRekening = searchRekening.trim().length > 0;

  const handleSelect = (rekening: TypeRekening) => {
    setSelectedRekening(rekening);
    setSearchRekening("");
  };

  const handleDelete = () => {
    setSelectedRekening(null);
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
        {selectedRekening ? (
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="body-small-reguler text-neutral-100">
                {selectedRekening.bank} - {selectedRekening.nomorRekening}
              </p>
              <div className="flex items-center gap-4">
                <Pen
                  size={20}
                  className="cursor-pointer"
                  onClick={() => setSelectedRekening(null)}
                />
                <Trash2
                  size={20}
                  className="cursor-pointer"
                  onClick={handleDelete}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 caption-large-reguler text-neutral-80">
              <p>a.n. {selectedRekening.atasNama}</p>
              <p>Cabang {selectedRekening.cabang}</p>
              <p>Cq {selectedRekening.cq}</p>
            </div>
          </div>
        ) : (
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Cari jenis bank, nomor rekening"
              value={searchRekening}
              onChange={(e) => setSearchRekening(e.target.value)}
              className="w-full"
            />
            {showDropdownRekening && (
              <Card className="absolute top-full left-0 right-0 mt-1 z-10 py-0 overflow-hidden">
                {filteredRekening.length > 0 ? (
                  <ul className="max-h-60 overflow-y-auto">
                    {filteredRekening.map((bank) => (
                      <li
                        key={bank.nomorRekening}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                        onClick={() => handleSelect(bank)}
                      >
                        {bank.bank}
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
        )}
      </div>
      <div className="flex flex-col gap-3">
        <p className="body-large-bold">Catatan</p>
        <Textarea placeholder="Cth: Pengiriman Bulan Oktober 2025"></Textarea>
      </div>
    </Card>
  );
};

export default PaymentInfo;
