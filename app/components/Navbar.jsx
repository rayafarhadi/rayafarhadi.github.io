import React from "react";
import NavItem from "./NavItem";

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
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <ul className="flex p-4 flex-row space-x-8">
        {navItems.map((link, index) => (
          <li key={index}>
            <NavItem href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
