import {
  ChevronDown,
  User,
  Users,
  Star,
  Clock3,
  Mail,
  Bell,
  ArrowRight,
  Share2,
} from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      icon: <User size={30} />,
      question: "What is CirCool?",
      answer:
        "CirCool is building the reputation infrastructure for the next generation of the internet - transforming digital interactions into measurable trust, access, and credibility.",
    },
    {
      icon: <Share2 size={30} />,
      question: "Is CirCool a social network?",
      answer:
        "Not in the traditional sense. CirCool goes beyond followers and content by creating a reputation-driven social infrastructure powered by trust, credibility, and meaningful interactions.",
    },
    {
      icon: <Star size={30} />,
      question: "How is the reputation measured?",
      answer:
        "CirCool's reputation engine analyzes verification, trust signals, engagement quality, network credibility, and behavioral intelligence to create a dynamic layer of digital reputation.",
    },
    {
      icon: <Users size={30} />,
      question: "Who is CirCool for?",
      answer:
        "CirCool is designed for ambitious individuals building influence, credibility, and meaningful connections in the digital world from founders and creators to investors, professionals, and global communities.",
    },
    {
      icon: <Clock3 size={30} />,
      question: "Is CirCool available now?",
      answer:
        "CirCool is currently in private early access. Selected users and investors can request access to the prototype and join the waiting list for upcoming releases.",
    },
    {
      icon: <Mail size={30} />,
      question: "Can investors request more information?",
      answer:
        "Yes. Qualified investors and strategic partners can request access to the investor deck, private prototype, and early-stage visión materials by contacting our team.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#00040d] py-10"
    >
      {/* Background Image */}
      <img
        src="/faq.png"
        alt=""
        className="
        hidden md:block
          absolute
          top-0
          bottom-0
          left-0
          h-full
          w-auto
          max-w-none
          object-contain
          opacity-90
          pointer-events-none
          select-none
          -translate-y-15
        "
      />


      {/* Mobile Image */}
<img
  src="/faqmobile.png"
  alt=""
  className="
    block md:hidden
    absolute
    inset-0
    w-full
    h-full
    object-cover
    object-center
    opacity-70
    pointer-events-none
    select-none
  "
/>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-[#00040d]/82" /> */}

      {/* Blue Glow */}
      {/* <div
        className="
          absolute
          top-0
          right-[-150px]
          w-[500px]
          h-[500px]
          bg-[#0056ff]/20
          blur-[160px]
          rounded-full
        "
      /> */}

      {/* Top Line */}
      {/* <div className="absolute top-0 left-0 w-full h-px bg-white/10" /> */}

      {/* Content */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Label */}
          <p className="text-[#0056ff] uppercase tracking-[0.2em] text-sm font-medium mb-5">
            FAQ
          </p>

          {/* Title */}
          <h2 className="text-white font-bold leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl md:whitespace-nowrap">
            Reputation is becoming{" "}
            <span className="text-[#0056ff]">
              Measurable
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-white/75 text-lg md:text-xl leading-relaxed mt-6">
            CirCool is building the reputation infrastructure for the next generation of the Internet.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                bg-[#07101f]/88
                border
                border-white/10
                rounded-3xl
                backdrop-blur-xl
                p-5
                hover:border-[#0056ff]/40
                transition-all
                duration-300
              "
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-4">
                {/* Left */}
                <div className="flex gap-5">
                  {/* Icon */}
                  <div
                    className="
                      w-16
                      h-16
                      rounded-full
                      border
                      border-[#0056ff]/30
                      bg-[#09111f]
                      flex
                      items-center
                      justify-center
                      text-[#0056ff]
                      shrink-0
                    "
                  >
                    {faq.icon}
                  </div>

                  {/* Question */}
                  <h3 className="text-white text-2xl font-semibold leading-tight">
                    {faq.question}
                  </h3>
                </div>

                {/* Arrow */}
                <ChevronDown
                  size={22}
                  className="text-[#0056ff] shrink-0 mt-1"
                />
              </div>

              {/* Answer */}
              <p className="text-white/65 text-lg leading-relaxed mt-1 pl-[84px]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}