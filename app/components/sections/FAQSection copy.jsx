import {
  ChevronDown,
  User,
  Users,
  Star,
  Clock3,
  Mail,
  Bell,
  ArrowRight,
} from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      icon: <User size={30} />,
      question: "What is CirCool?",
      answer:
        "CirCool is a social scoring ecosystem that helps users build digital reputation through trusted interactions, networking, gifts, verification, and meaningful engagement.",
    },
    {
      icon: <Users size={30} />,
      question: "Is CirCool a social network?",
      answer:
        "Yes, but it goes beyond traditional social networking. CirCool focuses on reputation, access, trust, and social capital.",
    },
    {
      icon: <Star size={30} />,
      question: "How is the score calculated?",
      answer:
        "The score is based on verified profile information, engagement quality, reputation signals, gifts, trusted connections, and platform activity.",
    },
    {
      icon: <User size={30} />,
      question: "Who is CirCool for?",
      answer:
        "Entrepreneurs, professionals, creators, founders, investors, students, travelers, and anyone who wants to build digital credibility.",
    },
    {
      icon: <Clock3 size={30} />,
      question: "Is CirCool available now?",
      answer:
        "CirCool is currently in early access. You can join the waiting list to be notified when invitations open.",
    },
    {
      icon: <Mail size={30} />,
      question: "Can investors request more information?",
      answer:
        "Yes. Investors can request the pitch deck and early access to the prototype by contacting our team.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#00040d] py-24"
    >
      {/* Background Image */}
      <img
        src="/faq-bg.png"
        alt=""
        className="
          absolute
          top-0
          right-0
          h-full
          w-auto
          max-w-none
          object-cover
          opacity-90
          pointer-events-none
          select-none
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#00040d]/82" />

      {/* Blue Glow */}
      <div
        className="
          absolute
          top-0
          right-[-150px]
          w-[500px]
          h-[500px]
          bg-[#0d46ff]/20
          blur-[160px]
          rounded-full
        "
      />

      {/* Top Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Label */}
          <p className="text-[#0d46ff] uppercase tracking-[0.2em] text-sm font-medium mb-5">
            FAQ
          </p>

          {/* Title */}
          <h2 className="text-white font-bold leading-[0.95] tracking-tight text-5xl md:text-7xl">
            Frequently{" "}
            <span className="text-[#0d46ff]">
              Asked Questions
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-white/75 text-lg md:text-xl leading-relaxed mt-6">
            Everything you need to know about CirCool.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mt-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                bg-[#07101f]/88
                border
                border-white/10
                rounded-3xl
                backdrop-blur-xl
                p-7
                hover:border-[#0d46ff]/40
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
                      border-[#0d46ff]/30
                      bg-[#09111f]
                      flex
                      items-center
                      justify-center
                      text-[#0d46ff]
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
                  className="text-[#0d46ff] shrink-0 mt-1"
                />
              </div>

              {/* Answer */}
              <p className="text-white/65 text-lg leading-relaxed mt-6 pl-[84px]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="
            mt-10
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
            md:flex-row
            items-center
            justify-between
            gap-6
          "
        >
          {/* Left */}
          <div className="flex items-center gap-5">
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
                text-[#0d46ff]
                shrink-0
              "
            >
              <Bell size={36} />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-white text-3xl font-semibold">
                Still have questions?
              </h3>

              <p className="text-white/65 text-lg mt-2">
                We’re here to help. Reach out to our team.
              </p>
            </div>
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
            Contact Us
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}