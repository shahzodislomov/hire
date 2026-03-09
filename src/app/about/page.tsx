"use client";

import { useState } from "react";
import CastleDiorama from "@/components/ui/CastleDiorama";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Card from "@/components/ui/Card";

// Shahzod's timeline matches the "Castle Animation" stops
const timelineEvents = [
  { year: "2023", title: "Started Coding Journey", description: "Wrote my first lines of HTML & CSS." },
  { year: "2023", title: "Joined Astrum Academy", description: "Enrolled in Computer Science at Astrum IT Academy, Uzbekistan." },
  { year: "2024", title: "Mastering JavaScript", description: "Dove deep into JS, React, and building UI clones like Trello." },
  { year: "2025", title: "Content Creation", description: "Started sharing my tech learnings on Telegram @wenaco_dev." },
  { year: "Present", title: "Full-Stack & Next.js", description: "Building scalable web platforms and intelligent agents." },
];

export default function AboutPage() {
  const [activeStep, setActiveStep] = useState(0); // Start at 2023

  const nextStep = () => setActiveStep(prev => Math.min(prev + 1, timelineEvents.length - 1));
  const prevStep = () => setActiveStep(prev => Math.max(prev - 1, 0));

  const currentEvent = timelineEvents[activeStep];

  return (
    <div className="min-h-screen pt-32 pb-32 px-6 max-w-7xl mx-auto flex flex-col gap-24">
      {/* Hero Title */}
      <section className="text-center max-w-3xl mx-auto flex flex-col gap-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          My journey <br />
          <span className="text-gray-500 text-4xl md:text-6xl">& the principles</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mt-4 leading-relaxed">
          Driven by a continuous passion for building performant digital experiences and learning in public.
        </p>
      </section>

      {/* 3D Diorama & Timeline Section */}
      <section className="relative w-full aspect-square md:aspect-video max-h-[70vh] rounded-3xl overflow-hidden group">
        
        {/* The WebGL Canvas */}
        <div className="absolute inset-0">
           <CastleDiorama />
        </div>

        {/* Timeline Overlay Layer */}
        <div className="absolute bottom-0 inset-x-0 p-6 md:p-10 flex flex-col md:flex-row justify-between items-end md:items-center gap-6 pointer-events-none">
          
          {/* Timeline Info Card */}
          <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl w-full md:max-w-md pointer-events-auto transform transition-all">
            <div className="text-[var(--color-accent)] font-bold text-lg mb-2">{currentEvent.year}</div>
            <h3 className="text-2xl font-semibold text-white mb-2">{currentEvent.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{currentEvent.description}</p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4 pointer-events-auto">
             <button 
               onClick={prevStep}
               disabled={activeStep === 0}
               className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all"
             >
               <ArrowLeft />
             </button>
             <button 
               onClick={nextStep}
               disabled={activeStep === timelineEvents.length - 1}
               className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all"
             >
               <ArrowRight />
             </button>
          </div>
        </div>

      </section>

      {/* Grid Content Section (Story / Skills / Values) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Story */}
        <Card className="flex flex-col gap-6 p-8 md:p-10">
          <div className="text-xs font-bold tracking-wider text-gray-500 uppercase">My Story</div>
          <h2 className="text-3xl font-bold text-white leading-tight">From curiosity to robust engineering.</h2>
          <div className="text-gray-400 space-y-4 text-sm leading-relaxed">
             <p>I am Shahzod Islomov, a software engineer with roots in Uzbekistan. My formal education in Computer Science at Astrum IT Academy gave me the foundational theory, but my hands-on clones and side-projects built my practical expertise.</p>
             <p>I strongly advocate for #learninginpublic. Sharing knowledge via Telegram and GitHub not only solidifies my own understanding but helps others navigate the often-complex world of web development.</p>
          </div>
        </Card>

        {/* Skills */}
        <div className="flex flex-col gap-8">
          <Card className="flex flex-col gap-6 p-8 md:p-10 flex-1">
             <div className="text-xs font-bold tracking-wider text-gray-500 uppercase">Arsenal</div>
             <h2 className="text-2xl font-bold text-white">Core Technologies</h2>
             <div className="flex flex-wrap gap-2 mt-2">
                {["TypeScript", "JavaScript", "React.js", "Next.js", "Redux", "Tailwind CSS", "Node.js", "HTML/CSS"].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300">
                    {skill}
                  </span>
                ))}
             </div>
          </Card>

          <Card className="flex flex-col gap-4 p-8 flex-1 border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5">
            <h2 className="text-xl font-bold text-white">Currently Learning</h2>
             <ul className="space-y-3">
               <li className="flex items-center gap-3 text-sm text-gray-300">
                 <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" /> Advanced Data Structures & Algorithms
               </li>
               <li className="flex items-center gap-3 text-sm text-gray-300">
                 <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" /> AI Agents & LLM Integration
               </li>
             </ul>
          </Card>
        </div>

      </section>

      {/* Bottom CTA */}
      <section className="text-center py-20 border-t border-white/10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Let's build something together.</h2>
        <div className="flex justify-center gap-4">
          <Link
            href="/contact"
            className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition-colors"
          >
            Get in touch
          </Link>
          <Link
            href="/projects"
            className="bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold border border-white/10 hover:bg-white/20 transition-colors"
          >
            View projects
          </Link>
        </div>
      </section>

    </div>
  );
}
