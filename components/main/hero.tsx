import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div
      id="about-me"
      className="relative flex flex-col h-[800px] w-full justify-center scroll-mt-24"
    >
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-250px] md:top-[-340px] left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
