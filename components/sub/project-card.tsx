import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative flex flex-col h-full overflow-hidden rounded-xl shadow-lg border border-[#2A0E61] bg-[#0300145e] backdrop-blur-md hover:border-[#7042f88b] transition-colors duration-300 group"
    >
      <Image
        src={src}
        alt={title}
        width={1200}
        height={630}
        className="w-full h-auto object-cover border-b border-[#2A0E61]"
      />

      <div className="relative flex flex-col flex-1 p-5">
        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
};
