"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { generateResumeContent } from "./actions";
import {
  ArrowLeft,
  ArrowRight,
  Download,
  Loader2,
  Sparkles,
  Printer,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { ResumePreview } from "@/components/resume-preview";
import { createClient } from "@/utils/supabase/client";
import { useEffect } from "react";

export default function BuilderPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    personal: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      targetRole: "",
    },
    experience: "", // Text area for raw experience dump
    education: "", // Text area for raw education dump
    skills: "", // Comma separated
  });

  const [generatedResume, setGeneratedResume] = useState<any>(null);

  useEffect(() => {
    const pendingResume = localStorage.getItem("pendingBuilderResume");
    if (pendingResume) {
      try {
        setGeneratedResume(JSON.parse(pendingResume));
        setStep(5);
        localStorage.removeItem("pendingBuilderResume");
      } catch (e) {}
    }
  }, []);

  const handleNext = () => setStep((s) => s + 1);
  const handlePrev = () => setStep((s) => s - 1);

  const handleChange = (section: string, field: string, value: string) => {
    if (section === "personal") {
      setFormData((prev) => ({
        ...prev,
        personal: { ...prev.personal, [field]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [section]: value }));
    }
  };

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    const res = await generateResumeContent(formData);
    if (res.error) {
      setError(res.error);
    } else {
      setGeneratedResume({ ...formData.personal, ...res.aiGeneratedResume });
      setStep(5); // Preview step
    }
    setLoading(false);
  };

  const handleDownloadAttempt = async () => {
    const supabase = createClient();
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) {
      // Trigger browser print dialog for PDF generation
      window.print();
    } else {
      localStorage.setItem(
        "pendingBuilderResume",
        JSON.stringify(generatedResume),
      );
      router.push("/login?callbackUrl=/builder");
    }
  };

  return (
    <div className="container max-w-5xl px-4 py-12 mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">AI Resume Builder</h1>
        <p className="text-muted-foreground mt-2">Step {step} of 5</p>
        <div className="w-full bg-secondary h-2 mt-4 rounded-full overflow-hidden">
          <div
            className="bg-primary h-full transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-md mb-6">
          {error}
        </div>
      )}

      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Personal Details</CardTitle>
            <CardDescription>
              Let's start with your contact information and target role.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input
                value={formData.personal.fullName}
                onChange={(e) =>
                  handleChange("personal", "fullName", e.target.value)
                }
                placeholder="John Doe"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Email</Label>
                <Input
                  value={formData.personal.email}
                  onChange={(e) =>
                    handleChange("personal", "email", e.target.value)
                  }
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input
                  value={formData.personal.phone}
                  onChange={(e) =>
                    handleChange("personal", "phone", e.target.value)
                  }
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Location</Label>
                <Input
                  value={formData.personal.location}
                  onChange={(e) =>
                    handleChange("personal", "location", e.target.value)
                  }
                  placeholder="New York, NY"
                />
              </div>
              <div className="space-y-2">
                <Label>Target Role</Label>
                <Input
                  value={formData.personal.targetRole}
                  onChange={(e) =>
                    handleChange("personal", "targetRole", e.target.value)
                  }
                  placeholder="Software Engineer"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="justify-end">
            <Button onClick={handleNext} disabled={!formData.personal.fullName}>
              Next <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
            <CardDescription>
              Drop in your raw experience. Our AI will format and optimize it
              into professional bullet points.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              className="min-h-[250px]"
              placeholder="e.g. Worked at Google from 2020 to 2023 as a frontend dev. I built the checkout page using React which increased sales by 5%..."
              value={formData.experience}
              onChange={(e) => handleChange("experience", "", e.target.value)}
            />
          </CardContent>
          <CardFooter className="justify-between">
            <Button variant="outline" onClick={handlePrev}>
              <ArrowLeft className="mr-2 w-4 h-4" /> Back
            </Button>
            <Button onClick={handleNext}>
              Next <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
            <CardDescription>
              Where did you study? (Degrees, universities, bootcamps)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              className="min-h-[150px]"
              placeholder="e.g. BS in Computer Science from MIT, graduated 2019."
              value={formData.education}
              onChange={(e) => handleChange("education", "", e.target.value)}
            />
          </CardContent>
          <CardFooter className="justify-between">
            <Button variant="outline" onClick={handlePrev}>
              <ArrowLeft className="mr-2 w-4 h-4" /> Back
            </Button>
            <Button onClick={handleNext}>
              Next <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 4 && (
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
            <CardDescription>
              List your core skills separated by commas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              className="min-h-[100px]"
              placeholder="e.g. JavaScript, React, Node.js, Project Management, Agile"
              value={formData.skills}
              onChange={(e) => handleChange("skills", "", e.target.value)}
            />
          </CardContent>
          <CardFooter className="justify-between">
            <Button variant="outline" onClick={handlePrev}>
              <ArrowLeft className="mr-2 w-4 h-4" /> Back
            </Button>
            <Button onClick={handleGenerate} disabled={loading}>
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4 text-amber-500" />
              )}
              {loading ? "Generating Magic..." : "Generate Resume"}
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 5 && generatedResume && (
        <div className="space-y-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Your AI-Optimized Resume</h2>
            <div className="flex gap-4 print:hidden">
              <Button variant="outline" onClick={() => setStep(4)}>
                Edit Details
              </Button>
              <Button onClick={handleDownloadAttempt} className="bg-primary">
                <Printer className="mr-2 w-4 h-4" /> Download / Print PDF
              </Button>
            </div>
          </div>

          {/* Visual Document Preview */}
          <div className="bg-white text-black p-10 sm:p-14 shadow-2xl rounded-sm mx-auto max-w-[850px] min-h-[1100px]">
            <ResumePreview data={generatedResume} />
          </div>
        </div>
      )}
    </div>
  );
}
