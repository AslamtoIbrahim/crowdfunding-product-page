"use client";
import { useState } from "react";
import BackProject from "./BackProject";
import BackStatics from "./BackStatics";
import DialogBack from "./Dialog/DialogBack";
import Project from "./Project/Project";

function Main() {
  const [showDialog, setshowDialog] = useState(false);
  const handleClick = () => {
    setshowDialog(!showDialog);
  };

  return (
    <main className="w-full h-full bg-background flex flex-col gap-4 items-center justify-center mt-[15.125rem] md:mt-[19.3125rem]">
      <BackProject clickButton={handleClick} />
      <BackStatics />
      <Project />
      {showDialog && (
        <DialogBack
          closeClick={() => {
            setshowDialog(false);
          }}
        />
      )}
    </main>
  );
}

export default Main;
