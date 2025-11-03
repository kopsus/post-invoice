import { FileText } from "lucide-react";

const RecentActivity = () => (
  <div className="mx-6 mt-6 mb-10 flex flex-col gap-4">
    <p className="body-large-bold text-neutral-100">Aktivitas Terbaru</p>
    <div className="flex gap-2">
      <FileText />
      <div>
        <p className="body-small-reguler text-neutral-100">
          Invoice 09289/KCUBD/102025 berhasil dibuat oleh Fadhil Ibrahim (Admin)
        </p>
        <p className="caption-large-reguler text-neutral-90">
          3 Okt 2025, 15.06
        </p>
      </div>
    </div>
  </div>
);

export default RecentActivity;
