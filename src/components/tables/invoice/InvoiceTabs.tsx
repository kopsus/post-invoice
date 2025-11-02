"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const tabs = [
  { key: "all", label: "Semua transaksi" },
  { key: "draft", label: "Draft" },
  { key: "pending", label: "Pending Approval" },
  { key: "revision", label: "Need Revision" },
  { key: "open", label: "Open" },
  { key: "sent", label: "Sent to Customer" },
];

interface InvoiceTabsProps {
  onTabChange?: (key: string) => void;
  activeTabKey?: string;
}

export default function InvoiceTabs({
  onTabChange,
  activeTabKey = "all",
}: InvoiceTabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(activeTabKey);

  // Sinkronisasi jika activeTabKey dari parent berubah
  useEffect(() => {
    setActiveTab(activeTabKey);
  }, [activeTabKey]);

  function handleTabClick(key: string) {
    setActiveTab(key);
    if (onTabChange) onTabChange(key);
  }

  const scrollByOffset = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex items-center px-4 border-b border-gray-200 h-16">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-none scroll-smooth"
        style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
      >
        {tabs.map(({ key, label }) => (
          <Button
            key={key}
            variant={"ghost"}
            onClick={() => handleTabClick(key)}
            className={`body-small-medium whitespace-nowrap border-b-2 rounded-none
              ${
                activeTab === key
                  ? "border-primary-pressed text-primary-pressed font-semibold"
                  : "border-transparent text-primary-pressed/80 hover:text-primary-pressed"
              }
              focus:outline-none`}
            aria-current={activeTab === key ? "page" : undefined}
            style={{ scrollSnapAlign: "start" }}
          >
            {label}
          </Button>
        ))}
      </div>

      <div className="flex items-center border-r-2">
        <Button
          onClick={() => scrollByOffset(-150)}
          aria-label="Previous Tabs"
          variant={"ghost"}
          size={"sm"}
        >
          <ArrowLeft size={20} />
        </Button>
        <Button
          onClick={() => scrollByOffset(150)}
          aria-label="Next Tabs"
          variant={"ghost"}
          size={"sm"}
        >
          <ArrowRight size={20} />
        </Button>
      </div>

      <Select>
        <SelectTrigger className="bg-transparent border-0 shadow-none hover:bg-transparent">
          <MapPin fill="black" color="white" size={20} />
          <SelectValue placeholder="KCU Bandung" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="KCU Jakarta">KCU Jakarta</SelectItem>
            <SelectItem value="KCU Bali">KCU Bali</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
