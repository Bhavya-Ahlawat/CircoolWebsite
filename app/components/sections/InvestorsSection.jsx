
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
      title: "High Growth Potential",
      description:
        "A massive market opportunity in the social reputation space is just beginning.",
    },
    {
      icon: "/GrowYourCircle.png",
      title: "First-Mover Advantage",
      description:
        "CirCool is one of the first platforms to unify reputation, rewards, and real-world utility.",
    },
    {
      icon: "/Trusted-&-Secure.png",
      title: "Proven Concept",
      description:
        "Strong early traction, engaged community, and a clear product-market fit.",
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
        "Empowering individuals and communities worldwide through trust and transparency.",
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
          bg-[#0d46ff]/20
          blur-[180px]
          rounded-full
        "
      /> */}

      {/* Content */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-6">
        {/* Hero */}
        <div className="max-w-5xl">
          {/* Label */}
          <p className="text-[#0d46ff] uppercase tracking-[0.22em] text-sm font-medium mb-5">
            FOR INVESTORS
          </p>

          {/* Heading */}
          <h2 className="text-white font-bold leading-tight tracking-tight text-5xl md:text-7xl">
            Invest Early.
            <br />
            <span className="text-[#0d46ff]">
              Shape the Future.
            </span>
          </h2>

          {/* Description */}
          <p className="text-white/75 text-lg md:text-xl leading-relaxed mt-8 max-w-3xl">
            CirCool is the future of social reputation. By investing
            early,{" "}
  <br className="hidden md:block" /> you gain access to exclusive opportunities and help
            build {" "}
  <br className="hidden md:block" />the infrastructure for trust, transparency, and
            real-world impact.
          </p>

          {/* Top Features */}
          <div className="flex flex-wrap gap-x-8 gap-y-6 mt-12 divide-x divide-white/10">
            {topFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 pr-10"
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
                    text-[#0d46ff]
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mt-12">
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
                hover:border-[#0d46ff]/50
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
                  border-[#0d46ff]/30
                  bg-[#09111f]
                  flex
                  items-center
                  justify-center
                  text-[#0d46ff]
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