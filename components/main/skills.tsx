"use client";

import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import { SKILL_CATEGORIES } from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      <div className="w-full max-w-[1200px] flex flex-row flex-wrap justify-center gap-10 mt-10 z-[20]">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="flex flex-col items-center bg-[#0300145e] border border-[#7042f861] backdrop-blur-md rounded-2xl p-6 shadow-lg shadow-[#2A0E61]/50 w-full md:w-[45%]"
          >
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-2xl font-bold mb-6">
              {category.title}
            </h2>
            <div className="flex flex-row justify-center flex-wrap gap-8">
              {category.skills.map((skill, i) => (
                <SkillDataProvider
                  key={skill.skill_name}
                  src={skill.src}
                  name={skill.skill_name}
                  index={i}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
