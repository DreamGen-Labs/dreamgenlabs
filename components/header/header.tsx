/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { nav_list } from "@/constants";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "../nav/mobile-nav";

export const Header = () => {
  const [mobileNav, setMobileNav] = useState<boolean>(false);

  return (
    <>
    <MobileNav open={mobileNav} setOpen={setMobileNav} />
      <div className="flex fixed w-full bg-white px-4 md:px-14 h-20 md:h-24 items-center justify-between">
        <div className="flex space-x-2 items-center">
          <img src="./logo_icon.png" alt="logo" width={40} height={40} />
          <div className="">
            <h1 className="text-xl font-bold ml-1.5 text-primary">
              DreamGen Labs
            </h1>
            <p className="text-xs font-bold">&lt;Dream Beyond Limits&gt;</p>
          </div>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center space-x-6">
            {nav_list.map((item) => (
              <Link href={item.href} key={item.name}>
                <li>{item.name}</li>
              </Link>
            ))}
            <Link href="/contact">
              <li className="p-3 bg-custom-gradient text-white rounded-lg">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={() => setMobileNav(!mobileNav)} className="p-2 border border-gray-300 rounded-md md:hidden">
          {mobileNav ? <X /> : <AlignJustify />}
        </div>
      </div>
    </>
  );
};
