// "use client";

// import Link from "next/link";

// export default function Navbar() {
//   const navItems = [
//     "Home",
//     "How It Works",
//     "Benefits",
//     "For Investors",
//     "About",
//     "FAQ",
//   ];

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-[#00040d] backdrop-blur-md border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="text-2xl font-bold tracking-tight text-white">
//           Circool
//         </div>

//         {/* Nav Links */}
//         <nav className="hidden md:flex items-center gap-8">
//           {navItems.map((item) => (
//             <Link
//               key={item}
//               href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
//               className="text-white hover:text-blue-300 transition font-medium"
//             >
//               {item}
//             </Link>
//           ))}
//         </nav>

//         {/* Button */}
//         <a
//           href="#join-waiting-list"
//           className="bg-[#052ff8] text-white px-5 py-2.5 rounded-md hover:bg-white hover:text-[#052ff8] transition font-medium"
//         >
//           Join Waiting List →
//         </a>
//       </div>
//     </header>
//   );
// }
"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#00040d]/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Circool Logo"
            width={160}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`group relative text-sm font-medium transition-all duration-300 pb-1
                  ${
                    isActive
                      ? "text-white"
                      : "text-white hover:text-white"
                  }
                `}
              >
                {item.name}

                {/* Underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#052ff8] transition-all duration-300
                    ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          
          {/* View Prototype Button */}
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden md:flex
              items-center
              gap-2
              border
              border-[#504915]
              text-[#debc77]
              px-5
              py-2.5
              rounded-md
              font-medium
              transition-all
              duration-300
              hover:bg-[#debc77]
              hover:text-black
            "
          >
            <span>View Prototype</span>

            <ExternalLink size={18} />
          </a>

          {/* Join Waiting List Button */}
          <a
            href="#join-waiting-list"
            className="
              hidden md:flex
              items-center
              gap-2
              bg-[#052ff8]
              text-white
              px-5
              py-2.5
              rounded-md
              font-medium
              transition-all
              duration-300
              hover:bg-white
              hover:text-[#052ff8]
            "
          >
           <span>Join Waiting List</span>
            <ArrowRight size={18}/>
          </a>
        </div>
      </div>
    </header>
  );
}