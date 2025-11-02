"use client";

import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface IPageHeader2 {
  title: string;
  children?: React.ReactNode;
}

const PageHeader2 = ({ title, children }: IPageHeader2) => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between bg-neutral-10 p-4">
      <div onClick={() => router.back()} className="flex items-center gap-2">
        <Button variant={"outline"}>
          <ArrowLeft />
        </Button>
        <p className="heading-6">{title}</p>
      </div>
      <div className="flex items-center gap-4">{children}</div>
    </div>
  );
};

export default PageHeader2;
