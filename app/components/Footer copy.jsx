import Link from "next/link";
import { FaLinkedin, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";
import { Mail, Globe } from "lucide-react";

export default function Footer() {
  const productLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Benefits", href: "#benefits" },
    { name: "For Investors", href: "#for-investors" },
    { name: "FAQ", href: "#faq" },
  ];

  const companyLinks = [
    { name: "About", href: "#about" },
    { name: "Privacy Policy", href: "#privacy-policy" },
    { name: "Terms of Use", href: "#terms-of-use" },
    { name: "Contact", href: "#contact" },
  ];

  const resourcesLinks = [
    { name: "Investor Deck", href: "#investor-deck" },
    { name: "Press Kit", href: "#press-kit" },
    { name: "Brand Assets", href: "#brand-assets" },
    { name: "Careers", href: "#careers" },
  ];

  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-[90rem] px-6 mx-auto w-full flex flex-col md:flex-row md:justify-between gap-8">
        {/* Logo & Social */}
        <div className="flex flex-col gap-4 md:w-1/4 min-w-[200px]">
          <div className="flex items-center gap-2">
            <img src="/LogoCircool.png" alt="CirCool Logo" className="w-auto h-10" />
            {/* <h2 className="text-2xl font-bold">CirCool</h2> */}
          </div>
          <p className="text-gray-400 text-sm">
            The first social scoring ecosystem.
          </p>
          {/* <div className="flex gap-4 mt-2 text-gray-400 text-xl">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaDiscord /></a>
          </div> */}
          <div className="flex gap-4 mt-2 text-xl">
  <a
    href="#"
    className="
      w-10
      h-10
      flex
      items-center
      justify-center
      rounded-full
      bg-[#09111f]
      border
      border-white/10
      text-white/60
      hover:text-white
      hover:border-[#0d46ff]
      hover:bg-[#0d46ff]/10
      transition-all
      duration-300
    "
  >
    <FaLinkedin />
  </a>

  <a
    href="#"
    className="
      w-10
      h-10
      flex
      items-center
      justify-center
      rounded-full
      bg-[#09111f]
      border
      border-white/10
      text-white/60
      hover:text-white
      hover:border-[#0d46ff]
      hover:bg-[#0d46ff]/10
      transition-all
      duration-300
    "
  >
    <FaTwitter />
  </a>

  <a
    href="#"
    className="
      w-10
      h-10
      flex
      items-center
      justify-center
      rounded-full
      bg-[#09111f]
      border
      border-white/10
      text-white/60
      hover:text-white
      hover:border-[#0d46ff]
      hover:bg-[#0d46ff]/10
      transition-all
      duration-300
    "
  >
    <FaInstagram />
  </a>

  <a
    href="#"
    className="
      w-10
      h-10
      flex
      items-center
      justify-center
      rounded-full
      bg-[#09111f]
      border
      border-white/10
      text-white/60
      hover:text-white
      hover:border-[#0d46ff]
      hover:bg-[#0d46ff]/10
      transition-all
      duration-300
    "
  >
    <FaDiscord />
  </a>
</div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 flex-1 min-w-[250px]">
          <div>
            <h4 className="text-blue-600 font-semibold mb-3">Product</h4>
            <ul className="space-y-2">
              {productLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-blue-600 font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-blue-600 font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              {resourcesLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
  <h4 className="text-blue-600 font-semibold mb-3">Contact</h4>

  <ul className="space-y-3 text-gray-300 text-sm">

    {/* Email */}
    <li className="flex items-center gap-2 hover:text-white transition">
      <Mail className="w-4 h-4 text-white/60" />
      <span>info@circool.net</span>
    </li>

    {/* Website */}
    <li className="flex items-center gap-2 hover:text-white transition">
      <Globe className="w-4 h-4 text-white/60" />
      <span>www.circool.com</span>
    </li>

  </ul>
</div>

          <div>
            <h4 className="text-blue-600 font-semibold mb-3">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-2">Join our community and get the latest updates.</p>
            <form className="flex flex-col sm:flex-row mt-2">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 rounded-l-lg bg-[#09111f] border border-white/10 text-white flex-1 min-w-0"
              />
              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-sm">
        © 2026 CirCool. All rights reserved.
      </div>
    </footer>
  );
}