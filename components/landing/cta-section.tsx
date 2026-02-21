import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="px-6 py-24 mb-20 relative z-10">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-emerald-100/50 to-teal-100/50 border border-emerald-200/50 p-12 md:p-20 text-center relative overflow-hidden backdrop-blur-lg rounded-none">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-emerald-300/20 blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-teal-300/20 blur-[80px]"></div>

        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 relative z-10">
          Ready to Upgrade Your Career?
        </h2>
        <p className="text-slate-700 text-lg mb-10 max-w-2xl mx-auto relative z-10">
          Join thousands of job seekers who have successfully landed their dream
          roles using our AI platform.
        </p>
        <Button
          size="lg"
          className="h-14 px-10 text-base font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-all shadow-xl relative z-10 rounded-none"
          asChild
        >
          <Link href="/builder">Start For Free Today</Link>
        </Button>
      </div>
    </section>
  );
}
