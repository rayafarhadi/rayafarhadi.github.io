import React from "react";
import NavItem from "./NavItem";
import Link from "next/link";

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
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-background-primary bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"} className="text-5xl text-white font-extrabold">
          RF
        </Link>
        <div className="block w-auto">
          <ul className="flex p-4 flex-row space-x-8">
            {navItems.map((link, index) => (
              <li key={index}>
                <NavItem href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
