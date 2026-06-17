"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

import { Mail, Globe } from "lucide-react";

export default function Footer() {
  const productLinks = [
  { name: "How It Works", id: "how-it-works" },
  { name: "Benefits", id: "benefits" },
  { name: "For Investors", id: "for-investors" },
  { name: "FAQ", id: "faq" },
];

  const companyLinks = [
  { name: "About", id: "about" },
  { name: "Privacy Policy", id: "privacy-policy" },
  { name: "Terms of Use", id: "terms-of-use" },
  { name: "Contact", id: "contact" },
];

  const resourcesLinks = [
    { name: "Investor Deck", href: "#investor-deck" },
    { name: "Press Kit", href: "#press-kit" },
    { name: "Brand Assets", href: "#brand-assets" },
    { name: "Careers", href: "#careers" },
  ];

  // NEWSLETTER STATE
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);

  // SUBMIT HANDLER
  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!subscriberEmail) return;

    setSubscribing(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: subscriberEmail,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Successfully subscribed!");

        setSubscriberEmail("");
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);

      alert("Failed to subscribe");
    }

    setSubscribing(false);
  };
  const getFooterHref = (id) => {
  return `/#${id}`;
};

  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-[90rem] px-6 mx-auto w-full flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-0">
        
        {/* LOGO & SOCIAL */}
        <div className="flex flex-col gap-4 lg:w-[20%] min-w-[200px]">
          
          <Link href="/" className="flex items-center gap-2">
  <img
    src="/LogoCirCool.png"
    alt="CirCool Logo"
    className="w-auto h-10"
  />
</Link>

          <p className="text-gray-400 text-sm">
            The First Social Scoring Network.
          </p>

          {/* SOCIAL ICONS */}
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
                hover:border-[#0056ff]
                hover:bg-[#0056ff]/10
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
                hover:border-[#0056ff]
                hover:bg-[#0056ff]/10
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
                hover:border-[#0056ff]
                hover:bg-[#0056ff]/10
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
                hover:border-[#0056ff]
                hover:bg-[#0056ff]/10
                transition-all
                duration-300
              "
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* FOOTER LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 flex-1 min-w-[250px]">
          
          {/* PRODUCT */}
          <div>
            <h4 className="text-blue-600 font-semibold mb-3">
              Product
            </h4>

            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={getFooterHref(link.id)}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-blue-600 font-semibold mb-3">
              Company
            </h4>

            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={getFooterHref(link.id)}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="text-blue-600 font-semibold mb-3">
              Resources
            </h4>

            <ul className="space-y-2">
              {resourcesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-blue-600 font-semibold mb-3">
              Contact
            </h4>

            <ul className="space-y-3 text-gray-300 text-sm">
              
              <li className="flex items-center gap-2 hover:text-white transition">
                <Mail className="w-4 h-4 text-white/60" />
                <span>info@circool.net</span>
              </li>

              <li className="flex items-center gap-2 hover:text-white transition">
                <Globe className="w-4 h-4 text-white/60" />
                {/* <span>www.circool.net</span> */}
                <a
  href="https://www.circool.net"
  target="_blank"
  rel="noopener noreferrer"
>
  www.circool.net
</a>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-blue-600 font-semibold mb-3">
              Stay Updated
            </h4>

            <p className="text-gray-400 text-sm mb-3 leading-relaxed">
              Subscribe to our newsletter and receive product updates,
              launch announcements, and exclusive early access news.
            </p>

            {/* <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-3 mt-2"
            >
              <input
                type="email"
                placeholder="Your email"
                required
                value={subscriberEmail}
                onChange={(e) =>
                  setSubscriberEmail(e.target.value)
                }
                className="
                  p-3
                  rounded-xl
                  bg-[#09111f]
                  border
                  border-white/10
                  text-white
                  outline-none
                  focus:border-[#0056ff]
                  transition-all
                "
              />

              <button
                type="submit"
                disabled={subscribing}
                className="
                  bg-blue-600
                  px-4
                  py-3
                  rounded-xl
                  hover:bg-blue-700
                  transition
                  font-medium
                  disabled:opacity-50
                "
              >
                {subscribing
                  ? "Subscribing..."
                  : "Subscribe"}
              </button>
            </form> */}

            <form
  onSubmit={handleSubscribe}
  // className="flex flex-col sm:flex-row mt-2"
  className="flex flex-row mt-2 w-full"
>
  <input
    type="email"
    placeholder="Your email"
    required
    value={subscriberEmail}
    onChange={(e) =>
      setSubscriberEmail(e.target.value)
    }
    className="
      p-2
      rounded-l-lg
      
      
      bg-[#09111f]
      border
      border-white/10
      text-white
      flex-1
      min-w-0
      outline-none
      focus:border-[#0056ff]
    "
  />

  <button
    type="submit"
    disabled={subscribing}
    className="
      bg-blue-600
      px-4
      py-2
      rounded-r-lg
      
      hover:bg-blue-700
      transition
      font-medium
      whitespace-nowrap
      disabled:opacity-50
    "
  >
    {subscribing
      ? "Subscribing..."
      : "Subscribe"}
  </button>
</form>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-sm">
        © 2026 CirCool. All rights reserved.
      </div>
    </footer>
  );
}