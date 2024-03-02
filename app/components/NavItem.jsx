import React from "react";
import Link from "next/link";

const NavItem = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-text-secondary text-xl rounded hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavItem;
