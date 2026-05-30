import { ArrowRight } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      image: "/CreateYourProfile.png",
      title: "Create Your Network Profile",
      description:
        "Build a verified digital identity with your interests, goals, location, and professional background.",
    },
    {
      number: "2",
      image: "/GrowYourCircle.png",
      title: "Grow Your Circle",
      description:
        "Connect with people, communities, and opportunities aligned with your values and ambitions.",
    },
    {
      number: "3",
      image: "/BuildYourScore.png",
      title: "Build Your Score",
      description:
        "Your activity, reputation signals, gifts, verifications, and engagement increase your CirCool Score.",
    },
    {
      number: "4",
      image: "/UnlockAccess.png",
      title: "Unlock Access",
      description:
        "Higher reputation unlocks visibility, premium circles, networking opportunities, and exclusive benefits.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-10 bg-[#00040d]"
    >
      {/* RIGHT SIDE BG IMAGE */}
      <img
        src="/How_It_Work.png"
        alt=""
        className="
        hidden md:block
          translate-x-5
          -translate-y-10
          absolute
          top-0
          right-0
          h-full
          w-full
          object-contain
          object-right
          pointer-events-none
          select-none
        "
      />

      {/* Mobile Image */}
<img
  src="/howitworkmobile.png"
  alt=""
  className="
    block md:hidden
    absolute
    inset-0
    w-full
    h-full
    object-contain
    object-top
    pointer-events-none
    select-none
  "
/>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#00040d] via-[#00040d]/90 to-[#00040d]/30" /> */}

      {/* CONTENT */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-5 pt-0 md:pt-0">
        
        {/* LEFT CONTENT */}
        <div className="max-w-3xl">
          
          {/* Label */}
          <p className="text-[#0056ff] uppercase tracking-[0.2em] text-xs font-medium mb-4">
            How It Works
          </p>

          {/* Heading */}
          <h2 className="text-white font-bold leading-[0.95] tracking-tight text-4xl md:text-6xl">
            How{" "}
            <span className="text-[#0056ff]">
             CirCool</span>
            {" "}
            <span >
              Works
            </span>
          </h2>

          {/* Description */}
          <p className="text-white/75 text-sm md:text-lg leading-relaxed mt-6 max-w-xl bg-white/5
    backdrop-blur-md
    border border-white/10
    rounded-2xl
    p-5

    /* Desktop unchanged */
    lg:bg-transparent
    lg:backdrop-blur-none
    lg:border-0
    lg:p-0
    lg:rounded-none">
            CirCool transforms your digital presence into a living reputation score.
            Every verified interaction, meaningful connection, gift, endorsement,
            and trusted behavior helps you build social capital.
          </p>
        </div>

        {/* CARDS */}
        <div
          className="
             mt-8
    grid
    grid-cols-2
    gap-4

    lg:flex
    lg:flex-wrap
    xl:flex-nowrap
    lg:items-center
    lg:gap-1
          "
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-0"
            >
              {/* CARD */}
              <div
                className="
                  w-full
                  sm:w-[240px]
                  lg:w-[220px]
                  min-h-[380px]
                  bg-[#07101f]/75
                  border
                  border-[#1b2f6b]
                  rounded-2xl
                  p-5
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#0056ff]
                "
              >
                {/* ICON */}
                <div className="flex justify-center">
                  <div
                    className="
                      w-16
                      h-16
                      rounded-full
                      border
                      border-[#0056ff]/40
                      bg-[#081120]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>

                {/* NUMBER */}
                <div className="flex justify-center mt-4">
                  <div
                    className="
                      w-7
                      h-7
                      rounded-full
                      bg-[#0056ff]
                      flex
                      items-center
                      justify-center
                      text-white
                      text-xs
                      font-bold
                    "
                  >
                    {step.number}
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-white text-lg font-semibold text-center mt-4 leading-snug">
                  {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-white/65 text-sm text-center leading-relaxed mt-3">
                  {step.description}
                </p>
              </div>

              {/* ARROW */}
              {index !== steps.length - 1 && (
                <div
                  className="
                    hidden
                    lg:flex
                    items-center
                    justify-center
                    text-[#0056ff]
                    shrink-0
                  "
                >
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="
            mt-5
            bg-[#07101f]/80
            border
            border-[#1b2f6b]
            rounded-2xl
            px-6
            py-5
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-5
            backdrop-blur-xl
          "
        >
          {/* LEFT */}
          <div className="flex items-center gap-4 ">
            
            <div
              className="
                w-14
                h-14
                rounded-full
                border
                border-[#0056ff]/40
                bg-[#081120]
                flex
                items-center
                justify-center
                text-2xl
              "
            >
              
              <div
                    className="
                      w-16
                      h-16
                      rounded-full
                      border
                      border-[#0056ff]/40
                      bg-[#081120]
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <img
                      src="/trophy.png"
                      alt="Trophy"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
            </div>

            <div>
              <h3 className="text-white text-xl md:text-2xl font-semibold">
                Reputation that creates real opportunities.
              </h3>

              <p className="text-white/65 text-sm md:text-base mt-1">
                Build it. Grow it. Take it everywhere.
              </p>
            </div>
          </div>

          {/* BUTTON */}
          <a href="#join-waiting-list">
          <button
            className="
              bg-[#0056ff]
              hover:bg-white
              hover:text-[#0056ff]
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              transition-all
              duration-300
              shadow-[0_0_25px_rgba(13,70,255,0.35)]
              flex
              items-center
              gap-3
              whitespace-nowrap
            "
          >
            Join the Waiting List
            <ArrowRight className="w-5 h-5" />
          </button>
          </a>
        </div>
      </div>
    </section>
  );
}