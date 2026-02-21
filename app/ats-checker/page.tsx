"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { analyzeResume } from "./actions";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";

export default function AtsCheckerPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData(e.currentTarget);
    const res = await analyzeResume(formData);

    if (res.error) {
      setError(res.error);
    } else {
      setResult(res.analysis);
    }
    setLoading(false);
  }

  return (
    <div className="container max-w-5xl px-4 py-12 mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-3">
          ATS Resume Checker
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Upload your resume and paste the job description you're applying for.
          Our AI will simulate an Applicant Tracking System and provide a
          compatibility score.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="shadow-sm border-zinc-200 dark:border-zinc-800">
          <CardHeader>
            <CardTitle>Input Details</CardTitle>
            <CardDescription>
              Provide your current resume and the target job description.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="resume">Resume (PDF)</Label>
                <Input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobDescription">Target Job Description</Label>
                <Textarea
                  id="jobDescription"
                  name="jobDescription"
                  placeholder="Paste the job requirements and description here..."
                  className="min-h-[250px] resize-none"
                  required
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
                  "Analyze Resume"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {!result && !error && !loading && (
            <Card className="h-full bg-zinc-50 dark:bg-zinc-900/50 border-dashed flex flex-col items-center justify-center p-12 text-center text-muted-foreground">
              <CheckCircle2 className="h-12 w-12 mb-4 text-zinc-300 dark:text-zinc-700" />
              <p>Your analysis results will appear here.</p>
            </Card>
          )}

          {loading && (
            <Card className="p-12 flex flex-col items-center justify-center text-center space-y-4">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
              <p className="text-lg font-medium">Analyzing your resume...</p>
              <p className="text-sm text-muted-foreground">
                Extracting text and comparing context.
              </p>
            </Card>
          )}

          {error && (
            <Card className="border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-900 p-6">
              <div className="flex items-start gap-4">
                <XCircle className="h-6 w-6 text-red-600 dark:text-red-400 mt-0.5" />
                <div>
                  <h3 className="font-medium text-red-900 dark:text-red-300">
                    Analysis Error
                  </h3>
                  <p className="text-red-700 dark:text-red-400 mt-1">{error}</p>
                </div>
              </div>
            </Card>
          )}

          {result && (
            <Card className="overflow-hidden border-zinc-200 dark:border-zinc-800 shadow-lg">
              <div
                className={`p-6 text-center text-white ${result.score >= 80 ? "bg-green-600" : result.score >= 60 ? "bg-amber-500" : "bg-red-500"}`}
              >
                <h3 className="text-lg font-medium opacity-90 mb-1">
                  ATS Match Score
                </h3>
                <div className="text-6xl font-extrabold tracking-tighter">
                  {result.score}
                  <span className="text-3xl opacity-70">%</span>
                </div>
              </div>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Feedback summary
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {result.feedback}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm mb-3 flex items-center text-green-600 dark:text-green-400">
                      <CheckCircle2 className="h-4 w-4 mr-1.5" /> Matching
                      Keywords
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {result.matchingKeywords?.map((kw: string, i: number) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                        >
                          {kw}
                        </span>
                      )) || (
                        <span className="text-sm text-muted-foreground italic">
                          None found
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-3 flex items-center text-red-600 dark:text-red-400">
                      <XCircle className="h-4 w-4 mr-1.5" /> Missing Keywords
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {result.missingKeywords?.map((kw: string, i: number) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                        >
                          {kw}
                        </span>
                      )) || (
                        <span className="text-sm text-muted-foreground italic">
                          None found
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
