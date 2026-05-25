
import { ExternalLink, ArrowRight, Play } from "lucide-react";
export default function HomeSection() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        min-h-screen
        flex
        items-center
        pt-22
        pb-10
        bg-[#00040d]
      "
    >
      {/* FULL BACKGROUND IMAGE */}
      <img
        src="/Home.png"
        alt=""
        className="
          hidden md:block
          translate-y-0
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
      {/* Mobile Image */}
<img
  src="/homemobile.png"
  alt=""
  className="
    block md:hidden
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

      {/* Optional dark overlay for readability */}
      {/* <div className="absolute inset-0 bg-black/35" /> */}

      {/* Main Content */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-6 w-full">
        <div className="max-w-[90rem]">
          
          {/* Tags */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="border border-[#504915] bg-[#0b0f1d]/80 backdrop-blur-md text-[#debc77] px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
  <img
    src="/early.png"
    alt="Early Access"
    className="w-4 h-4 object-contain"
  />
  <span>EARLY ACCESS</span>
</div>

            <div className="border border-white/10 bg-[#0b0f1d]/80 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
  <img
    src="/invite.png"
    alt="Invite Only"
    className="w-4 h-4 object-contain"
  />
  <span>Invite Only</span>
</div>
          </div>

          {/* Heading */}
          <h1 className="text-white font-bold leading-[0.95] tracking-tight">
            <span className="block text-5xl md:text-6xl">
              CirCool
            </span>

            <span className="block text-5xl md:text-6xl text-[#0d46ff] mt-2">
              is the First
            </span>

            <span className="block text-5xl md:text-6xl mt-2">
              Social Scoring Network
            </span>
          </h1>

          {/* Description */}
          <p className="text-white text-lg md:text-md leading-relaxed mt-8 max-w-lg">
            CirCool is the first social scoring ecosystem where
            digital reputation, meaningful connections, and trusted
            interactions unlock real opportunities in life and business.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            
            {/* Join Button */}
            <a href="#join-waiting-list">
            <button
              className="
                bg-[#052ff8]
                hover:bg-white
                hover:text-[#052ff8]
                text-white
                px-8
                py-4
                rounded-xl
                font-regular
                transition-all
                duration-300
                shadow-[0_0_30px_rgba(5,47,248,0.35)]
                hidden md:flex
                items-center
                gap-2
              "
            >
              <span>Join Waiting List</span>
            <ArrowRight size={18}/>
            </button>
            </a>
<a
  href="https://www.figma.com/proto/0CBZ8BgVuPedC30Whsvgiq/Mobile-app-Screen-design-CirCool?node-id=1-1230&t=85CvTP5zR6v7EWJU-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A1230"
  target="_blank"
  rel="noopener noreferrer"
>
            {/* Prototype Button */}
            <button
              className="
                group
                border
                border-[#504915]
                text-[#debc77]
                hover:bg-[#debc77]
                hover:text-black
                px-8
                py-4
                rounded-xl
                font-regular
                transition-all
                duration-300
                hidden md:flex
                items-center
                gap-2
                bg-black/20
                backdrop-blur-md
              "
            >
              {/* <img
    src="/viewproto.png"
    alt="Early Access"
    className="w-4 h-4 object-contain"
  /> */}
  {/* Default Image */}
  <img
    src="/viewproto.png"
    alt="View Prototype"
    className="w-4 h-4 object-contain group-hover:hidden"
  />

  {/* Hover Image */}
  <img
    src="/viewproto-hover.png"
    alt="View Prototype Hover"
    className="w-4 h-4 object-contain hidden group-hover:block"
  />
              <span>View Prototype</span>

            <ExternalLink size={18} />
            </button>
            </a>

            {/* How It Works */}
            <a href="#how-it-works">
            <button
  className="
    border
    border-white/10
    bg-white/5
    backdrop-blur-md
    hover:bg-white
    hover:text-black
    text-white
    px-8
    py-4
    rounded-xl
    font-regular
    transition-all
    duration-300
    hidden md:flex
    items-center
    gap-2
  "
>
  
  <span>See How It Works</span>
  <Play size={18} />
</button>
</a>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 mt-20 items-start">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 divide-x divide-white/10">

  {/* Verified Trust */}
  <div className="flex gap-2">
    <div className="w-14 h-14 shrink-0 backdrop-blur-md flex items-center justify-center rounded-full bg-[#110f02] border border-white/15">
      <img
        src="/VerifiedTrust.png"
        alt="Verified Trust"
        className="w-8 h-8 object-contain"
      />
    </div>

    <div>
      <h4 className="text-white font-semibold">
        Verified Trust
      </h4>

      <p className="text-white/60 text-[11px] mt-1">
        Real people. Real reputation.
      </p>
    </div>
  </div>

  {/* AI Powered */}
  <div className="flex gap-2">
    <div className="w-14 h-14 shrink-0 backdrop-blur-md flex items-center justify-center rounded-full bg-[#110f02] border border-white/15">
      <img
        src="/AI-Powered.png"
        alt="AI Powered"
        className="w-8 h-8 object-contain"
      />
    </div>

    <div>
      <h4 className="text-white font-semibold">
        AI-Powered
      </h4>

      <p className="text-white/60 text-[11px] mt-1">
        Smart scoring based on behavior and impact.
      </p>
    </div>
  </div>

  {/* Privacy First */}
  <div className="flex gap-2">
    <div className="w-14 h-14 shrink-0 backdrop-blur-md flex items-center justify-center rounded-full bg-[#110f02] border border-white/15">
      <img
        src="/early.png"
        alt="Privacy First"
        className="w-8 h-8 object-contain"
      />
    </div>

    <div>
      <h4 className="text-white font-semibold">
        Privacy First
      </h4>

      <p className="text-white/60 text-[11px] mt-1">
        You own your data. Always in control.
      </p>
    </div>
  </div>

  {/* Borderless */}
  <div className="flex gap-2">
    <div className="w-14 h-14 shrink-0 backdrop-blur-md flex items-center justify-center rounded-full bg-[#110f02] border border-white/15">
      <img
        src="/Borderless.png"
        alt="Borderless"
        className="w-8 h-8 object-contain"
      />
    </div>

    <div>
      <h4 className="text-white font-semibold">
        Borderless
      </h4>

      <p className="text-white/60 text-[11px] mt-1">
        Opportunities without limits.
      </p>
    </div>
  </div>




</div>


{/* Early Believers */}
  {/* <div className="flex gap-4 bg-[#00040d] rounded-md"> */}.
  <div
  className="
    flex
    items-center
    justify-between
    gap-4
    bg-[#00040d]
    border
    border-white/10
    rounded-2xl
    px-3
    py-2
    min-w-[340px]
    lg:min-w-[480px]
    backdrop-blur-md
    mt-14
  "
>
  <div className="w-14 h-14 shrink-0 backdrop-blur-md flex items-center justify-center ">
    <img
      src="/earlybelievers.png"
      alt="Early Believers"
      className="w-10 h-10 object-contain"
    />
  </div>

  <div>
    <h4 className="text-[#debc77] font-bold text-2xl">
      10,000+
    </h4>

    <p className="text-white font-medium text-sm mt-1">
      Early Believers
    </p>

    <p className="text-white/60 text-sm mt-1">
      Building their futures on CirCool.
    </p>
  </div>

  <img
      src="/persons.png"
      alt="Persons"
      className="w-auto h-10 object-contain"
    />
</div>
</div>
        </div>
      </div>
    </section>
  );
}