"use client";

import { FileText, Building, User, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type MenuItem = {
  label: string;
  icon: React.ElementType;
  href?: string;
};

const mainMenu: MenuItem[] = [
  { label: "Invoice", icon: FileText, href: "/invoice" },
  { label: "Customer", icon: Building, href: "/customer" },
  { label: "User", icon: User, href: "/user" },
];

const secondaryMenu: MenuItem[] = [
  { label: "Settings", icon: Settings, href: "/settings" },
  { label: "Keluar", icon: LogOut, href: "/logout" },
];

const Sidebar = () => {
  const pathname = usePathname();

  const renderMenu = (menu: MenuItem[]) =>
    menu.map(({ label, icon: Icon, href }) => {
      const isActive = href && pathname.startsWith(href);
      const isLogout = label.toLowerCase() === "keluar";

      const content = (
        <div
          className={clsx(
            "flex items-center gap-3 px-3 h-11 rounded-lg transition-colors",
            isActive
              ? "bg-neutral-10 text-primary font-medium"
              : "hover:bg-neutral-20"
          )}
        >
          <Icon className={clsx(isLogout && "rotate-180")} />
          <p className="body-large-medium">{label}</p>
        </div>
      );

      return href ? (
        <Link key={label} href={href}>
          {content}
        </Link>
      ) : (
        <div key={label}>{content}</div>
      );
    });

  return (
    <div className="my-5 flex flex-col gap-6">
      <div className="flex flex-col gap-2">{renderMenu(mainMenu)}</div>
      <div className="flex flex-col gap-2">{renderMenu(secondaryMenu)}</div>
    </div>
  );
};

export default Sidebar;
