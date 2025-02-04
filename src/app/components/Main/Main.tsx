"use client";
import { useState } from "react";
import BackProject from "./BackProject";
import BackStatics from "./BackStatics";
import DialogBack from "./Dialog/DialogBack";
import Project from "./Project/Project";
import ThanksDialog from "./Dialog/ThanksDialog";

function Main() {
  const [showDialog, setshowDialog] = useState(false);
  const [showDialogThanks, setshowDialogThanks] = useState(false);
  const handleClickThanks = () => {
    setshowDialogThanks(!showDialogThanks);
  };
  const handleClick = () => {
    setshowDialog(!showDialog);
  };

  const handleContinue = () => {
    setshowDialog(false);
    setshowDialogThanks(true);
  }

  return (
    <main className="w-full h-full bg-background flex flex-col gap-4 items-center justify-center mt-[15.125rem] md:mt-[19.3125rem]">
      <BackProject clickButton={handleClick} />
      <BackStatics />
      <Project onClick={handleClickThanks} />
      {showDialog && (
        <DialogBack
          closeClick={() => {
            setshowDialog(false);
          }}
          onClickContinue={handleContinue}
        />
      )}
      {showDialogThanks && (
        <ThanksDialog
          closeClick={() => {
            setshowDialogThanks(false);
          }}
        />
      )}
    </main>
  );
}

export default Main;
