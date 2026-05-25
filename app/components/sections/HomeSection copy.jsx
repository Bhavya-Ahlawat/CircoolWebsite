// export default function HomeSection() {
//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden bg-[#00040d] min-h-screen flex items-center pt-32 pb-20"
//     >
//       {/* Background Stars */}
//       <img
//         src="/stars-bg.png"
//         alt=""
//         className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
//       />

//       {/* Blue Glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-700/20 blur-[180px] rounded-full" />

//       {/* Main Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
          
//           {/* LEFT SIDE */}
//           <div className="relative">
            
//             {/* Tags */}
//             <div className="flex flex-wrap gap-4 mb-8">
//               <div className="border border-[#504915] bg-[#0b0f1d] text-[#debc77] px-4 py-2 rounded-lg text-sm font-medium">
//                 🔒 EARLY ACCESS
//               </div>

//               <div className="border border-white/10 bg-[#0b0f1d] text-white px-4 py-2 rounded-lg text-sm font-medium">
//                 🔒 Invite Only
//               </div>
//             </div>

//             {/* Heading */}
//             <h1 className="text-white font-bold leading-[0.95] tracking-tight">
//               <span className="block text-5xl md:text-7xl">
//                 CirCool
//               </span>

//               <span className="block text-5xl md:text-7xl text-[#0d46ff] mt-2">
//                 is the First
//               </span>

//               <span className="block text-5xl md:text-7xl mt-2">
//                 Social Scoring Network
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="text-white/75 text-lg md:text-xl leading-relaxed mt-8 max-w-2xl">
//               CirCool is the first social scoring ecosystem where
//               digital reputation, meaningful connections, and trusted
//               interactions unlock real opportunities in life and business.
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-wrap gap-4 mt-10">
              
//               {/* Join Button */}
//               <button
//                 className="
//                   bg-[#052ff8]
//                   hover:bg-white
//                   hover:text-[#052ff8]
//                   text-white
//                   px-8
//                   py-4
//                   rounded-xl
//                   font-semibold
//                   transition-all
//                   duration-300
//                   shadow-[0_0_30px_rgba(5,47,248,0.35)]
//                 "
//               >
//                 Join the Waiting List →
//               </button>

//               {/* Prototype Button */}
//               <button
//                 className="
//                   border
//                   border-[#504915]
//                   text-[#debc77]
//                   hover:bg-[#debc77]
//                   hover:text-black
//                   px-8
//                   py-4
//                   rounded-xl
//                   font-semibold
//                   transition-all
//                   duration-300
//                   flex
//                   items-center
//                   gap-3
//                 "
//               >
//                 ▶ View Prototype ↗
//               </button>

//               {/* How It Works */}
//               <button
//                 className="
//                   border
//                   border-white/10
//                   bg-white/5
//                   hover:bg-white
//                   hover:text-black
//                   text-white
//                   px-8
//                   py-4
//                   rounded-xl
//                   font-semibold
//                   transition-all
//                   duration-300
//                 "
//               >
//                 See How It Works ▶
//               </button>
//             </div>

//             {/* Features */}
//             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
              
//               <div className="flex gap-4">
//                 <div className="w-14 h-14 rounded-full border border-[#504915] bg-[#111522] flex items-center justify-center text-[#debc77] text-2xl">
//                   🛡
//                 </div>

//                 <div>
//                   <h4 className="text-white font-semibold">
//                     Verified Trust
//                   </h4>

//                   <p className="text-white/60 text-sm mt-1">
//                     Real people. Real reputation.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="w-14 h-14 rounded-full border border-[#504915] bg-[#111522] flex items-center justify-center text-[#debc77] text-2xl">
//                   🧠
//                 </div>

//                 <div>
//                   <h4 className="text-white font-semibold">
//                     AI-Powered
//                   </h4>

//                   <p className="text-white/60 text-sm mt-1">
//                     Smart scoring based on behavior.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="w-14 h-14 rounded-full border border-[#504915] bg-[#111522] flex items-center justify-center text-[#debc77] text-2xl">
//                   🔒
//                 </div>

//                 <div>
//                   <h4 className="text-white font-semibold">
//                     Privacy First
//                   </h4>

//                   <p className="text-white/60 text-sm mt-1">
//                     You own your data always.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="w-14 h-14 rounded-full border border-[#504915] bg-[#111522] flex items-center justify-center text-[#debc77] text-2xl">
//                   🌍
//                 </div>

//                 <div>
//                   <h4 className="text-white font-semibold">
//                     Borderless
//                   </h4>

//                   <p className="text-white/60 text-sm mt-1">
//                     Opportunities without limits.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Earth Image */}
//             <img
//               src="/earth.png"
//               alt=""
//               className="
//                 absolute
//                 -bottom-40
//                 left-0
//                 w-full
//                 max-w-5xl
//                 opacity-90
//                 pointer-events-none
//                 select-none
//               "
//             />
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="relative flex justify-center lg:justify-end">
            
//             {/* Phone Mockup */}
//             <div className="relative z-20">
//               <img
//                 src="/mobile-mockup.png"
//                 alt="Phone Mockup"
//                 className="
//                   w-[300px]
//                   sm:w-[360px]
//                   md:w-[420px]
//                   lg:w-[480px]
//                   object-contain
//                   drop-shadow-[0_0_60px_rgba(5,47,248,0.35)]
//                 "
//               />

