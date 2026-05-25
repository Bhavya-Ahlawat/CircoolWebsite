export default function Section({ id }) {
  return (
    <section
      id={id}
      className="relative min-h-screen bg-black overflow-hidden text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,80,255,0.25),transparent_45%)]" />

      {/* Stars */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full" />
        <div className="absolute top-40 right-40 w-1 h-1 bg-white rounded-full" />
        <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-white rounded-full" />
        <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-white rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Tags */}
            <div className="flex gap-4 mb-8">
              <div className="border border-yellow-500 text-yellow-400 px-4 py-2 rounded-xl text-sm">
                🔒 EARLY ACCESS
              </div>

              <div className="border border-gray-700 text-gray-300 px-4 py-2 rounded-xl text-sm">
                🔒 Invite Only
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              CirCool
              <br />
              <span className="text-blue-500">
                is the First
              </span>
              <br />
              Social Scoring Network
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-10">
              CirCool is the first social scoring ecosystem where digital
              reputation, meaningful connections, and trusted interactions
              unlock real opportunities in life and business.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-14">
              <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-medium">
                Join the Waiting List →
              </button>

              <button className="border border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 transition px-8 py-4 rounded-xl font-medium">
                ▶ View Prototype
              </button>

              <button className="border border-gray-700 hover:border-white transition px-8 py-4 rounded-xl font-medium">
                See How It Works
              </button>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  title: "Verified Trust",
                  desc: "Real people. Real reputation.",
                },
                {
                  title: "AI-Powered",
                  desc: "Smart scoring based on behavior.",
                },
                {
                  title: "Privacy First",
                  desc: "You own your data.",
                },
                {
                  title: "Borderless",
                  desc: "Opportunities without limits.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-800 bg-white/5 backdrop-blur-sm p-5 rounded-2xl"
                >
                  <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400 text-xl mb-4">
                    ✦
                  </div>

                  <h3 className="font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex justify-center items-center">
            {/* Glow */}
            <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full" />

            {/* PHONE IMAGE */}
            <div className="relative z-10">
              {/* REPLACE THIS IMAGE */}
              <img
                src="/phone.png"
                alt="Phone Mockup"
                className="w-[320px] md:w-[420px] drop-shadow-[0_0_40px_rgba(0,80,255,0.5)]"
              />

              {/* Rating Badge */}
              <div className="absolute top-40 -right-10 bg-yellow-500 text-black rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-2xl border-4 border-yellow-300">
                <span className="text-4xl font-bold">4.8</span>
                <span className="text-sm font-medium">
                  Score
                </span>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black/90 border border-gray-800 rounded-2xl px-6 py-4 w-[320px] backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500" />

                  <div>
                    <h4 className="font-semibold">
                      10,000+ early believers
                    </h4>

                    <p className="text-sm text-gray-400">
                      Building their future on CirCool
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EARTH IMAGE */}
        <div className="absolute bottom-0 left-0 w-full opacity-80">
          {/* REPLACE THIS IMAGE */}
          <img
            src="/earth.png"
            alt="Earth"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}