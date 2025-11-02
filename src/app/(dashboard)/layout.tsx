import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-[280px] px-4 bg-neutral-30 overflow-y-auto">
          <Sidebar />
        </aside>

        <main className="flex-1 overflow-y-auto bg-neutral-20">{children}</main>
      </div>
    </div>
  );
}
