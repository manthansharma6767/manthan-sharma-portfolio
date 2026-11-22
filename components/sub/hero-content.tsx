"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Manthan Sharma
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] leading-relaxed"
        >
          Backend engineer and CSE student at Ramdeobaba University. I build
          scalable microservices with Java and Spring Boot, design secure REST
          APIs, and optimize relational databases — turning complex
          requirements into clean, production-ready systems.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col gap-3 text-gray-300 mt-4 text-lg"
        >
          <div className="flex items-center gap-3">
            <span className="text-purple-500 text-xl">✦</span>
            <span>Scalable Backends with Java & Spring Boot</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-cyan-500 text-xl">✦</span>
            <span>Microservices, REST APIs & Secure Auth</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-purple-500 text-xl">✦</span>
            <span>System Design & Distributed Architectures</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-[3px] border-[#7042f88b] shadow-[0_0_40px_rgba(112,66,248,0.4)]">
          <Image
            src="/Profile.jpeg"
            alt="Manthan Sharma"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
