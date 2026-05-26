export default function BenefitsSection() {
  const benefits = [
    {
      image: "/Trusted-&-Secure.png",
      title: "Trusted & Secure by Design",
      description:
        "Your data and interactions are protected with top-tier security and privacy standards.",
    },
    {
      image: "/RealInteractions.png",
      title: "Real Interactions, Real Impact",
      description:
        "Every meaningful interaction you make contributes to your reputation score.",
    },
    {
      image: "/RewardsThatMatter.png",
      title: "Rewards That Matter",
      description:
        "Earn gifts, perks, and exclusive benefits from brands and trusted partners.",
    },
    {
      image: "/OpportunitiesUnlocked.png",
      title: "Opportunities Unlocked",
      description:
        "A stronger reputation opens doors to premium opportunities and privileged access.",
    },
    {
      image: "/A-Global.png",
      title: "A Global Community",
      description:
        "Connect with like-minded people and be part of a global movement for trust and transparency.",
    },
    {
      image: "/CreateYourProfile.png",
      title: "Built for Everyone",
      description:
        "Whether you're an individual, creator, professional, or business—CirCool is for you.",
    },
  ];

  const stats = [
    {
      image: "👥",
      number: "10,000+",
      title: "Early Believers",
      description:
        "Growing community of visionaries and doers.",
    },
    {
      image: "/A-Global.png",
      number: "150+",
      title: "Countries",
      description:
        "A global ecosystem without borders.",
    },
    {
      image: "/RewardsThatMatter.png",
      number: "25,000+",
      title: "Gifts Sent",
      description:
        "Meaningful rewards delivered every day.",
    },
    {
      image: "/Trusted-&-Secure.png",
      number: "100%",
      title: "Secure",
      description:
        "Your privacy and data are always protected.",
    },
    {
      image: "/OpportunitiesUnlocked.png",
      number: "Limitless",
      title: "Potential",
      description:
        "One reputation. Infinite opportunities.",
    },
  ];

  return (
    <section
      id="benefits"
      className="relative overflow-hidden py-10 bg-[#00040d]"
    >
      {/* BACKGROUND IMAGE */}
      <img
        src="/benefit.png"
        alt=""
        className="
        hidden md:block
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-top
          pointer-events-none
          select-none
        "
      />

      {/* Mobile Image */}
<img
  src="/benefitsmobile.png"
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
      {/* OVERLAY */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#00040d] via-[#00040d]/85 to-[#00040d]/45" /> */}

      {/* CONTENT */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-5 pt-60 md:pt-0">
        
        {/* HEADING */}
        <div className="max-w-xl">
          
          {/* LABEL */}
          <p className="text-[#0d46ff] uppercase tracking-[0.22em] text-xs font-medium mb-4">
            Benefits
          </p>

          {/* TITLE */}
          <h2 className="text-white font-bold leading-tight tracking-tight text-4xl md:text-6xl">
            Why CirCool is{" "}
            <span className="text-[#0d46ff]">
              Different.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-white/75 text-sm md:text-lg leading-relaxed mt-6 max-w-2xl">
            CirCool isn’t just another platform. It’s a social scoring{" "}
  <br className="hidden md:block" />
            ecosystem designed to empower individuals, foster {" "}
  <br className="hidden md:block" />trust,
            and unlock real-world opportunities.
          </p>
        </div>

        {/* BENEFITS */}
        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-6
            gap-4
            mt-6
          "
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="
                bg-[#07101f]/75
                border
                border-[#1b2f6b]
                rounded-2xl
                p-5
                backdrop-blur-xl
                hover:border-[#0d46ff]
                transition-all
                duration-300
                min-h-[270px]
                flex
                flex-col
              "
            >
              {/* IMAGE */}
              <div className="flex justify-center">
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
                  "
                >
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-white text-lg font-semibold text-center mt-5 leading-snug">
                {benefit.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-white/60 text-sm text-center leading-relaxed mt-4">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* STATS */}
        {/* <div
          className="
            mt-8
            bg-[#07101f]/80
            border
            border-[#1b2f6b]
            rounded-2xl
            backdrop-blur-xl
            overflow-hidden
          "
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-5">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="
                  p-5
                  border-b
                  lg:border-b-0
                  lg:border-r
                  border-white/10
                  last:border-r-0
                  flex
                  items-start
                  gap-4
                "
              >
                <div className="flex justify-center">
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
                  "
                >
                  <img
                    src={stat.image}
                    alt={stat.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div> */}

                {/* CONTENT */}
                {/* <div>
                  <h3 className="text-[#0d46ff] text-2xl font-bold">
                    {stat.number}
                  </h3>

                  <h4 className="text-white text-lg font-semibold mt-1">
                    {stat.title}
                  </h4>

                  <p className="text-white/60 text-sm mt-2 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}