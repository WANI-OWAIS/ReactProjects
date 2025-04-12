import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-72px p-6">
      <img src="/Images/logo.png" alt="logo" />

      <ul className="flex gap-3">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
};

export default Navbar;
