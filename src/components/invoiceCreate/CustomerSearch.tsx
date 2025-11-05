"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlusCircle, Pen, Trash2 } from "lucide-react";
import { TypeCustomer } from "@/types/customer";
import { getDataCustomer } from "@/data/customer";
import { useCustomerDialogStore } from "@/stores/customerDialogStore";

export default function CustomerSearch() {
  const [data, setData] = useState<TypeCustomer[]>([]);
  const [searchCustomer, setSearchCustomer] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState<TypeCustomer | null>(
    null
  );
  const { openCustomerDialog } = useCustomerDialogStore();

  useEffect(() => {
    async function fetchData() {
      const customerData = await getDataCustomer();
      setData(customerData);
    }
    fetchData();
  }, []);

  const filteredCustomers = data.filter((customer) =>
    customer.name.toLowerCase().includes(searchCustomer.toLowerCase())
  );

  const showDropdownCustomer = searchCustomer.trim().length > 0;

  const handleSelect = (customer: TypeCustomer) => {
    setSelectedCustomer(customer);
    setSearchCustomer("");
  };

  const handleDelete = () => {
    setSelectedCustomer(null);
  };

  return (
    <Card className="m-6 px-5 py-4 flex flex-col gap-4">
      <p className="body-large-bold">Customer</p>

      {selectedCustomer ? (
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="body-small-reguler text-neutral-100">
              {selectedCustomer.name}
            </p>
            <div className="flex items-center gap-2 caption-large-reguler text-neutral-80">
              <p>(62) {selectedCustomer.noTlp}</p>
              <p>•</p>
              <p>{selectedCustomer.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Pen
              size={20}
              className="cursor-pointer hover:text-primary transition-colors"
              onClick={() => setSelectedCustomer(null)}
            />
            <Trash2
              size={20}
              className="cursor-pointer hover:text-red-500 transition-colors"
              onClick={handleDelete}
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Cari customer existing"
              value={searchCustomer}
              onChange={(e) => setSearchCustomer(e.target.value)}
              className="w-full"
            />

            {showDropdownCustomer && (
              <Card className="absolute top-full left-0 right-0 mt-1 z-10 py-0 overflow-hidden">
                {filteredCustomers.length > 0 ? (
                  <ul className="max-h-60 overflow-y-auto">
                    {filteredCustomers.map((customer, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                        onClick={() => handleSelect(customer)}
                      >
                        {customer.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="flex flex-col">
                    <div className="h-44 flex items-center justify-center body-small-medium">
                      Belum ada customer
                    </div>

                    <Button
                      onClick={openCustomerDialog}
                      variant="ghost"
                      className="text-primary whitespace-nowrap my-2 border-t"
                    >
                      <PlusCircle fill="black" color="white" />
                      Tambah customer baru
                    </Button>
                  </div>
                )}
              </Card>
            )}
          </div>

          <Button
            onClick={openCustomerDialog}
            variant="ghost"
            className="text-primary whitespace-nowrap"
          >
            <PlusCircle fill="black" color="white" />
            Tambah customer baru
          </Button>
        </div>
      )}
    </Card>
  );
}
