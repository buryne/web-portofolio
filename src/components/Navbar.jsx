import { useState } from "react";

export default function Navbar() {
  const menuList = [
    {
      label: "Home",
      href: "#",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col items-center justify-between py-10 md:flex-row md:py-10 lg:py-5">
      <div className="flex w-full items-center justify-between md:w-auto">
        <h1 className="text-2xl font-bold">Web Profile</h1>
        <img
          src={
            isOpen
              ? "https://img.icons8.com/ios-filled/100/delete-sign--v2.png"
              : "https://img.icons8.com/ios-filled/100/menu--v1.png"
          }
          alt="Menu"
          className="block h-8 w-8 cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } flex-col items-center space-y-4 md:flex md:flex-row md:items-baseline md:space-x-8 md:space-y-0`}
      >
        {menuList.map((menu, i) => (
          <li key={i}>
            <a
              href={menu.href}
              className="relative inline-block transition-all after:absolute after:bottom-0 after:left-0 after:w-0 after:transition-all after:content-[''] hover:after:h-[2px] hover:after:w-full hover:after:bg-black"
            >
              {menu.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
