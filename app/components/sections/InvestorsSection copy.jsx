import {
  ShieldCheck,
  TrendingUp,
  Lock,
  Users,
  Rocket,
  Gift,
  Globe,
} from "lucide-react";

export default function InvestorsSection() {
  const topFeatures = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Secure\nInvestments",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "High Growth\nPotential",
    },
    {
      icon: <Lock size={28} />,
      title: "Transparent\n& Compliant",
    },
    {
      icon: <Users size={28} />,
      title: "Real Impact\nWorldwide",
    },
  ];

  const cards = [
    {
      icon: <Rocket size={42} />,
      title: "High Growth Potential",
      description:
        "A massive market opportunity in the social reputation space is just beginning.",
    },
    {
      icon: <TrendingUp size={42} />,
      title: "First-Mover Advantage",
      description:
        "CirCool is one of the first platforms to unify reputation, rewards, and real-world utility.",
    },
    {
      icon: <ShieldCheck size={42} />,
      title: "Proven Concept",
      description:
        "Strong early traction, engaged community, and a clear product-market fit.",
    },
    {
      icon: <Gift size={42} />,
      title: "Sustainable Ecosystem",
      description:
        "Built for long-term value through network effects and premium features.",
    },
    {
      icon: <Users size={42} />,
      title: "Experienced Team",
      description:
        "A diverse team of builders, innovators, and leaders with a shared vision.",
    },
    {
      icon: <Globe size={42} />,
      title: "Global Impact",
      description:
        "Empowering individuals and communities worldwide through trust and transparency.",
    },
  ];

  return (
    <section
      id="for-investors"
      className="relative overflow-hidden bg-[#00040d] py-24"
    >
      {/* Background Image */}
      <img
        src="/investors-bg.png"
        alt=""
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-right-top
          opacity-95
          pointer-events-none
          select-none
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#00040d]/75" />

      {/* Blue Glow */}
      <div
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
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="max-w-4xl">
          {/* Label */}
          <p className="text-[#0d46ff] uppercase tracking-[0.22em] text-sm font-medium mb-5">
            FOR INVESTORS
          </p>

          {/* Heading */}
          <h2 className="text-white font-bold leading-[0.95] tracking-tight text-5xl md:text-7xl">
            Invest Early.
            <br />
            <span className="text-[#0d46ff]">
              Shape the Future.
            </span>
          </h2>

          {/* Description */}
          <p className="text-white/75 text-lg md:text-xl leading-relaxed mt-8 max-w-3xl">
            CirCool is the future of social reputation. By investing
            early, you gain access to exclusive opportunities and help
            build the infrastructure for trust, transparency, and
            real-world impact.
          </p>

          {/* Top Features */}
          <div className="flex flex-wrap gap-x-10 gap-y-6 mt-12">
            {topFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4"
              >
                {/* Icon */}
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    border
                    border-[#0d46ff]/25
                    bg-[#09111f]/90
                    flex
                    items-center
                    justify-center
                    text-[#0d46ff]
                    shrink-0
                  "
                >
                  {feature.icon}
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mt-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                bg-[#07101f]/85
                border
                border-white/10
                rounded-3xl
                p-7
                backdrop-blur-xl
                hover:border-[#0d46ff]/50
                transition-all
                duration-300
                min-h-[360px]
                flex
                flex-col
              "
            >
              {/* Icon Circle */}
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
                  text-[#0d46ff]
                  mx-auto
                "
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-white text-3xl font-semibold text-center mt-8 leading-tight">
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