//               {/* Floating Rating Circle */}
//               <div
//                 className="
//                   absolute
//                   top-1/3
//                   -right-8
//                   bg-black/90
//                   border
//                   border-[#debc77]
//                   w-36
//                   h-36
//                   rounded-full
//                   flex
//                   flex-col
//                   items-center
//                   justify-center
//                   shadow-[0_0_40px_rgba(222,188,119,0.25)]
//                 "
//               >
//                 <span className="text-[#debc77] text-5xl font-bold">
//                   4.8
//                 </span>

//                 <span className="text-[#debc77] text-lg">
//                   ★★★★★
//                 </span>

//                 <span className="text-white/70 text-sm mt-1">
//                   1,250 score
//                 </span>
//               </div>
//             </div>

//             {/* Bottom Users Card */}
//             <div
//               className="
//                 absolute
//                 bottom-0
//                 right-0
//                 md:right-10
//                 bg-[#0b0f1d]/95
//                 border
//                 border-white/10
//                 rounded-2xl
//                 px-6
//                 py-4
//                 flex
//                 items-center
//                 gap-5
//                 backdrop-blur-xl
//                 shadow-2xl
//               "
//             >
//               <div>
//                 <h4 className="text-[#debc77] text-3xl font-bold">
//                   10,000+
//                 </h4>

//                 <p className="text-white/70 text-sm">
//                   early believers building the future
//                 </p>
//               </div>

//               {/* User Images */}
//               <div className="flex -space-x-4">
//                 <img
//                   src="/user1.jpg"
//                   alt=""
//                   className="w-12 h-12 rounded-full border-2 border-[#00040d] object-cover"
//                 />

//                 <img
//                   src="/user2.jpg"
//                   alt=""
//                   className="w-12 h-12 rounded-full border-2 border-[#00040d] object-cover"
//                 />

//                 <img
//                   src="/user3.jpg"
//                   alt=""
//                   className="w-12 h-12 rounded-full border-2 border-[#00040d] object-cover"
//                 />

//                 <div
//                   className="
//                     w-12
//                     h-12
//                     rounded-full
//                     border-2
//                     border-[#504915]
//                     bg-black
//                     flex
//                     items-center
//                     justify-center
//                     text-[#debc77]
//                     text-xl
//                   "
//                 >
//                   +
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
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
        pt-32
        pb-20
        bg-[#00040d]
      "
    >
      {/* FULL BACKGROUND IMAGE */}
      <img
        src="/Home.png"
        alt=""
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
          pointer-events-none
          select-none
        "
      />

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          
          {/* Tags */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="border border-[#504915] bg-[#0b0f1d]/80 backdrop-blur-md text-[#debc77] px-4 py-2 rounded-lg text-sm font-medium">
              🔒 EARLY ACCESS
            </div>

            <div className="border border-white/10 bg-[#0b0f1d]/80 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-medium">
              🔒 Invite Only
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-white font-bold leading-[0.95] tracking-tight">
            <span className="block text-5xl md:text-7xl">
              CirCool
            </span>

            <span className="block text-5xl md:text-7xl text-[#0d46ff] mt-2">
              is the First
            </span>

            <span className="block text-5xl md:text-7xl mt-2">
              Social Scoring Network
            </span>
          </h1>

          {/* Description */}
          <p className="text-white/75 text-lg md:text-xl leading-relaxed mt-8 max-w-2xl">
            CirCool is the first social scoring ecosystem where
            digital reputation, meaningful connections, and trusted
            interactions unlock real opportunities in life and business.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            
            {/* Join Button */}
            <button
              className="
                bg-[#052ff8]
                hover:bg-white
                hover:text-[#052ff8]
                text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                transition-all
                duration-300
                shadow-[0_0_30px_rgba(5,47,248,0.35)]
              "
            >
              Join the Waiting List →
            </button>

            {/* Prototype Button */}
            <button
              className="
                border
                border-[#504915]
                text-[#debc77]
                hover:bg-[#debc77]
                hover:text-black
                px-8
                py-4
                rounded-xl
                font-semibold
                transition-all
                duration-300
                flex
                items-center
                gap-3
                bg-black/20
                backdrop-blur-md
              "
            >
              ▶ View Prototype ↗
            </button>

            {/* How It Works */}
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
                font-semibold
                transition-all
                duration-300
              "
            >
              See How It Works ▶
            </button>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full border border-[#504915] bg-[#111522]/90 backdrop-blur-md flex items-center justify-center text-[#debc77] text-2xl">
                🛡
              </div>

              <div>
                <h4 className="text-white font-semibold">
                  Verified Trust
                </h4>

                <p className="text-white/60 text-sm mt-1">
                  Real people. Real reputation.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full border border-[#504915] bg-[#111522]/90 backdrop-blur-md flex items-center justify-center text-[#debc77] text-2xl">
                🧠
              </div>

              <div>
                <h4 className="text-white font-semibold">
                  AI-Powered
                </h4>

                <p className="text-white/60 text-sm mt-1">
                  Smart scoring based on behavior.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full border border-[#504915] bg-[#111522]/90 backdrop-blur-md flex items-center justify-center text-[#debc77] text-2xl">
                🔒
              </div>

              <div>
                <h4 className="text-white font-semibold">
                  Privacy First
                </h4>

                <p className="text-white/60 text-sm mt-1">
                  You own your data always.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full border border-[#504915] bg-[#111522]/90 backdrop-blur-md flex items-center justify-center text-[#debc77] text-2xl">
                🌍
              </div>

              <div>
                <h4 className="text-white font-semibold">
                  Borderless
                </h4>

                <p className="text-white/60 text-sm mt-1">
                  Opportunities without limits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}