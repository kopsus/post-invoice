import { Card } from "@/components/ui/card";
import { MinusCircle } from "lucide-react";

const SignatureStatusCard = () => (
  <Card className="p-5">
    <p className="body-large-bold">Tanda Tangan</p>
    <div className="flex flex-col gap-1 body-small-reguler text-neutral-80">
      <div className="flex items-center justify-between ">
        <p>Pemilik rekening</p>
        <MinusCircle size={20} className="fill-neutral-40 text-white" />
      </div>
      <div className="flex items-center justify-between">
        <p>EGM KCU Bandung</p>
        <MinusCircle size={20} className="fill-neutral-40 text-white" />
      </div>
      <div className="flex items-center justify-between">
        <p>Manager Financial Business Partner</p>
        <MinusCircle size={20} className="fill-neutral-40 text-white" />
      </div>
    </div>
  </Card>
);

export default SignatureStatusCard;
