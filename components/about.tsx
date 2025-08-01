"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-left leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I started coding during my first year of college in 2020 as a{" "}
        <span className="font-medium">BSIT student</span>. Right from the start,
        I loved creating websites, especially{" "}
        <span className="font-medium">frontend development</span> because the
        design and animations really amaze me.
      </p>

      <p>
        <span className="italic">My tech stach includes</span>{" "}
        <span className="font-medium">ReactJS</span> ,{" "}
        <span className="font-medium">Next.js</span> ,{" "}
        <span className="font-medium">TypeScript</span>,{" "}
        <span className="font-medium">NodeJS</span>,
        <span className="font-medium">MongoDB</span>,{" "}
        <span className="font-medium">PostgreSQL</span>,{" "}
        <span className="font-medium">Redux</span>,{" "}
        <span className="font-medium">TanStack</span>,{" "}
        <span className="font-medium">TailwindCSS</span>, and{" "}
        <span className="font-medium">MUI</span>. I take pride in building
        dynamic and visually appealing web applications.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games and reading books. These hobbies help me relax and find new
        ideas.
      </p>
    </motion.section>
  );
}
