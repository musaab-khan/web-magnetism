"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { logo, menuGrid } from "../../public/assets/assets";

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLDivElement | null>(null);

  function handleScroll(): void {
    if (navRef.current) {
      if (window.scrollY > 0) {
        navRef.current.classList.add('bg-[rgb(0,0,0,0.1)]');
      } else {
        navRef.current.classList.remove("bg-[rgb(0,0,0,0.1)]");
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed z-10">
      <nav ref={navRef} className="flex h-[75px] w-[100vw] justify-between items-center px-4 md:px-[2.5rem] fixed top-0">
        <div className="relative lg:ml-[4.5rem] basis-4/12 lg:basis-[20%]">
          <Image src={logo} alt="Logo" />
        </div>
        <div
          onClick={() => console.log("hello")}
          className="relative h-[60%] basis-[8%] lg:basis-[5%]"
        >
          <Image src={menuGrid} alt="Menu Grid" fill />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
