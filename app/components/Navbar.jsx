"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "How It Works", id: "how-it-works" },
    { name: "Benefits", id: "benefits" },
    { name: "For Investors", id: "for-investors" },
    { name: "About", id: "about" },
    { name: "FAQ", id: "faq" },
  ];

  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#00040d]/90 backdrop-blur-xl ">
      <div className="max-w-[90 rem] mx-auto px-15 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/LogoCirCool.png"
            alt="Circool Logo"
            width={160}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="group relative text-sm font-medium transition-all duration-300 pb-1 text-white"
              >
                <span className={isActive ? "text-white" : "text-white hover:text-white/80"}>
                  {item.name}
                </span>

                {/* Underline (same effect preserved) */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#052ff8] transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">

          {/* View Prototype */}
          <a
            href="https://www.figma.com/proto/0CBZ8BgVuPedC30Whsvgiq/Mobile-app-Screen-design-CirCool?node-id=1-1230&t=85CvTP5zR6v7EWJU-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A1230"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 border border-[#504915] text-[#debc77] px-5 py-2.5 rounded-md font-medium transition-all duration-300 hover:bg-[#debc77] hover:text-black"
          >
            <span>View Prototype</span>
            <ExternalLink size={18} />
          </a>

          {/* Join Waiting List */}
          <a
            href="#join-waiting-list"
            className="hidden md:flex items-center gap-2 bg-[#052ff8] text-white px-5 py-2.5 rounded-md font-medium transition-all duration-300 hover:bg-white hover:text-[#052ff8]"
          >
            <span>Join Waiting List</span>
            <ArrowRight size={18} />
          </a>

          {/* Mobile Menu Button (no style change to your theme) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (same colors + glass feel preserved) */}
      {menuOpen && (
        <div className="md:hidden w-full bg-[#00040d]/95 backdrop-blur-xl border-t border-white/10 px-6 py-5 flex flex-col gap-4">

          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className="text-white text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}

          <div className="border-t border-white/10 pt-4 flex flex-col gap-3">

            <a
              href="https://www.figma.com/proto/0CBZ8BgVuPedC30Whsvgiq/Mobile-app-Screen-design-CirCool?node-id=1-1230&t=85CvTP5zR6v7EWJU-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A1230"
              onClick={() => setMenuOpen(false)}
              className="text-[#debc77] text-sm flex items-center gap-2"
            >
              View Prototype <ExternalLink size={16} />
            </a>

            <a
              href="#join-waiting-list"
              onClick={() => setMenuOpen(false)}
              className="text-[#052ff8] text-sm flex items-center gap-2"
            >
              Join Waiting List <ArrowRight size={16} />
            </a>

          </div>
        </div>
      )}
    </header>
  );
}