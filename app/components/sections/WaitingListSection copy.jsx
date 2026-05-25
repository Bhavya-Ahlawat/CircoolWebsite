export default function WaitingListSection() {
  const benefits = [
    {
      icon: "🚀",
      title: "Early Access",
      description: "Be the first to explore CirCool and shape the future with us.",
    },
    {
      icon: "📊",
      title: "Build Your Reputation",
      description: "Start building your CirCool Score early and gain an advantage.",
    },
    {
      icon: "💎",
      title: "Exclusive Benefits",
      description: "Get access to exclusive features, events, and premium opportunities.",
    },
    {
      icon: "🌐",
      title: "Global Community",
      description: "Connect with ambitious people, communities, and opportunities.",
    },
    {
      icon: "🛡",
      title: "Secure & Private",
      description: "Your data, your identity, your control. Built with privacy by design.",
    },
    {
      icon: "🎁",
      title: "Meaningful Impact",
      description: "Turn your interactions into value, influence, and real opportunities.",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 relative">
        {/* Left Side: Heading + Benefits */}
        <div className="space-y-10">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold">
              Join the Future of <span className="text-blue-600">Social Reputation</span>
            </h2>
            <p className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed">
              Be among the first users to experience CirCool and start building your digital
              reputation before the world catches up.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-[#07101f]/85 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-blue-600/50 transition-all duration-300 flex flex-col items-center text-center min-h-[250px]"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full border border-blue-600/30 bg-[#09111f] text-4xl mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-white font-semibold text-xl">{benefit.title}</h3>
                <p className="text-white/70 mt-3">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Waiting List Form with Earth BG */}
        <div className="relative">
          {/* Background Earth */}
          <img
            src="/earth-bg.jpg" // replace with your Earth image path
            alt="Earth Background"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 rounded-3xl" />

          {/* Form */}
          <div className="relative z-10 p-8 rounded-3xl max-w-md mx-auto space-y-6">
            <h3 className="text-3xl font-bold">Join the Waiting List</h3>
            <p className="text-white/70">
              Fill out the form below to secure your spot.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg bg-[#09111f] border border-white/10 text-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg bg-[#09111f] border border-white/10 text-white"
              />
              <input
                type="text"
                placeholder="Country"
                className="w-full p-3 rounded-lg bg-[#09111f] border border-white/10 text-white"
              />
              <select className="w-full p-3 rounded-lg bg-[#09111f] border border-white/10 text-white">
                <option>I am a…</option>
                <option>Individual</option>
                <option>Creator</option>
                <option>Professional</option>
                <option>Business</option>
              </select>

              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-600" />
                <span className="text-white/70 text-sm">
                  I agree to receive updates about CirCool.
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 py-3 rounded-lg font-semibold"
              >
                Join the Waiting List
              </button>

              <p className="text-white/50 text-xs mt-2">
                We respect your privacy. Your information is safe with us and will never be shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}