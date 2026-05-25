
export default function AboutSection() {
  const features = [
    {
      icon: "/mission.png",
      title: "Our Mission",
      description:
        "Empower people and businesses through verifiable reputation and real transparency.",
    },
    {
      icon: "/view.png",
      title: "Our Vision",
      description:
        "A future where trust drives every connection, transaction, and opportunity.",
    },
    {
      icon: "/early-believers.png",
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
      className="relative overflow-hidden bg-[#00040d] py-10"
    >
      {/* Background */}
      <img
        src="/about.png"
        alt=""
        className="
        hidden md:block
          absolute
          inset-0
          w-full
          h-full
          object-contain
          object-right-bottom
          opacity-95
          pointer-events-none
          select-none
          -translate-y-15
          translate-x-0
        "
      />

      {/* Mobile Image */}
<img
  src="/aboutusmobile.png"
  alt=""
  className="
    block md:hidden
    absolute
    inset-0
    w-full
    h-full
    object-cover
    object-center
    opacity-80
    pointer-events-none
    select-none
  "
/>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-[#00040d]/78" /> */}

      {/* Blue Glow */}
      {/* <div
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
      /> */}

      {/* Content */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-6">
        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-end">
          {/* Left Side */}
          <div>
            {/* Label */}
            <p className="text-[#0d46ff] uppercase tracking-[0.2em] text-sm font-medium mb-5">
              ABOUT CIRCOOL
            </p>

            {/* Heading */}
            <h2 className="text-white font-bold leading-tight tracking-tight text-5xl md:text-7xl">
              Building the Future
              <br />
              <span className="text-[#0d46ff]">
                of Trust.
              </span>
            </h2>

            {/* Description */}
            <p className="text-white/75 text-lg md:text-xl leading-relaxed mt-8 max-w-2xl">
              CirCool is on a mission to transform how trust is built
              online.{" "}
  <br className="hidden md:block" /> We combine technology, transparency, and
              community{" "}
  <br className="hidden md:block" /> to create the world’s most trusted reputation
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
                  <div className="mb-5">
  <img
    src={feature.icon}
    alt={feature.title}
    className="w-[42px] h-[42px] object-contain"
  />
</div>

                  {/* Title */}
                  <h3 className="text-white text-lg font-semibold mb-4">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/65 leading-relaxed text-md">
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
              p-8 md:p-6
            "
          >
            <h3 className="text-white text-2xl font-semibold mb-2">
              Our Story
            </h3>

            <p className="text-white/70 text-md leading-relaxed">
              CirCool was founded by a team of entrepreneurs,
              engineers, and community builders who experienced
              firsthand how hard it is to earn and prove trust online.
            </p>

            <p className="text-white/70 text-md leading-relaxed mt-2">
              We built CirCool to change that—creating a platform
              where early believers, builders, and innovators can
              come together, grow, and shape the future of
              reputation, together.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-5 pt-5 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h4 className="text-[#0d46ff] text-2xl font-bold">
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
        {/* <div
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
        > */}
          {/* Left */}
          {/* <div className="flex items-center gap-5">
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
          </div> */}

          {/* Button */}
          {/* <button
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
        </div> */}
      </div>
    </section>
  );
}