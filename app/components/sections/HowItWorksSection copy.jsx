export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      icon: "👤",
      title: "Create Your Profile",
      description:
        "Build a verified digital identity with your interests, goals, location, and professional background.",
    },
    {
      number: "2",
      icon: "👥",
      title: "Grow Your Circle",
      description:
        "Connect with people, communities, and opportunities aligned with your values and ambitions.",
    },
    {
      number: "3",
      icon: "📈",
      title: "Build Your Score",
      description:
        "Your activity, reputation signals, gifts, verifications, and engagement increase your CirCool Score.",
    },
    {
      number: "4",
      icon: "🔒",
      title: "Unlock Access",
      description:
        "Higher reputation unlocks visibility, premium circles, networking opportunities, and exclusive benefits.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#00040d] py-28"
    >
      {/* Stars Background */}
      <img
        src="/stars-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Main Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE */}
          <div>
            
            {/* Small Label */}
            <p className="text-[#0d46ff] uppercase tracking-[0.25em] text-sm font-medium mb-6">
              How It Works
            </p>

            {/* Heading */}
            <h2 className="text-white font-bold leading-[1] tracking-tight text-5xl md:text-7xl">
              How CirCool{" "}
              <span className="text-[#0d46ff]">
                Works
              </span>
            </h2>

            {/* Description */}
            <p className="text-white/75 text-lg md:text-xl leading-relaxed mt-8 max-w-2xl">
              CirCool transforms your digital presence into a living
              reputation score. Every verified interaction, meaningful
              connection, gift, endorsement, and trusted behavior helps
              you build social capital.
            </p>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mt-14">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="
                    relative
                    bg-[#07101f]/80
                    border
                    border-white/10
                    rounded-3xl
                    p-8
                    backdrop-blur-xl
                    hover:border-[#0d46ff]/50
                    transition-all
                    duration-300
                    group
                  "
                >
                  {/* Arrow */}
                  {index !== steps.length - 1 && (
                    <div
                      className="
                        hidden
                        lg:flex
                        absolute
                        top-1/2
                        -right-6
                        -translate-y-1/2
                        text-[#0d46ff]
                        text-4xl
                        z-20
                      "
                    >
                      →
                    </div>
                  )}

                  {/* Icon Circle */}
                  <div
                    className="
                      w-24
                      h-24
                      rounded-full
                      border
                      border-[#0d46ff]/30
                      flex
                      items-center
                      justify-center
                      text-5xl
                      bg-[#09111f]
                      mx-auto
                    "
                  >
                    {step.icon}
                  </div>

                  {/* Number */}
                  <div className="flex justify-center mt-6">
                    <div
                      className="
                        w-10
                        h-10
                        rounded-full
                        bg-[#0d46ff]
                        flex
                        items-center
                        justify-center
                        text-white
                        font-bold
                      "
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-2xl font-semibold text-center mt-6">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/65 text-center leading-relaxed mt-4">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center lg:justify-end min-h-[700px]">
            
            {/* Earth Image */}
            <img
              src="/earth.png"
              alt=""
              className="
                absolute
                bottom-0
                right-0
                w-full
                max-w-4xl
                opacity-90
                pointer-events-none
                select-none
              "
            />

            {/* Blue Glow */}
            <div
              className="
                absolute
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[500px]
                h-[500px]
                bg-blue-600/20
                blur-[140px]
                rounded-full
              "
            />

            {/* Phone Mockup */}
            <img
              src="/mobile-mockup.png"
              alt="Mobile Mockup"
              className="
                relative
                z-20
                w-[320px]
                sm:w-[380px]
                md:w-[430px]
                lg:w-[480px]
                object-contain
                drop-shadow-[0_0_60px_rgba(13,70,255,0.35)]
              "
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="
            mt-20
            bg-[#07101f]/90
            border
            border-white/10
            rounded-3xl
            px-8
            py-8
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-8
            backdrop-blur-xl
          "
        >
          {/* Left Content */}
          <div className="flex items-center gap-6">
            
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
              "
            >
              🏆
            </div>

            {/* Text */}
            <div>
              <h3 className="text-white text-3xl font-bold">
                Reputation that creates real opportunities.
              </h3>

              <p className="text-white/70 text-lg mt-2">
                Build it. Grow it. Take it everywhere.
              </p>
            </div>
          </div>

          {/* Button */}
          <button
            className="
              bg-[#052ff8]
              hover:bg-white
              hover:text-[#052ff8]
              text-white
              px-10
              py-5
              rounded-2xl
              text-lg
              font-semibold
              transition-all
              duration-300
              shadow-[0_0_30px_rgba(5,47,248,0.35)]
              whitespace-nowrap
            "
          >
            Join the Waiting List →
          </button>
        </div>
      </div>
    </section>
  );
}