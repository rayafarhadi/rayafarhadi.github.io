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
    <nav>
      <ul>
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
