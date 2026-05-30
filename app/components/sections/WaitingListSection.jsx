"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Globe,
  Lock,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

export default function WaitingListSection() {
  const benefits = [
    {
      icon: "/rocket.png",
      title: "Early Access",
      description:
        "Be the first to explore CirCool and help shape the future. Your early access today sets the standard for tomorrow.",
    },
    {
      icon: "/BuildYourScore.png",
      title: "Build Your Reputation",
      description:
        "Start building your CirCool Score early and unlock opportunities that grow with you. Your reputation is your advantage.",
    },
    {
      icon: "/diamond.png",
      title: "Exclusive Benefits",
      description:
        "Unlock exclusive features, curated events, and premium opportunities designed for early supporters like you.",
    },
    {
      icon: "/A-Global.png",
      title: "Global Community",
      description:
        "Connect with visionary people and communities worldwide. Learn, collaborate, and create impact together.",
    },
    {
      icon: "/Trusted-&-Secure.png",
      title: "Secure & Private",
      description:
        "Your data, your identity, your control. CirCool is built with privacy by design and security you can trust.",
    },
    {
      icon: "/RewardsThatMatter.png",
      title: "Meaningful Impact",
      description:
        "Turn your interactions into real value. Influence, inspire, and unlock opportunities that create a lasting impact.",
    },
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    role: "",
    updates: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Successfully joined waiting list!");

        setFormData({
          fullName: "",
          email: "",
          country: "",
          role: "",
          updates: false,
        });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit form");
    }

    setLoading(false);
  };

  return (
    <section
      className="relative min-h-screen bg-[#00040d] text-white overflow-hidden py-10"
      id="join-waiting-list"
    >
      {/* BG IMAGE */}
      <img
        src="/join.png"
        alt=""
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-right
          pointer-events-none
          select-none
        "
      />
      {/* TOP CENTER HEADING */}
<div className="relative z-10 max-w-5xl mx-auto text-center px-6 mb-16 lg:mb-24">
  <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
    TRUST IS BECOMING{" "}
    <span className="text-[#0056ff]">PROGRAMMABLE</span>
  </h2>

  <p className="mt-6 text-white/70 text-base sm:text-2xl md:text-3xl leading-relaxed max-w-4xl mx-auto">
    The next internet layer will be built on measurable reputation.
  </p>
  <p className="mt-6 text-white/70 text-base sm:text-sm md:text-lg leading-relaxed max-w-3xl mx-auto">
    Where reputation becomes real-world access.
  </p>
</div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[90rem] mx-auto grid lg:grid-cols-[60%_40%] gap-14 items-start px-6">
        {/* LEFT SIDE */}
        <div className="space-y-10">
          {/* HEADING */}
          <div className="max-w-xl">
            <p className="text-[#0056ff] uppercase tracking-[0.22em] text-xs font-medium mb-4">
              Waiting List
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Join the Future of{" "}
              <span className="text-[#0056ff]">
                Social Scoring Reputation
              </span>
            </h2>

            <p className="mt-6 text-white/75 text-sm md:text-lg leading-relaxed">
              Be among the first users to experience CirCool and start
              <br className="hidden md:block" />
              building your digital reputation before the world catches up.
            </p>
          </div>

          {/* BENEFITS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="
                  bg-[#07101f]/78
                  border
                  border-[#1b2f6b]
                  rounded-2xl
                  p-5
                  backdrop-blur-xl
                  hover:border-[#0056ff]
                  transition-all
                  duration-300
                  flex
                  flex-col
                  items-start
                  text-left
                  min-h-[200px]
                "
              >
                {/* ICON */}
                <div
                  className="
                    w-14
                    h-14
                    flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#0056ff]/30
                    bg-[#09111f]
                    mb-5
                  "
                >
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="w-7 h-7 object-contain"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-white font-semibold text-lg leading-snug">
                  {benefit.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-white/65 text-sm mt-3 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center lg:justify-start mt-16">
          {/* FORM CARD */}
          <div
            className="
              relative
              z-10
              w-full
              max-w-lg
              bg-[#07101f]/82
              border
              border-[#1b2f6b]
              rounded-3xl
              backdrop-blur-xl
              p-7
              hover:border-[#0056ff]/40
              transition-all
              duration-300
            "
          >
            {/* TITLE */}
            <h3 className="text-3xl font-bold">
              Join the Waiting List
            </h3>

            <p className="text-white/70 mt-3">
              Fill out the form below to secure your spot.
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4 mt-7">
              {/* FULL NAME */}
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5" />

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="
                    w-full
                    pl-12
                    p-3.5
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
              </div>

              {/* EMAIL */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5" />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="
                    w-full
                    pl-12
                    p-3.5
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
              </div>

              {/* COUNTRY */}
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5" />

                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                  required
                  className="
                    w-full
                    pl-12
                    p-3.5
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
              </div>

              {/* ROLE */}
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5" />

                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    p-3.5
                    pl-12
                    pr-10
                    rounded-xl
                    bg-[#09111f]
                    border
                    border-white/10
                    text-white
                    outline-none
                    focus:border-[#0056ff]
                    transition-all
                    appearance-none
                  "
                >
                  <option value="">I am a…</option>
                  <option>Individual</option>
                  <option>Creator</option>
                  <option>Professional</option>
                  <option>Business</option>
                </select>

                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
              </div>

              {/* CHECKBOX */}
              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  name="updates"
                  checked={formData.updates}
                  onChange={handleChange}
                  className="
                    w-5
                    h-5
                    appearance-none
                    rounded
                    border
                    border-white/10
                    bg-[#09111f]
                    checked:bg-[#0056ff]
                    checked:border-[#0056ff]
                    transition-all
                    cursor-pointer
                    relative
                    after:content-['']
                    after:absolute
                    after:left-[6px]
                    after:top-[2px]
                    after:w-1.5
                    after:h-3
                    after:border-r-2
                    after:border-b-2
                    after:border-white
                    after:rotate-45
                    after:opacity-0
                    checked:after:opacity-100
                  "
                />

                <span className="text-white/65 text-sm leading-relaxed">
                  I agree to receive updates about CirCool.
                </span>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  bg-[#0056ff]
                  hover:bg-white
                  hover:text-[#0056ff]
                  transition-all
                  duration-300
                  py-3.5
                  rounded-xl
                  font-semibold
                  shadow-[0_0_25px_rgba(13,70,255,0.35)]
                  flex
                  items-center
                  justify-center
                  gap-2
                  disabled:opacity-50
                "
              >
                {loading ? "Submitting..." : "Join the Waiting List"}

                <ArrowRight className="w-5 h-5" />
              </button>

              {/* FOOTNOTE */}
              <p className="text-white/45 text-sm leading-relaxed pt-2 flex items-start gap-2">
                <Lock className="w-4 h-4 mt-0.5 text-white/40" />

                <span>
                  We respect your privacy. Your information is safe with us
                  <br className="hidden md:block" />
                  and will never be shared.
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}