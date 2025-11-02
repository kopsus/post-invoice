import { Button } from "@/components/ui/button";
import InputLabel from "@/components/ui/inputLabel";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-2 items-center justify-center">
      <div className="bg-neutral-10 w-full h-full">
        <div className="w-2/3 h-full mx-auto flex flex-col gap-6 justify-center">
          <div className="flex items-center gap-3 divide-x-2">
            <div className="w-[87px] h-auto pr-3">
              <Image
                src={"/logo-blue.png"}
                alt="logo"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <p className="heading-5">PosInvoice</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="heading-5">
              Kelola dan tandatangani invoice korporat secara digital.
            </p>
            <p className="body-small-reguler">
              Masuk dengan NIPPOS Anda untuk melanjutkan.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <InputLabel label="NIPPOS" placeholder="Masukan NIPPOS Anda" />
            <InputLabel
              label="Kata Sandi"
              placeholder="Masukan kata sandi Anda"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="body-small-medium">Lupa Kata Sandi</p>
            <Button>Masuk</Button>
          </div>
        </div>
      </div>
      <div className="relative bg-[url(/assets/bg-login.png)] w-full h-full bg-cover bg-no-repeat">
        <div
          className="absolute top-0 left-0 w-full h-full 
                  bg-linear-to-r 
                  from-[#131347] from-20% 
                  to-transparent to-100%"
        ></div>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[url(/assets/vector-login.png)] bg-cover bg-no-repeat"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[url(/assets/vector-login.png)] bg-cover bg-no-repeat"></div>
      </div>
    </div>
  );
};

export default page;
