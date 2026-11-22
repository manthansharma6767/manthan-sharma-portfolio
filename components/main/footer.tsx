import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full bg-[#03001427] backdrop-blur-md text-gray-200 p-[15px] border-t border-[#2A0E61]/50 mt-10 z-[20] relative">
      <div className="w-full flex flex-col items-center justify-center m-auto py-10 px-5">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10 text-center">
          Let&apos;s build something that scales.
        </h2>
        
        <div className="w-full flex flex-row items-start justify-center gap-20 flex-wrap max-w-4xl">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start mb-10"
            >
              <h3 className="font-bold text-[18px] text-white mb-6 uppercase tracking-wider">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center my-[10px] text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  {Icon && <Icon className="text-xl group-hover:scale-110 transition-transform duration-300" />}
                  <span className="text-[15px] ml-[10px] font-medium">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#7042f88b] to-transparent my-8 max-w-4xl" />
        
        <p className="text-sm text-gray-500 text-center tracking-widest uppercase">
          Think in systems · Architect with discipline
        </p>
      </div>
    </div>
  );
};
