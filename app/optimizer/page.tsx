"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { optimizeResume } from "./actions";
import { Loader2, Download, Sparkles, Printer } from "lucide-react";
import { useRouter } from "next/navigation";
import { ResumePreview } from "@/components/resume-preview";
import { createClient } from "@/utils/supabase/client";

export default function OptimizerPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const pendingResume = localStorage.getItem("pendingOptimizerResume");
    if (pendingResume) {
      try {
        setResult(JSON.parse(pendingResume));
        localStorage.removeItem("pendingOptimizerResume");
      } catch (e) {}
    }
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData(e.currentTarget);
    const res = await optimizeResume(formData);

    if (res.error) {
      setError(res.error);
    } else {
      setResult(res.optimizedResume);
    }
    setLoading(false);
  }

  const handleDownloadAttempt = async () => {
    const supabase = createClient();
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) {
      window.print();
    } else {
      localStorage.setItem("pendingOptimizerResume", JSON.stringify(result));
      router.push("/login?callbackUrl=/optimizer");
    }
  };

  return (
    <div className="container max-w-5xl px-4 py-12 mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-3">
          AI Resume Optimizer
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Upload your existing resume and let our AI transform your bullet
          points into punchy, metric-driven achievements.
        </p>
      </div>

      {!result ? (
        <Card className="max-w-2xl mx-auto shadow-sm">
          <CardHeader>
            <CardTitle>Upload Resume</CardTitle>
            <CardDescription>We accept standard PDF formats.</CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6 text-sm">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="resume">Current Resume (PDF)</Label>
                <Input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="context">Additional Context (Optional)</Label>
                <Textarea
                  id="context"
                  name="context"
                  placeholder="e.g. Focus more on my leadership experience, or I'm targeting a Senior Product Manager role at FAANG..."
                  className="min-h-[100px] resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 text-md"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-5 w-5 text-amber-400" />
                )}
                {loading ? "Optimizing..." : "Optimize Now"}
              </Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="flex flex-col sm:flex-row justify-between items-center bg-zinc-50 dark:bg-zinc-900 border p-4 rounded-lg">
            <div>
              <h2 className="text-xl font-semibold">Optimization Complete!</h2>
              <p className="text-sm text-muted-foreground">
                Your resume has been rewritten for maximum impact.
              </p>
            </div>
            <div className="flex gap-4 mt-4 sm:mt-0 print:hidden">
              <Button variant="outline" onClick={() => setResult(null)}>
                Start Over
              </Button>
              <Button
                onClick={handleDownloadAttempt}
                className="bg-primary shadow-md"
              >
                <Printer className="mr-2 w-4 h-4" /> Download / Print PDF
              </Button>
            </div>
          </div>

          <div className="bg-white text-black p-10 sm:p-14 shadow-2xl rounded-sm mx-auto max-w-[850px] min-h-[1100px]">
            <ResumePreview data={result} />
          </div>
        </div>
      )}
    </div>
  );
}
