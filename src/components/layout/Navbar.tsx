import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../../../public/logo.png";
import Image from "next/image";
  
const Navbar = () => {
  return (
    <nav className="fixed w-full z-10 text-center font-medium text-sm">
      
      <div className="hidden sm:flex flex-row justify-between p-4 items-center bg-or">
      <Link className="" href="/home">
        <Image
          width={50}
          height={50}
          alt="Cave Logo"
          className="logo"
          src={Logo}
        />
      </Link>

      <ul className="flex space-x-12 ">
        <li>
          <Link className=" text-mainOrange hover:text-orange-400 duration-200" href="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="text-mainOrange duration-200 hover:text-orange-400" href="/events">
            Events
          </Link>
        </li>
        <li>
          <Link className="text-mainOrange duration-200 hover:text-orange-400" href="/about">
            About
          </Link>
        </li>
      </ul>
      </div>
    </nav>
    
  );
};

export default Navbar;
