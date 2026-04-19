"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2, User, FileText, GraduationCap, Lightbulb, FolderGit2 } from "lucide-react";

interface ManualResumeEditorProps {
  data: any;
  onChange: (newData: any) => void;
}

export function ManualResumeEditor({ data, onChange }: ManualResumeEditorProps) {
  const handlePersonalChange = (field: string, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const handleLevelChange = (section: string, index: number, field: string, value: any) => {
    const newList = [...data[section]];
    newList[index] = { ...newList[index], [field]: value };
    onChange({ ...data, [section]: newList });
  };

  const addListItem = (section: string, defaultValue: any) => {
    onChange({ ...data, [section]: [...(data[section] || []), defaultValue] });
  };

  const removeListItem = (section: string, index: number) => {
    onChange({ ...data, [section]: data[section].filter((_: any, i: number) => i !== index) });
  };

  const handleBulletChange = (section: string, itemIndex: number, bulletIndex: number, value: string) => {
    const newList = [...data[section]];
    const newBullets = [...newList[itemIndex].bullets];
    newBullets[bulletIndex] = value;
    newList[itemIndex] = { ...newList[itemIndex], bullets: newBullets };
    onChange({ ...data, [section]: newList });
  };

  const addBullet = (section: string, itemIndex: number) => {
    const newList = [...data[section]];
    newList[itemIndex] = { ...newList[itemIndex], bullets: [...(newList[itemIndex].bullets || []), ""] };
    onChange({ ...data, [section]: newList });
  };

  const removeBullet = (section: string, itemIndex: number, bulletIndex: number) => {
    const newList = [...data[section]];
    newList[itemIndex] = { ...newList[itemIndex], bullets: newList[itemIndex].bullets.filter((_: any, i: number) => i !== bulletIndex) };
    onChange({ ...data, [section]: newList });
  };

  return (
    <div className="space-y-8 pb-32">
      {/* Personal Info */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-emerald-700 font-bold mb-4">
          <User className="w-5 h-5" />
          <h3>Personal Information</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Full Name</Label>
            <Input value={data.fullName || ""} onChange={(e) => handlePersonalChange("fullName", e.target.value)} className="rounded-none border-slate-200" />
          </div>
          <div className="space-y-2">
            <Label>Target Role</Label>
            <Input value={data.targetRole || ""} onChange={(e) => handlePersonalChange("targetRole", e.target.value)} className="rounded-none border-slate-200" />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input value={data.email || ""} onChange={(e) => handlePersonalChange("email", e.target.value)} className="rounded-none border-slate-200" />
          </div>
          <div className="space-y-2">
            <Label>Phone</Label>
            <Input value={data.phone || ""} onChange={(e) => handlePersonalChange("phone", e.target.value)} className="rounded-none border-slate-200" />
          </div>
          <div className="space-y-2">
            <Label>Location</Label>
            <Input value={data.location || ""} onChange={(e) => handlePersonalChange("location", e.target.value)} className="rounded-none border-slate-200" />
          </div>
          <div className="space-y-2">
            <Label>LinkedIn</Label>
            <Input value={data.linkedin || ""} onChange={(e) => handlePersonalChange("linkedin", e.target.value)} className="rounded-none border-slate-200" />
          </div>
          <div className="space-y-2">
            <Label>Portfolio</Label>
            <Input value={data.portfolio || ""} onChange={(e) => handlePersonalChange("portfolio", e.target.value)} className="rounded-none border-slate-200" />
          </div>
          <div className="space-y-2">
            <Label>GitHub</Label>
            <Input value={data.github || ""} onChange={(e) => handlePersonalChange("github", e.target.value)} className="rounded-none border-slate-200" />
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-emerald-700 font-bold mb-2">
          <FileText className="w-5 h-5" />
          <h3>Professional Summary</h3>
        </div>
        <Textarea 
          value={data.summary || ""} 
          onChange={(e) => handlePersonalChange("summary", e.target.value)} 
          className="min-h-[120px] rounded-none border-slate-200 resize-none p-4"
          placeholder="Enter a professional summary..."
        />
      </section>

      {/* Experience */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-700 font-bold">
            <FileText className="w-5 h-5" />
            <h3>Work Experience</h3>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => addListItem("experience", { role: "", company: "", duration: "", bullets: [""] })}
            className="rounded-none text-xs border-emerald-500 text-emerald-700 hover:bg-emerald-50"
          >
            <Plus className="w-4 h-4 mr-1" /> Add Experience
          </Button>
        </div>
        
        <div className="space-y-6">
          {data.experience?.map((exp: any, idx: number) => (
            <div key={idx} className="p-5 border border-slate-200 bg-white shadow-sm relative group">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => removeListItem("experience", idx)}
                className="absolute top-2 right-2 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-1">
                  <Label className="text-xs">Role</Label>
                  <Input value={exp.role} onChange={(e) => handleLevelChange("experience", idx, "role", e.target.value)} className="h-9 rounded-none bg-slate-50 border-slate-200" />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">Company</Label>
                  <Input value={exp.company} onChange={(e) => handleLevelChange("experience", idx, "company", e.target.value)} className="h-9 rounded-none bg-slate-50 border-slate-200" />
                </div>
                <div className="space-y-1 md:col-span-2">
                  <Label className="text-xs">Duration (e.g. Jan 2020 - Present)</Label>
                  <Input value={exp.duration} onChange={(e) => handleLevelChange("experience", idx, "duration", e.target.value)} className="h-9 rounded-none bg-slate-50 border-slate-200" />
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Bullets / Accomplishments</Label>
                  <Button variant="ghost" size="sm" onClick={() => addBullet("experience", idx)} className="h-6 text-[10px] text-emerald-600 hover:text-emerald-700 p-0">
                    <Plus className="w-3 h-3 mr-1" /> Add Bullet
                  </Button>
                </div>
                <div className="space-y-2">
                  {exp.bullets?.map((bullet: string, bIdx: number) => (
                    <div key={bIdx} className="flex gap-2 group/bullet">
                      <Textarea 
                        value={bullet} 
                        onChange={(e) => handleBulletChange("experience", idx, bIdx, e.target.value)} 
                        className="min-h-16 rounded-none text-sm border-slate-200 bg-white resize-none"
                      />
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => removeBullet("experience", idx, bIdx)}
                        className="h-9 w-9 text-slate-300 hover:text-red-500 flex-shrink-0 opacity-0 group-hover/bullet:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-700 font-bold">
            <FolderGit2 className="w-5 h-5" />
            <h3>Projects</h3>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => addListItem("projects", { name: "", description: "", liveLink: "", githubLink: "", bullets: [""] })}
            className="rounded-none text-xs border-emerald-500 text-emerald-700 hover:bg-emerald-50"
          >
            <Plus className="w-4 h-4 mr-1" /> Add Project
          </Button>
        </div>
        
        <div className="space-y-6">
          {data.projects?.map((proj: any, idx: number) => (
            <div key={idx} className="p-5 border border-slate-200 bg-white shadow-sm relative group">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => removeListItem("projects", idx)}
                className="absolute top-2 right-2 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-1">
                  <Label className="text-xs">Project Name</Label>
                  <Input value={proj.name} onChange={(e) => handleLevelChange("projects", idx, "name", e.target.value)} className="h-9 rounded-none bg-slate-50 border-slate-200" />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">Short Description</Label>
                  <Input value={proj.description} onChange={(e) => handleLevelChange("projects", idx, "description", e.target.value)} className="h-9 rounded-none bg-slate-50 border-slate-200" />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">Live Link</Label>
                  <Input value={proj.liveLink} onChange={(e) => handleLevelChange("projects", idx, "liveLink", e.target.value)} className="h-9 rounded-none bg-slate-50 border-slate-200" />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">GitHub Link</Label>
                  <Input value={proj.githubLink} onChange={(e) => handleLevelChange("projects", idx, "githubLink", e.target.value)} className="h-9 rounded-none bg-slate-50 border-slate-200" />
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Project Highlights</Label>
                  <Button variant="ghost" size="sm" onClick={() => addBullet("projects", idx)} className="h-6 text-[10px] text-emerald-600 hover:text-emerald-700 p-0">
                    <Plus className="w-3 h-3 mr-1" /> Add Bullet
                  </Button>
                </div>
                <div className="space-y-2">
                  {proj.bullets?.map((bullet: string, bIdx: number) => (
                    <div key={bIdx} className="flex gap-2 group/bullet">
                      <Textarea 
                        value={bullet} 
                        onChange={(e) => handleBulletChange("projects", idx, bIdx, e.target.value)} 
                        className="min-h-16 rounded-none text-sm border-slate-200 bg-white resize-none"
                      />
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => removeBullet("projects", idx, bIdx)}
                        className="h-9 w-9 text-slate-300 hover:text-red-500 flex-shrink-0 opacity-0 group-hover/bullet:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-700 font-bold">
            <GraduationCap className="w-5 h-5" />
            <h3>Education</h3>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => addListItem("education", { institution: "", degree: "", year: "" })}
            className="rounded-none text-xs border-emerald-500 text-emerald-700 hover:bg-emerald-50"
          >
            <Plus className="w-4 h-4 mr-1" /> Add Education
          </Button>
        </div>
        
        <div className="space-y-4">
          {data.education?.map((edu: any, idx: number) => (
            <div key={idx} className="p-4 border border-slate-200 bg-white shadow-sm relative group grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => removeListItem("education", idx)}
                className="absolute top-2 right-2 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
              <div className="space-y-1">
                <Label className="text-xs">Institution</Label>
                <Input value={edu.institution} onChange={(e) => handleLevelChange("education", idx, "institution", e.target.value)} className="h-9 rounded-none border-slate-200 shadow-none" />
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Degree</Label>
                <Input value={edu.degree} onChange={(e) => handleLevelChange("education", idx, "degree", e.target.value)} className="h-9 rounded-none border-slate-200 shadow-none" />
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Year / Duration</Label>
                <Input value={edu.year} onChange={(e) => handleLevelChange("education", idx, "year", e.target.value)} className="h-9 rounded-none border-slate-200 shadow-none" />
              </div>
            </div>
          ))}
        </div>
      </section>

       {/* Skills */}
       <section className="space-y-4">
        <div className="flex items-center gap-2 text-emerald-700 font-bold mb-2">
          <Lightbulb className="w-5 h-5" />
          <h3>Skills & Expertise</h3>
        </div>
        <div className="p-4 border border-slate-200 bg-white">
          <p className="text-xs text-slate-500 mb-3 uppercase font-semibold tracking-wider">Skills (Separate with commas for best display)</p>
          <Textarea 
            value={Array.isArray(data.skills) ? data.skills.join(", ") : data.skills || ""} 
            onChange={(e) => {
              const skillsArray = e.target.value.split(",").map(s => s.trim());
              handlePersonalChange("skills", skillsArray as any);
            }} 
            className="min-h-[80px] rounded-none border-slate-200 resize-none p-4"
            placeholder="React, Node.js, Python, Project Management..."
          />
        </div>
      </section>
    </div>
  );
}
