import { ExternalLink, ArrowRight, Play } from "lucide-react";
import Link from "next/link";
export default function InvestorsSection() {
  const topFeatures = [
    {
      icon: "/Trusted-&-Secure.png",
      title: "Secure\nInvestments",
    },
    {
      icon: "/BuildYourScore.png",
      title: "High Growth\nPotential",
    },
    {
      icon: "/UnlockAccess.png",
      title: "Transparent\n& Compliant",
    },
    {
      icon: "/RealInteractions.png",
      title: "Real Impact\nWorldwide",
    },
  ];

  const cards = [
    {
      icon: "/rocket.png",
      title: "High Networking Potential",
      description:
        "A market opportunity in the social reputation space is just beginning.",
    },
    {
      icon: "/GrowYourCircle.png",
      title: "First-Mover Advantage",
      description:
        "Building the world’s first social scoring networking platform with massive global scalability potential.",
    },
    {
      icon: "/Trusted-&-Secure.png",
      title: "Proven Concept",
      description:
        "Positioned to lead the next generation of digital reputation, trust, and high-value networking.",
    },
    {
      icon: "/RewardsThatMatter.png",
      title: "Sustainable Ecosystem",
      description:
        "Built for long-term value through network effects and premium features.",
    },
    {
      icon: "/RealInteractions.png",
      title: "Experienced Team",
      description:
        "A diverse team of builders, innovators, and leaders with a shared vision.",
    },
    {
      icon: "/A-Global.png",
      title: "Global Impact",
      description:
        "Empowering through networking By trust and transparency.",
    },
  ];

  return (
    <section
      id="for-investors"
      className="relative overflow-hidden bg-[#00040d] py-10"
    >
      {/* Background Image */}
      <img
        src="/investor.png"
        alt=""
        className="
        hidden md:block
          absolute
          inset-0
          w-full
          h-full
          object-contain
          object-right-top
          opacity-95
          pointer-events-none
          select-none
        "
      />

      {/* Mobile Image */}
<img
  src="/investormobile.png"
  alt=""
  className="
    block md:hidden
    absolute
    inset-0
    w-full
    h-full
    object-cover
    object-top
    opacity-80
    pointer-events-none
    select-none
  "
/>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-[#00040d]/75" /> */}

      {/* Blue Glow */}
      {/* <div
        className="
          absolute
          top-[-200px]
          right-[-200px]
          w-[700px]
          h-[700px]
          bg-[#0056ff]/20
          blur-[180px]
          rounded-full
        "
      /> */}

      {/* Content */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-6 pt-0 md:pt-0 ">
        {/* Hero */}
        <div className="max-w-5xl">
          {/* Label */}
          <p className="text-[#0056ff] uppercase tracking-[0.22em] text-sm font-medium mb-5 mt-0 md:mt-0">
            FOR INVESTORS
          </p>

          {/* Heading */}
          {/* <h2 className="text-white font-bold leading-tight tracking-tight text-5xl md:text-7xl">
            Invest Early.
            <br />
            <span className="text-white">
              Shape the Future.
            </span>
          </h2> */}
          {/* <h2 className="text-white font-bold leading-tight tracking-tight text-3xl md:text-4xl">
  <div className="flex flex-wrap items-center gap-4">
    <span className="text-[#0056ff] text-6xl md:text-7xl">INVEST</span> 

    <img
      src="/LogoCirCool.png"
      alt="Logo"
      className="w-auto h-18 md:w-auto md:h-30 object-contain"
    />
  </div>

</h2> */}
<h2 className="text-white font-bold leading-tight tracking-tight">
  <div className="flex items-center gap-2 md:gap-4 whitespace-nowrap">
    <span className="text-[#0056ff] text-4xl sm:text-5xl md:text-7xl">
      INVEST
    </span>

    <img
      src="/LogoCirCool.png"
      alt="Logo"
      className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
    />
  </div>
</h2>

          {/* Description */}
          <p
  className="
    text-white
    text-lg md:text-xl
    leading-tight 
    mt-8
    max-w-3xl
    

    /* Mobile glass effect only */
    bg-white/5
    backdrop-blur-md
    border border-white/10
    rounded-2xl
    p-5

    /* Remove on desktop */
    lg:bg-transparent
    lg:backdrop-blur-none
    lg:border-0
    lg:p-0
    lg:rounded-none
  "
>
  Invest in the <span className="text-[#0056ff] text-xl md:text-2xl">First Social Scoring Networking</span> ecosystem  
  shaping the future of digital reputation. We believe digital reputation will become one of the most valuable assets of the next decade.
</p>
          <p
  className="
    text-white/75
    text-sm md:text-lg
    leading-relaxed
    mt-8
    max-w-3xl

    /* Mobile glass effect only */
    bg-white/5
    backdrop-blur-md
    border border-white/10
    rounded-2xl
    p-5

    /* Remove on desktop */
    lg:bg-transparent
    lg:backdrop-blur-none
    lg:border-0
    lg:p-0
    lg:rounded-none
  "
>
  CirCool is building the infrastructure layer that will power trust, credibility, influence, and access for billions of users across the new internet. {" "}
  <br className="hidden md:block" /> 
</p>


{/* Buttons */}
<div className="flex flex-nowrap md:flex-wrap gap-2 md:gap-4 mt-10 overflow-x-auto scrollbar-hide">

  {/* Invest Button */}

  <Link href="/invest-now" className="flex-shrink-0">
    <button
      className="
        bg-[#0056ff]
        hover:bg-white
        hover:text-[#0056ff]
        text-white
        px-4 md:px-8
        py-3 md:py-4
        rounded-xl
        text-xs md:text-base
        font-regular
        transition-all
        duration-300
        shadow-[0_0_30px_rgba(5,47,248,0.35)]
        flex
        items-center
        gap-2
        whitespace-nowrap
      "
    >
      <span>Invest Now</span>
      <ArrowRight size={16} />
    </button>
  </Link>


  {/* Join waiting list */}
  <a href="#join-waiting-list" className="flex-shrink-0">
    <button
      className="
        border
        border-white/10
        bg-white/5
        backdrop-blur-md
        hover:bg-white
        hover:text-black
        text-white
        px-4 md:px-8
        py-3 md:py-4
        rounded-xl
        text-xs md:text-base
        font-regular
        transition-all
        duration-300
        flex
        items-center
        gap-2
        whitespace-nowrap
      "
    >
      <span>Join Waiting List</span>
      <ArrowRight size={16} />
    </button>
  </a>
</div>

{/* Top Features */}
<div
  className="
    grid
    grid-cols-2
    lg:flex
    lg:flex-wrap
    gap-x-4
    gap-y-6
    mt-12
    lg:divide-x
    lg:divide-white/10

    /* Mobile glass effect only */
    bg-white/5
    backdrop-blur-md
    border border-white/10
    rounded-3xl
    p-5

    /* Remove on desktop */
    lg:bg-transparent
    lg:backdrop-blur-none
    lg:border-0
    lg:p-0
    lg:rounded-none
  "
>
  {topFeatures.map((feature, index) => (
    <div
      key={index}
      className="flex items-center gap-3 lg:pr-10"
    >
      {/* Icon */}
      <div
        className="
          w-14
          h-14
          rounded-2xl
          flex
          items-center
          justify-center
          text-[#0056ff]
          shrink-0
        "
      >
        <img
          src={feature.icon}
          alt=""
          className="w-10 h-10 object-contain shrink-0"
        />
      </div>

      {/* Text */}
      <p className="text-white text-lg leading-snug whitespace-pre-line">
        {feature.title}
      </p>
    </div>
  ))}
</div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6 mt-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                bg-[#07101f]/85
                border
                border-white/10
                rounded-3xl
                p-3
                backdrop-blur-xl
                hover:border-[#0056ff]/50
                transition-all
                duration-300
                min-h-[300px]
                flex
                flex-col
              "
            >
              {/* Icon Circle */}
              <div
                className="
                  w-16
                  h-16
                  rounded-full
                  border
                  border-[#0056ff]/30
                  bg-[#09111f]
                  flex
                  items-center
                  justify-center
                  text-[#0056ff]
                  mx-auto
                "
              >
                <img
  src={card.icon}
  alt=""
  className="w-8 h-8 object-contain shrink-0"
/>
              </div>

              {/* Title */}
              <h3 className="text-white text-lg font-semibold text-center mt-8 leading-tight">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-white/65 text-center leading-relaxed mt-6 text-lg">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}