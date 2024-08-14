import Link from "next/link";
import React from "react";

const navLinks = [
  { href: "single-player", label: "Single Player" },
  { href: "multiplayer", label: "Multiplayer" },
  { href: "rules", label: "Rules" },
  { href: "leaderboard", label: "Leaderboard" },
];

const Navbar = () => {
  return (
    <nav>
      {navLinks.map((link, index) => (
        <Link key={index} href={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
