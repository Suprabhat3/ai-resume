export function StatsSection() {
  return (
    <section className="border-y border-slate-200/60 bg-white/40 backdrop-blur-xl relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-slate-200">
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-emerald-600 mb-2">98%</span>
          <span className="text-sm text-slate-500 font-medium">
            ATS Pass Rate
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-emerald-600 mb-2">10x</span>
          <span className="text-sm text-slate-500 font-medium">
            Faster Creation
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-emerald-600 mb-2">50k+</span>
          <span className="text-sm text-slate-500 font-medium">
            Resumes Built
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-emerald-600 mb-2">
            Top 1%
          </span>
          <span className="text-sm text-slate-500 font-medium">
            Industry Standards
          </span>
        </div>
      </div>
    </section>
  );
}
