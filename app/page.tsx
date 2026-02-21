import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, FileText, Sparkles, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-gradient-to-b from-background to-zinc-50 dark:to-zinc-950">
      <section className="container px-4 py-24 mx-auto text-center md:py-32">
        <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400">
          Land Your Dream Job <br className="hidden sm:block" /> with AI Force.
        </h1>
        <p className="max-w-[42rem] mx-auto mt-6 text-xl text-muted-foreground sm:text-2xl">
          Build an industry-standard, ATS-friendly resume in minutes. Optimize
          your old resume or check your ATS score instantly.
        </p>
        <div className="flex flex-col gap-4 mt-10 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="rounded-full shadow-lg h-14 px-8 text-lg"
            asChild
          >
            <Link href="/builder">
              Create New Resume <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full h-14 px-8 text-lg bg-background"
            asChild
          >
            <Link href="/ats-checker">Check ATS Score</Link>
          </Button>
        </div>
      </section>

      <section className="container px-4 py-16 mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="flex flex-col items-center text-center transition-all hover:shadow-xl hover:-translate-y-1">
            <CardHeader className="pt-8">
              <div className="p-4 rounded-full bg-primary/10 mb-4 inline-flex shadow-sm">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">AI Resume Builder</CardTitle>
              <CardDescription className="text-base mt-2">
                Generate a perfect resume from basic information. Our AI tailors
                your bullets to industry standards.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto pb-8">
              <Button asChild variant="ghost" className="hover:bg-primary/5">
                <Link href="/builder">Get Started</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center text-center transition-all hover:shadow-xl hover:-translate-y-1">
            <CardHeader className="pt-8">
              <div className="p-4 rounded-full bg-primary/10 mb-4 inline-flex shadow-sm">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Smart Optimizer</CardTitle>
              <CardDescription className="text-base mt-2">
                Upload your existing resume. Our AI will automatically rewrite
                rules for impact and keyword optimization.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto pb-8">
              <Button asChild variant="ghost" className="hover:bg-primary/5">
                <Link href="/optimizer">Optimize Now</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center text-center transition-all hover:shadow-xl hover:-translate-y-1">
            <CardHeader className="pt-8">
              <div className="p-4 rounded-full bg-primary/10 mb-4 inline-flex shadow-sm">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">ATS Checker</CardTitle>
              <CardDescription className="text-base mt-2">
                Upload your resume and a target job description to get a
                compatibility score and actionable feedback.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto pb-8">
              <Button asChild variant="ghost" className="hover:bg-primary/5">
                <Link href="/ats-checker">Check Score</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
