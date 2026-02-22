import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative px-6 py-22 md:py-28 flex flex-col items-center text-center max-w-6xl mx-auto z-10">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 border border-emerald-200/50 backdrop-blur-md mb-8 shadow-sm">
        <Sparkles className="w-4 h-4 text-emerald-600" />
        <span className="text-sm font-medium text-slate-700">
          The Next-Gen AI Resume Platform
        </span>
      </div>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1] text-slate-900">
        Get Hired Faster with <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 drop-shadow-sm">
          AI-Powered Precision
        </span>
      </h1>

      <p className="max-w-2xl text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
        Craft an industry-standard, ATS-optimized resume in minutes. Revamp your
        old resume or let our deep-learning engine analyze your ATS score
        instantly.
      </p>

      <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full sm:w-auto">
        <Button
          size="lg"
          className="w-full sm:w-auto h-14 px-8 text-base font-semibold bg-emerald-500 text-white hover:bg-emerald-600 transition-all shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_-10px_rgba(16,185,129,0.5)] group rounded-none"
          asChild
        >
          <Link href="/builder">
            Create New Resume
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="w-full sm:w-auto h-14 px-8 text-base font-semibold border-emerald-200 bg-white/50 backdrop-blur-md text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 transition-all rounded-none"
          asChild
        >
          <Link href="/ats-checker">
            <Target className="mr-2 w-5 h-5 text-emerald-500" />
            Analyze ATS Score
          </Link>
        </Button>
      </div>
    </section>
  );
}
