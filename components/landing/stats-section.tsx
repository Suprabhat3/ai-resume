import { FadeIn } from "@/components/ui/fade-in";

export function StatsSection() {
  return (
    <section className="border-y border-slate-200/60 bg-white/40 backdrop-blur-xl relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-slate-200">
        <FadeIn delay={0} className="flex flex-col items-center">
          <span className="text-3xl font-bold text-emerald-600 mb-2">98%</span>
          <span className="text-sm text-slate-500 font-medium">
            ATS Pass Rate
          </span>
        </FadeIn>
        <FadeIn delay={150} className="flex flex-col items-center">
          <span className="text-3xl font-bold text-emerald-600 mb-2">10x</span>
          <span className="text-sm text-slate-500 font-medium">
            Faster Creation
          </span>
        </FadeIn>
        <FadeIn delay={300} className="flex flex-col items-center">
          <span className="text-3xl font-bold text-emerald-600 mb-2">50k+</span>
          <span className="text-sm text-slate-500 font-medium">
            Resumes Built
          </span>
        </FadeIn>
        <FadeIn delay={450} className="flex flex-col items-center">
          <span className="text-3xl font-bold text-emerald-600 mb-2">
            Top 1%
          </span>
          <span className="text-sm text-slate-500 font-medium">
            Industry Standards
          </span>
        </FadeIn>
      </div>
    </section>
  );
}
