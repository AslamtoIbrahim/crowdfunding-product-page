import { MouseEventHandler } from "react";
import bookmark from "../../../../images/icon-bookmark.svg";
import greenBookmark from "../../../../images/icon-green-bookmark.svg";
import Image from "next/image";

type props = {
  text?: string;
  isClicked?: boolean;
  handleClick?: MouseEventHandler;
};

function BookButton({ text, isClicked, handleClick }: props) {
  return (
    <div>
      <div
        onClick={handleClick}
        className={`bg-gray-200 opacity-90 rounded-full flex items-center cursor-pointer hover:opacity-80`}
      >
        <Image src={isClicked ?greenBookmark : bookmark } alt="book mark icon" />
        <p
          className={`hidden md:block pl-[0.7625rem] pr-[1.4375rem] font-bold font-commissioner ${
            isClicked && `text-dark-cyan`
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default BookButton;
