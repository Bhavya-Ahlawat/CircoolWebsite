export default function BenefitsSection() {
  const benefits = [
    {
      icon: "🛡",
      title: "Trusted & Secure by Design",
      description:
        "Your data and interactions are protected with top-tier security and privacy standards.",
    },
    {
      icon: "👥",
      title: "Real Interactions, Real Impact",
      description:
        "Every meaningful interaction you make contributes to your reputation score.",
    },
    {
      icon: "🎁",
      title: "Rewards That Matter",
      description:
        "Earn gifts, perks, and exclusive benefits from brands and trusted partners.",
    },
    {
      icon: "📈",
      title: "Opportunities Unlocked",
      description:
        "A stronger reputation opens doors to premium opportunities and privileged access.",
    },
    {
      icon: "🌐",
      title: "A Global Community",
      description:
        "Connect with like-minded people and be part of a global movement for trust and transparency.",
    },
    {
      icon: "👤",
      title: "Built for Everyone",
      description:
        "Whether you're an individual, creator, professional, or business—CirCool is for you.",
    },
  ];

  const stats = [
    {
      icon: "👥",
      number: "10,000+",
      title: "Early Believers",
      description:
        "Growing community of visionaries and doers.",
    },
    {
      icon: "🌐",
      number: "150+",
      title: "Countries",
      description:
        "A global ecosystem without borders.",
    },
    {
      icon: "🎁",
      number: "25,000+",
      title: "Gifts Sent",
      description:
        "Meaningful rewards delivered every day.",
    },
    {
      icon: "🛡",
      number: "100%",
      title: "Secure",
      description:
        "Your privacy and data are always protected.",
    },
    {
      icon: "📈",
      number: "Limitless",
      title: "Potential",
      description:
        "One reputation. Infinite opportunities.",
    },
  ];

  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-[#00040d] py-28"
    >
      {/* Background Earth */}
      <img
        src="/benefits-earth.png"
        alt=""
        className="
          absolute
          top-0
          right-0
          w-full
          h-full
          object-cover
          opacity-90
          pointer-events-none
          select-none
        "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#00040d]/70" />

      {/* Blue Glow */}
      <div
        className="
          absolute
          top-1/3
          right-1/4
          w-[700px]
          h-[700px]
          bg-blue-600/10
          blur-[180px]
          rounded-full
        "
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="max-w-3xl">
          
          {/* Label */}
          <p className="text-[#0d46ff] uppercase tracking-[0.25em] text-sm font-medium mb-6">
            Benefits
          </p>

          {/* Title */}
          <h2 className="text-white font-bold leading-[1] tracking-tight text-5xl md:text-7xl">
            Why CirCool is{" "}
            <span className="text-[#0d46ff]">
              Different.
            </span>
          </h2>

          {/* Description */}
          <p className="text-white/75 text-lg md:text-xl leading-relaxed mt-8">
            CirCool isn’t just another platform. It’s a social scoring
            ecosystem designed to empower individuals, foster trust,
            and unlock real-world opportunities.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mt-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="
                bg-[#07101f]/85
                border
                border-white/10
                rounded-3xl
                p-8
                backdrop-blur-xl
                hover:border-[#0d46ff]/50
                transition-all
                duration-300
                group
                min-h-[360px]
                flex
                flex-col
              "
            >
              {/* Icon */}
              <div
                className="
                  w-24
                  h-24
                  rounded-full
                  border
                  border-[#0d46ff]/30
                  bg-[#09111f]
                  flex
                  items-center
                  justify-center
                  text-5xl
                  mx-auto
                "
              >
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="text-white text-3xl font-semibold text-center mt-8 leading-tight">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-white/65 text-center leading-relaxed mt-6 text-lg">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div
          className="
            mt-10
            bg-[#07101f]/90
            border
            border-white/10
            rounded-3xl
            backdrop-blur-xl
            overflow-hidden
          "
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-5">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="
                  p-8
                  border-b
                  lg:border-b-0
                  lg:border-r
                  border-white/10
                  last:border-r-0
                  flex
                  items-start
                  gap-5
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-20
                    h-20
                    rounded-full
                    border
                    border-[#0d46ff]/30
                    bg-[#09111f]
                    flex
                    items-center
                    justify-center
                    text-4xl
                    shrink-0
                  "
                >
                  {stat.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[#0d46ff] text-4xl font-bold">
                    {stat.number}
                  </h3>

                  <h4 className="text-white text-2xl font-semibold mt-2">
                    {stat.title}
                  </h4>

                  <p className="text-white/65 mt-3 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}