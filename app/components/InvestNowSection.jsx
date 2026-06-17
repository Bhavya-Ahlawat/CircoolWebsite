"use client";

import { useEffect, useState } from "react";
import { Hourglass, Crown, Gem } from "lucide-react";

const plans = [
  {
    title: "Starter Investor",
    amount: "$1,000",
    badge: "START HERE",
  },
  {
    title: "Bronze Investor",
    amount: "$5,000",
  },
  {
    title: "Silver Investor",
    amount: "$10,000",
  },
  {
    title: "Gold Investor",
    amount: "$25,000",
  },
  {
    title: "Platinum Investor",
    amount: "$50,000",
  },
  {
    title: "Executive Investor",
    amount: "$100,000",
    badge: "MOST POPULAR",
  },
  {
    title: "Strategic Partner",
    amount: "$500,000",
  },
  {
    title: "Visionary Investor",
    amount: "$1,000,000",
  },
  {
    title: "Founding Capital Partner",
    amount: "$1,500,000",
    badge: "MOST EXCLUSIVE",
  },
];

export default function InvestNowSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 27,
    hours: 14,
    minutes: 32,
    seconds: 18,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 27);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(
          distance / (1000 * 60 * 60 * 24)
        ),
        hours: Math.floor(
          (distance %
            (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance %
            (1000 * 60 * 60)) /
            (1000 * 60)
        ),
        seconds: Math.floor(
          (distance % (1000 * 60)) /
            1000
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        min-h-screen
        bg-[#00040d]
        pt-32
        pb-20
      "
    >
      <div className="max-w-[90rem] mx-auto px-6">

        {/* Badge */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="border border-[#504915] bg-[#0b0f1d]/80 backdrop-blur-md text-[#debc77] px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
            <span>⭐</span>
            <span>Join Founding Members</span>
          </div>
        </div>

        {/* HERO */}
        <div className="grid lg:grid-cols-[1.2fr_0.9fr] gap-8 items-start">

          <div>
            <h1 className="font-bold leading-[1] tracking-tight">
  <span className="block text-white text-5xl md:text-7xl">
    Invest in the Future.
  </span>

  <span className="block text-[#0056ff] text-5xl md:text-7xl mt-2">
    Be Among the First.
  </span>
</h1>

<div className="w-12 h-[3px] bg-[#0056ff] rounded-full mt-8" />

            <p
              className="
                text-white
                text-lg md:text-md
                leading-relaxed
                mt-8
                max-w-lg
                bg-white/5
                backdrop-blur-md
                border border-white/10
                rounded-2xl
                p-5
                lg:bg-transparent
                lg:border-0
                lg:p-0
              "
            >
              Join a select group of investors backing CirCool
              at the earliest stage and participate in building
              the future of digital reputation and trust.
            </p>

            <p className="text-[#0056ff] text-lg mt-8">
              Limited allocation available.
            </p>
          </div>

          <div className="space-y-6">

            {/* Progress */}
            <div className="border border-white/10 rounded-3xl p-6 bg-[#050b1f]">
  <div className="flex justify-between items-center">

    <div className="flex-1">
      <p className="text-[#0056ff] text-sm uppercase">
        ROUND PROGRESS
      </p>

      <h2 className="text-[#0056ff] text-5xl font-bold mt-3">
        $425,000
      </h2>

      <p className="text-white/80 mt-2 text-xl">
        of $2,500,000 Raised
      </p>

      <div className="h-4 bg-[#1a274d] rounded-full mt-6 overflow-hidden">
        <div className="h-full w-[17%] bg-[#0056ff] rounded-full" />
      </div>
    </div>

    <div className="relative w-32 h-32 ml-8">
      <svg className="w-full h-full -rotate-90">
        <circle
          cx="64"
          cy="64"
          r="50"
          stroke="#1f2d56"
          strokeWidth="10"
          fill="none"
        />

        <circle
          cx="64"
          cy="64"
          r="50"
          stroke="#0056ff"
          strokeWidth="10"
          fill="none"
          strokeDasharray="314"
          strokeDashoffset="260"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-white text-4xl font-bold">
          17%
        </div>

        <div className="text-[#0056ff] text-sm">
          FUNDED
        </div>
      </div>
    </div>

  </div>
</div>

            {/* Countdown */}
            <div className="border border-white/10 rounded-3xl p-8 bg-white/5 backdrop-blur-md">
              <div className="flex gap-4 items-center">

                <Hourglass
                  className="text-[#0056ff]"
                  size={40}
                />

                <div>
                  <p className="text-[#0056ff]">
                    ROUND CLOSES IN
                  </p>

                  <div className="flex gap-8 text-white mt-4">
                    <div>
  <div className="text-4xl font-bold">
    {String(timeLeft.days).padStart(2, "0")}
  </div>
  <div className="text-xs">DAYS</div>
</div>

<div>
  <div className="text-4xl font-bold">
    {String(timeLeft.hours).padStart(2, "0")}
  </div>
  <div className="text-xs">HRS</div>
</div>

<div>
  <div className="text-4xl font-bold">
    {String(timeLeft.minutes).padStart(2, "0")}
  </div>
  <div className="text-xs">MINS</div>
</div>

<div>
  <div className="text-4xl font-bold">
    {String(timeLeft.seconds).padStart(2, "0")}
  </div>
  <div className="text-xs">SECS</div>
</div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

        {/* TITLE */}
        <div className="text-center mt-24">
          <h2 className="text-white text-5xl font-semibold">
            Choose Your Investment
          </h2>

          <p className="text-white/60 mt-4">
            Select the level of participation.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="
                relative
                border
                border-white/10
                rounded-3xl
                p-6
                bg-white/5
                backdrop-blur-md
                hover:border-[#0056ff]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              {plan.badge && (
                <div className="absolute -top-3 left-4 bg-[#0056ff] px-3 py-1 rounded-lg text-xs text-white">
                  {plan.badge}
                </div>
              )}

              <div className="flex justify-center mb-6">
                {plan.title.includes("Partner") ? (
                  <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                    <Gem
                      className="text-[#0056ff]"
                      size={24}
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                    <Crown
                      className="text-[#0056ff]"
                      size={24}
                    />
                  </div>
                )}
              </div>

              <h3 className="text-white text-center">
                {plan.title}
              </h3>

              <p className="text-white text-center text-4xl font-bold mt-3">
                {plan.amount}
              </p>

              <button
                className="
                  w-full
                  mt-6
                  bg-[#0056ff]
                  hover:bg-white
                  hover:text-[#0056ff]
                  text-white
                  py-3
                  rounded-xl
                  transition-all
                  duration-300
                  shadow-[0_0_20px_rgba(5,47,248,0.35)]
                "
              >
                Invest Now
              </button>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid lg:grid-cols-2 gap-6 mt-16">

          <div className="border border-white/10 rounded-3xl p-8 bg-white/5 backdrop-blur-md">
            <h3 className="text-[#0056ff] text-3xl mb-6">
              Why Invest Early
            </h3>

            <ul className="space-y-4 text-white">
              <li className="flex gap-3">
                <span className="text-[#0056ff]">✓</span>
                <span>Early-stage opportunity</span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#0056ff]">✓</span>
                <span>Limited allocation</span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#0056ff]">✓</span>
                <span>Priority access to future rounds</span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#0056ff]">✓</span>
                <span>Long-term growth potential</span>
              </li>
            </ul>
          </div>

          <div className="border border-white/10 rounded-3xl p-8 bg-white/5 backdrop-blur-md">
            <h3 className="text-[#0056ff] text-3xl">
              Secure Investment
            </h3>

            <p className="text-white/60 mt-2">
              Powered by Stripe
            </p>

            <div className="flex justify-center mt-10">
              <img
                src="/stripe-qr.png"
                alt="Stripe"
                className="w-52 mx-auto"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}