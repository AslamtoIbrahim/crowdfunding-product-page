'use client';
import Image from "next/image";
import logoMastercraft from "../../../../images/logo-mastercraft.svg";
import Button from "./Button";
import BookButton from "./BookButton";
import { useState } from "react";

function BackProject() {
  const [isclicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isclicked);
  };
  return (
    <div className="relative w-[min(100%-4rem,60rem)] px-[2.9375rem]  bg-white shadow-md pt-[3.5rem] pb-[2.4375rem]  md:pt-[3.875rem] md:pb-[2.875rem] rounded-md  flex flex-col justify-center items-center ">
      <Image
        className="absolute -top-7"
        src={logoMastercraft}
        alt="logo mastercraft"
      />
      <h1 className="col-span-2 text-xl font-extrabold font-commissioner text-center mb-[1.625rem]">
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p className="col-span-2 text-base text-stone-500 font-commissioner text-center">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="flex justify-between items-center w-full mt-[1.8125rem] md:mt-[2.625rem] ">
        <Button text="Back this project" />
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
