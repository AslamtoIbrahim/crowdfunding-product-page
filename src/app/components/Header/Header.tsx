"use client";
import Image from "next/image";
import logo from "../../../../images/logo.svg";
import MenuButton from "./MenuButton";
import "./Header.css";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import CloseButton from "./CloseButton";
function Header() {
  const [active, setActive] = useState(false);
  const onlcik = () => {
    setActive(!active);
  };
  return (
    <header className="absolute top-0 bg-hero-mobile md:bg-hero-desktop bg-no-repeat bg-center bg-cover w-full  h-[25rem] px-[2.1875rem] py-[1.5rem] md:px-8 md:py-5 lg:py-[3.25rem] lg:px-[10.4375rem]">
      <section className="flex items-center justify-between">
        <div className="flex w-full md:w-auto items-center justify-between">
          <Image src={logo} alt="logo image" width={129} height={21} />
          {active ? (
            <CloseButton handleClick={onlcik} />
          ) : (
            <MenuButton handleClick={onlcik} />
          )}
        </div>
        <nav>
          <ul className="hidden md:flex items-center justify-around gap-[2.125rem] ">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Discover</a>
            </li>
            <li>
              <a href="#">Get Started</a>
            </li>
          </ul>
        </nav>
      </section>
      {active && <MobileMenu />}
    </header>
  );
}

export default Header;
