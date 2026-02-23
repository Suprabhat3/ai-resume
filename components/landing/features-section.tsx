import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Zap, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export function FeaturesSection() {
  return (
    <section className="px-6 py-32 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
          Powerful Tools for Your{" "}
          <span className="text-emerald-500">Career</span>
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Everything you need to stand out from the crowd and secure interviews
          at top companies.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <FadeIn
          delay={0}
          className="group relative border border-slate-200 bg-white/60 p-8 hover:bg-white/90 transition-all duration-300 backdrop-blur-sm overflow-hidden flex flex-col items-start gap-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/5 rounded-none"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <FileText className="w-32 h-32 text-emerald-600" />
          </div>
          <div className="p-4 bg-emerald-100 text-emerald-600 ring-1 ring-emerald-200 mb-2 relative z-10 rounded-none">
            <FileText className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-900 relative z-10">
            AI Resume Builder
          </h3>
          <p className="text-slate-600 leading-relaxed mb-8 flex-1 relative z-10">
            Start from scratch. Answer a few questions and our AI perfectly
            structures, formats, and generates impactful bullet points tailored
            for you.
          </p>
          <Button
            asChild
            variant="link"
            className="p-0 h-auto text-emerald-600 hover:text-emerald-700 font-semibold relative z-10 rounded-none"
          >
            <Link href="/builder" className="inline-flex items-center">
              Start Building{" "}
              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </FadeIn>

        {/* Feature 2 */}
        <FadeIn
          delay={150}
          className="group relative border border-slate-200 bg-white/60 p-8 hover:bg-white/90 transition-all duration-300 backdrop-blur-sm overflow-hidden flex flex-col items-start gap-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-teal-500/5 rounded-none"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Zap className="w-32 h-32 text-teal-600" />
          </div>
          <div className="p-4 bg-teal-100 text-teal-600 ring-1 ring-teal-200 mb-2 relative z-10 rounded-none">
            <Zap className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-900 relative z-10">
            Smart Optimizer
          </h3>
          <p className="text-slate-600 leading-relaxed mb-8 flex-1 relative z-10">
            Upload your clunky, old resume. We'll reconstruct sentences for
            maximum impact, action-verb usage, and keyword density.
          </p>
          <Button
            asChild
            variant="link"
            className="p-0 h-auto text-teal-600 hover:text-teal-700 font-semibold relative z-10 rounded-none"
          >
            <Link href="/optimizer" className="inline-flex items-center">
              Optimize Now{" "}
              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </FadeIn>

        {/* Feature 3 */}
        <FadeIn
          delay={300}
          className="group relative border border-slate-200 bg-white/60 p-8 hover:bg-white/90 transition-all duration-300 backdrop-blur-sm overflow-hidden flex flex-col items-start gap-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/5 rounded-none"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <ShieldCheck className="w-32 h-32 text-cyan-600" />
          </div>
          <div className="p-4 bg-cyan-100 text-cyan-600 ring-1 ring-cyan-200 mb-2 relative z-10 rounded-none">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-900 relative z-10">
            ATS Score Checker
          </h3>
          <p className="text-slate-600 leading-relaxed mb-8 flex-1 relative z-10">
            Stop guessing. Upload your resume and job description to get a
            granular compatibility report and actionable fixes before you apply.
          </p>
          <Button
            asChild
            variant="link"
            className="p-0 h-auto text-cyan-600 hover:text-cyan-700 font-semibold relative z-10 rounded-none"
          >
            <Link href="/ats-checker" className="inline-flex items-center">
              Check Score{" "}
              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
