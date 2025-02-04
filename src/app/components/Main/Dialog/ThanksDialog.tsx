import React, { useState } from "react";
import checked from "../../../../../images/icon-check.svg";
import Image from "next/image";
import Button from "../Button";

type props = {
  closeClick?: () => void;
};

function ThanksDialog({ closeClick }: props) {
  const [closed, setclosed] = useState(false);
  const handleClose = () => {
    if (closeClick) {
      closeClick();
    }
    setclosed(!closed);
  };
  return (
    <div className={` ${closed && `hidden`}`}>
      <div onClick={handleClose} className="fixed inset-0 bg-black/55"></div>
      <div
        className=" bg-white w-[min(100%-4rem,34.125rem)] 
                    fixed top-[8.875rem] md:top-[50%] md:-translate-y-1/2 left-1/2 -translate-x-1/2 px-[2.9375rem] shadow-md pt-[3.5rem] pb-[2.4375rem] md:pt-[3.875rem] md:pb-[2.875rem] rounded-md
                    flex items-center text-center flex-col gap-[2.25rem] "
      >
        <Image src={checked} alt="cheked image for thanks dialog" />
        <h1 className="text-xl md:text-2xl font-extrabold">
          Thanks for your support!
        </h1>
        <p className="text-dark-gray">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <Button text="Got it!" onClick={handleClose} />
      </div>
    </div>
  );
}

export default ThanksDialog;
