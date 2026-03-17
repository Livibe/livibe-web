"use client";

import Image from "next/image";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const featuredTeam = [
    {
      name: "Apicha (Japan) Junyathanakron",
      role: "CEO & Co-Founder",
      summary:
        "Experience in hardware development, software and firmware engineering for IoT connectivity and infrared communication",
      imageProfile: "/team/japan.png",

      accent: "from-[#776AFF] to-[#46C7DE]",
      orbFrom: "#776AFF",
      orbTo: "#46C7DE",
      initials: "AJ",
      linkedinUrl: "https://www.linkedin.com/in/apicha-junyatanakron-3b76a3207",
    },
    {
      name: "Trong (Muan) Longsomboon",
      role: "Chairman & Co-Founder",
      summary:
        "Experience in business transformation and corporate innovation, including worked in Venture Builder & Venture Capital",
      imageProfile: "/team/muan.jpg",
      accent: "from-[#FF6033] to-[#CE56CF]",
      orbFrom: "#FF6033",
      orbTo: "#CE56CF",
      initials: "TL",
      linkedinUrl: "https://www.linkedin.com/in/trong-muan-longsomboon",
    },
    {
      name: "Tonkla (Kla) Wongpinijwardom",
      role: "Head of Sales",
      summary: "Experience in sales and business development in service industries, specializing in client relations and strategic growth",
      imageProfile: "/team/tonkla.jpg",
      accent: "from-[#7FD161] to-[#6DC095]",
      orbFrom: "#7FD161",
      orbTo: "#6DC095",
      initials: "TK",
      linkedinUrl:
        "https://www.linkedin.com/in/tonkla-wongpinijwarodom-34815528a",
    },
  ];

  const teamList = [];
  //   {
  //     name: "Tonkla (Kla) Wongpinijwardom",
  //     role: "Sales Manager",
  //     initials: "TW",
  //     accent: "from-[#21D285] to-[#46C7DE]",
  //   },
  //   {
  //     name: "Kittinut (Tong) Junyatanakron",
  //     role: "Senior Engineer",
  //     initials: "KJ",
  //     accent: "from-[#A500FF] to-[#776AFF]",
  //   },
  //   {
  //     name: "Ruangkhao Chuapakka",
  //     role: "Product Designer",
  //     initials: "RC",
  //     accent: "from-[#FF6033] to-[#FFE144]",
  //   },
  //   {
  //     name: "Rattasin (Maigolf) Porapan",
  //     role: "Product Designer",
  //     initials: "RP",
  //     accent: "from-[#46C7DE] to-[#776AFF]",
  //   },
  // ];

  return (
    <main className="relative w-full overflow-hidden text-white">
      <AnimatedBackground />

      <div className="container mx-auto px-6 pb-24 pt-28 sm:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mx-auto max-w-6xl"
        >
          <div className="text-sm font-semibold uppercase tracking-widest text-white/60">
            About Us
          </div>
          <div className="mt-3 font-taviraj text-4xl font-medium text-white sm:text-6xl">
            We build immersive live event experiences
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 p-8 backdrop-blur lg:col-span-12 lg:p-12">
              <div className="text-2xl font-semibold uppercase tracking-widest text-brand-cyan">
                What We Do
              </div>
              <div className="mt-4 text-lg text-white sm:text-xl">
                We shape the future of live event experiences through immersive
                hardware technology.
              </div>
              <div className="mt-4 text-lg text-white sm:text-xl">
                Our platform empowers audiences to actively engage in live
                performances, synchronizing movement, emotion, and energy to
                transform events into unforgettable shared moments.
              </div>
            </div>
          </div>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInUp}
            className="mt-16"
          >
            <div className="text-4xl font-semibold text-white sm:text-5xl">
              Team
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-12">
              <div className="grid gap-6 sm:grid-cols-2 lg:col-span-12">
                {featuredTeam.map((member) => (
                  <div
                    key={member.name}
                    className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 p-8 backdrop-blur"
                  >
                    <div
                      className="absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-40 blur-2xl"
                      style={{
                        background: `linear-gradient(135deg, ${member.orbFrom}, ${member.orbTo})`,
                      }}
                    />
                    <div className="relative z-10">
                      <div className="relative mx-auto h-36 w-36 sm:mx-0">
                        <Image
                          fill
                          src={member.imageProfile}
                          alt={member.name}
                          className="rounded-full object-cover"
                          sizes="190px"
                        />
                      </div>
                      <div className="mt-6 text-xl font-semibold text-white">
                        {member.name}
                      </div>
                      <div className="mt-1 text-sm font-medium text-white/70">
                        {member.role}
                      </div>
                      <div className="mt-5 text-sm leading-relaxed text-white/70">
                        {member.summary}
                      </div>

                      {"linkedinUrl" in member && member.linkedinUrl && (
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          <LinkedInIcon />
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className="lg:col-span-4">
                <div className="rounded-[2.5rem] border border-white/10 bg-black/40 p-6 backdrop-blur sm:p-8">
                  <div className="text-xs font-semibold uppercase tracking-widest text-white/60">
                    Our People
                  </div>
                  <div className="mt-6 grid gap-4">
                    {teamList.map((member) => (
                      <div
                        key={member.name}
                        className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/30 p-4"
                      >
                        <div
                          className={`h-12 w-12 flex-none rounded-full bg-gradient-to-br ${member.accent} flex items-center justify-center text-sm font-semibold text-white`}
                        >
                          {member.initials}
                        </div>
                        <div className="min-w-0">
                          <div className="truncate text-sm font-semibold text-white">
                            {member.name}
                          </div>
                          <div className="mt-1 text-xs text-white/70">
                            {member.role}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}
            </div>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInUp}
            className="mt-16"
          >
            <div className="text-4xl font-semibold text-white sm:text-5xl">
              Our Offices
            </div>
            {/* <div className="mt-3 text-lg text-white/80 sm:text-xl">
              Our Company Locations
            </div> */}

            <div className="mt-8 overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 p-6 backdrop-blur sm:p-8">
              <div className="relative h-[320px] w-full sm:h-[420px]">
                <Image
                  fill
                  src="/assets/location.png"
                  alt="Livibe company locations in Thailand and Hong Kong"
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 900px, 100vw"
                />
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="text-white/80"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0.5 24h4V7.98h-4V24zM8 7.98h3.8v2.19h.05c.53-1 1.82-2.19 3.74-2.19C19.6 7.98 24 10.17 24 16.03V24h-4v-7.05c0-1.68-.03-3.84-2.34-3.84-2.34 0-2.7 1.83-2.7 3.72V24H8V7.98z" />
    </svg>
  );
}
