import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaRegAddressCard,
  FaFolderOpen,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";

export default function NavbarApp() {
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaRegAddressCard /> },
    { id: "projects", label: "Projects", icon: <FaFolderOpen /> },
    { id: "services", label: "Services", icon: <FaCode /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 `}
    >
      <div
        className="
          flex bg-white/90 shadow-md rounded-full 
          px-2 sm:px-4 py-1 sm:py-2 space-x-1 sm:space-x-3 
          items-center mt-2
        "
        style={{ maxWidth: "95%", overflowX: "auto" }}
      >
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={`flex items-center gap-1 sm:gap-2 
              px-2 sm:px-3 py-1 sm:py-2 rounded-full font-medium 
              transition-all duration-300 
              text-[10px] sm:text-sm 
              ${
                active === link.id
                  ? "bg-black text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            <span className="text-[12px] sm:text-base">{link.icon}</span>
            <span className="hidden xs:inline sm:inline">{link.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
