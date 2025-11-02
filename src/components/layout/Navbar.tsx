import Image from "next/image";
import { Bell } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between bg-primary px-4 py-2">
      <div className="flex items-center gap-3 divide-x">
        <div className="w-[75px] h-auto pr-3">
          <Image
            src={"/logo-white.png"}
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <p className="heading-5 text-neutral-10">PosInvoice</p>
      </div>
      <div className="flex items-center gap-4 text-neutral-10">
        <Bell fill="white" />
        <div className="pl-5 pr-1.5 py-1.5 bg-white/15 flex items-center gap-3 rounded-full">
          <div className="flex flex-col text-end">
            <p className="body-small-semibold">Fadhil Ibrahim</p>
            <p className="caption-small-reguler">Admin</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-neutral-60 body-large-semibold flex items-center justify-center">
            FI
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
