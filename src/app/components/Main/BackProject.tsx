"use client";
import Image from "next/image";
import logoMastercraft from "../../../../images/logo-mastercraft.svg";
import Button from "./Button";
import BookButton from "./BookButton";
import { useState } from "react";

type props = {
  clickButton?: React.MouseEventHandler;
};

function BackProject({ clickButton }: props) {
  const [isclicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isclicked);
  };
  return (
    <div className="relative w-card
                    px-4 md:px-6 lg:px-10 py-10 md:py-12 lg:py-14
                   bg-white shadow-md rounded-md  flex flex-col justify-center items-center ">
      <Image
        className="absolute -top-6 w-12 md:w-14 lg:w-16 lg:-top-7"
        src={logoMastercraft}
        alt="logo mastercraft"
      />
      <h1 className="col-span-2 text-sm sm:text-xl md:text-xl font-extrabold font-commissioner text-center
       mb-5 ">
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p className="col-span-2 text-sm sm:text-base
       text-stone-500 font-commissioner text-center">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="flex justify-between items-center w-full mt-[1.8125rem] md:mt-[2.625rem] ">
        <Button text="Back this project" onClick={clickButton} />
        <BookButton
          text={isclicked ? "Bookmarked" : "Bookmark"}
          handleClick={handleClick}
          isClicked={isclicked}
        />
      </div>
    </div>
  );
}

export default BackProject;
