"use client";
import React, { useState } from "react";
import NavItem from "./NavItem";
import Link from "next/link";
import NavMenu from "./NavMenu";
import Image from "next/image";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navItems = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-background-primary bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"} className="text-5xl text-white font-extrabold">
          <Image
            src="/images/RF-Logo-Sans-Serif.png"
            alt="Logo"
            width={80}
            height={80}
          />
        </Link>

        <div className="hidden sm:block sm:w-auto">
          <ul className="flex p-4 flex-row space-x-8">
            {navItems.map((link, index) => (
              <li key={index}>
                <NavItem href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <div className="block sm:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
      {navbarOpen ? <NavMenu links={navItems} /> : null}
    </nav>
  );
};

export default Navbar;
