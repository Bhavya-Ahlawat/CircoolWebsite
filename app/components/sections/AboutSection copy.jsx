import {
  Target,
  Eye,
  Users,
  Globe,
  ArrowRight,
} from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <Target size={42} />,
      title: "Our Mission",
      description:
        "Empower people and businesses through verifiable reputation and real transparency.",
    },
    {
      icon: <Eye size={42} />,
      title: "Our Vision",
      description:
        "A future where trust drives every connection, transaction, and opportunity.",
    },
    {
      icon: <Users size={42} />,
      title: "Our Values",
      description:
        "Transparency, integrity, innovation, community, and impact above all.",
    },
  ];

  const stats = [
    {
      number: "2023",
      label: "Founded",
    },
    {
      number: "12+",
      label: "Core Team Members",
    },
    {
      number: "25+",
      label: "Advisors & Mentors",
    },
    {
      number: "Global",
      label: "Community Growing Fast",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#00040d] py-24"
    >
      {/* Background */}
      <img
        src="/about-bg.png"
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
      <div className="absolute inset-0 bg-[#00040d]/78" />

      {/* Blue Glow */}
      <div
        className="
          absolute
          top-[-250px]
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
        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div>
            {/* Label */}
            <p className="text-[#0d46ff] uppercase tracking-[0.2em] text-sm font-medium mb-5">
              ABOUT CIRCOOL
            </p>

            {/* Heading */}
            <h2 className="text-white font-bold leading-[0.95] tracking-tight text-5xl md:text-7xl">
              Building the Future
              <br />
              <span className="text-[#0d46ff]">
                of Trust.
              </span>
            </h2>

            {/* Description */}
            <p className="text-white/75 text-lg md:text-xl leading-relaxed mt-8 max-w-2xl">
              CirCool is on a mission to transform how trust is built
              online. We combine technology, transparency, and
              community to create the world’s most trusted reputation
              ecosystem.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-10 mt-14">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative"
                >
                  {/* Divider */}
                  {index !== 2 && (
                    <div className="hidden sm:block absolute top-0 right-[-20px] w-px h-full bg-white/10" />
                  )}

                  {/* Icon */}
                  <div className="text-[#0d46ff] mb-5">
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-2xl font-semibold mb-4">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/65 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Story Card */}
          <div
            className="
              bg-[#07101f]/88
              border
              border-white/10
              rounded-3xl
              backdrop-blur-xl
              p-8 md:p-10
            "
          >
            <h3 className="text-white text-4xl font-semibold mb-6">
              Our Story
            </h3>

            <p className="text-white/70 text-lg leading-relaxed">
              CirCool was founded by a team of entrepreneurs,
              engineers, and community builders who experienced
              firsthand how hard it is to earn and prove trust online.
            </p>

            <p className="text-white/70 text-lg leading-relaxed mt-6">
              We built CirCool to change that—creating a platform
              where early believers, builders, and innovators can
              come together, grow, and shape the future of
              reputation, together.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h4 className="text-[#0d46ff] text-4xl font-bold">
                    {stat.number}
                  </h4>

                  <p className="text-white/65 mt-3 leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div
          className="
            mt-14
            bg-[#07101f]/88
            border
            border-white/10
            rounded-3xl
            backdrop-blur-xl
            px-6
            md:px-10
            py-8
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-6
          "
        >
          {/* Left */}
          <div className="flex items-center gap-5">
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
                text-[#0d46ff]
                shrink-0
              "
            >
              <Globe size={38} />
            </div>

            <h3 className="text-white text-2xl md:text-3xl font-semibold leading-snug">
              We’re building more than a platform.
              <br />
              We’re building a global movement of trust.
            </h3>
          </div>

          {/* Button */}
          <button
            className="
              bg-[#0d46ff]
              hover:bg-[#1b55ff]
              transition-all
              duration-300
              text-white
              px-8
              py-4
              rounded-2xl
              text-lg
              font-medium
              flex
              items-center
              gap-3
              whitespace-nowrap
            "
          >
            Join the Waiting List
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}