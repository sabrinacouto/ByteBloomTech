'use client'
import Image from "next/image";
import mascote1 from "../../../public/assets/mascote1.png";
import mascote2 from "../../../public/assets/mascote2.png";
import einstein from "../../../public/assets/einstein.png";
import { useImageContext } from "@/contexts/imageContext/_app";


const Mascotes = () => {
  const { showImages } = useImageContext();
  return (
    <section className="self-stretch flex flex-col items-center justify-center py-0 px-5 box-border max-w-full">
      <div className="w-full max-w-[984px] flex flex-col sm:flex-row items-center justify-between gap-[15px]">
        <div className="w-[200px] sm:w-[220px] h-[200px] flex items-center justify-center mb-8">
          <div className="rounded-full bg-[#72A9C6] shadow-[0px_15px_4px_#b2d5e8] w-full h-full flex items-center justify-center">
          {showImages &&<Image
              className="w-[104px] sm:w-[90px] lg:w-[90px] h-[160px] sm:h-[165px] lg:h-[165px]"
              alt=""
              src={mascote1}
            />}
          </div>
        </div>
        <div className="w-[200px] sm:w-[220px] h-[200px] flex items-center justify-center mt-3 sm:mt-0 mb-8">
          <div className=" rounded-full bg-[#72A9C6] shadow-[0px_15px_4px_#b2d5e8] w-full h-full flex items-center justify-center">
          {showImages &&<Image
              className="w-[104px] sm:w-[90px] lg:w-[90px] h-[160px] sm:h-[165px] lg:h-[165px]"
              alt=""
              src={mascote2}
            />}
          </div>
        </div>
        <div className="w-[200px] sm:w-[220px] h-[200px] flex items-center justify-center mt-3 sm:mt-0 mb-8">
          <div className="rounded-full bg-[#72A9C6] shadow-[0px_15px_4px_#b2d5e8] w-full h-full flex items-center justify-center">
          {showImages &&<Image
              className="w-[104px] sm:w-[90px] lg:w-[90px] h-[160px] sm:h-[165px] lg:h-[165px]"
              alt=""
              src={einstein}
            />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mascotes;