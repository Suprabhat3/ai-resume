import { GridPattern, AbstractRings } from "@/components/landing/illustrations";

export function BackgroundAmbience() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-300/30 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal-300/30 blur-[120px]" />
      <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-cyan-300/30 blur-[100px]" />

      <GridPattern className="absolute inset-0 w-full h-full opacity-30 mix-blend-overlay" />
      <AbstractRings className="hidden md:block absolute -top-[20%] -right-[20%] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] opacity-40" />
      <AbstractRings className="hidden md:block absolute top-[40%] -left-[10%] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] opacity-30" />

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] pointer-events-none mix-blend-overlay"></div>
    </div>
  );
}
