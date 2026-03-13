import { useState, useEffect } from "react";
import Logo from "./images/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, name: "Services" },
    { id: 2, name: "About" },
    { id: 3, name: "Faq" },
    { id: 4, name: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* Header - o'rtacha z-index */}
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            : "bg-white shadow-[0_5px_20px_rgba(0,0,0,0.04)]"
        }`}
      >
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-[80px]">

          <a href="#">
            <img
              src={Logo}
              alt="logo"
              className="w-[200px] sm:w-[190px] lg:w-[220px]"
            />
          </a>

          <ul className="hidden lg:flex items-center gap-10 xl:gap-12 font-medium">
            {links.map((link) => (
              <li key={link.id} className="relative group">
                <a className="text-[16px] hover:text-blue-600 transition">
                  {link.name}
                </a>

                <span className="absolute left-0 -bottom-3 w-0 h-[4px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="hidden lg:block py-[10px] px-[55px] bg-[#3360FF] text-white rounded-full hover:bg-blue-700 transition shadow-md hover:shadow-lg"
          >
            Kirish
          </a>
          
          <button
            className="lg:hidden text-3xl p-2 relative z-[101]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Overlay - menu ochilganda chiqadi */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 z-[150] ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobil menu - eng yuqori z-index */}
      <div
        className={`fixed z-[200] top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl"
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col gap-7 p-6 text-lg font-medium">
          {links.map((link) => (
            <li key={link.id}>
              <a
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 transition cursor-pointer"
              >
                {link.name}
              </a>
            </li>
          ))}

          <a
            href="#"
            className="mt-6 py-[12px] text-center bg-[#3360FF] text-white rounded-full hover:bg-blue-700 transition shadow-md"
          >
            Kirish
          </a>
        </ul>
      </div>

      {/* Bo'sh joy - header balandligi */}
      <div className="h-[80px]"></div>
    </>
  );
};

export default Header;