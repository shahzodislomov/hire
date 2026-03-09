import type { Metadata } from "next";
import Card from "@/components/ui/Card";
import { CheckCircle2, Zap, Shield, Rocket, Cpu, Code2, Database, Layout, Terminal, Film } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Shahzod Islomov",
  description: "Why hire me? Explore the services I offer as a full-stack software engineer.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col gap-24">
      {/* Hero Header */}
      <section className="text-center max-w-3xl mx-auto flex flex-col gap-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          What I offer
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mt-4 leading-relaxed">
          Transforming complex problems into elegant, scalable software solutions. Here is how I can help your team or business grow.
        </p>
      </section>

      {/* Why Hire Me Section */}
      <section className="flex flex-col gap-10">
        <div className="text-center">
          <div className="text-xs font-bold tracking-wider text-[var(--color-accent)] uppercase mb-2">Value</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why should you hire me?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card delay={0.1} className="flex flex-col items-center text-center gap-4 p-8">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-2">
              <Zap className="w-8 h-8 text-[var(--color-accent)]" />
            </div>
            <h3 className="text-xl font-bold text-white">Fast Execution</h3>
            <p className="text-sm text-gray-400">
              I prioritize delivering fully-functional MVPs quickly without sacrificing code quality, allowing for rapid iteration.
            </p>
          </Card>
          
          <Card delay={0.2} className="flex flex-col items-center text-center gap-4 p-8">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-2">
              <Shield className="w-8 h-8 text-[#ff00ff]" />
            </div>
            <h3 className="text-xl font-bold text-white">Robust Engineering</h3>
            <p className="text-sm text-gray-400">
              My background at Astrum Academy and focus on Data Structures ensures that the architecture I build is scalable and secure.
            </p>
          </Card>

          <Card delay={0.3} className="flex flex-col items-center text-center gap-4 p-8">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-2">
              <Rocket className="w-8 h-8 text-[#6a0dad]" />
            </div>
            <h3 className="text-xl font-bold text-white">Continuous Growth</h3>
            <p className="text-sm text-gray-400">
              I am highly adaptable. I learn in public, constantly absorbing new paradigms like AI integrations and Next.js optimization.
            </p>
          </Card>
        </div>
      </section>

      {/* Categorized Skills Section */}
      <section className="flex flex-col gap-10">
        <div className="text-center">
          <div className="text-xs font-bold tracking-wider text-[var(--color-accent)] uppercase mb-2">Expertise</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Core Competencies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Frontend */}
          <Card delay={0.4} className="flex flex-col gap-6 group hover:border-[var(--color-accent)]/50">
            <div className="flex items-center gap-4">
               <Layout className="w-8 h-8 text-[var(--color-accent)]" />
               <h3 className="text-xl font-bold text-white">Frontend</h3>
            </div>
            <ul className="space-y-3 flex-1 flex flex-col justify-end">
              {['React.js', 'Next.js App Router', 'Tailwind CSS', 'Framer Motion', 'UI/UX Clones'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] opacity-70 group-hover:opacity-100 transition-opacity" /> {item}
                </li>
              ))}
            </ul>
          </Card>

          {/* Backend */}
          <Card delay={0.5} className="flex flex-col gap-6 group hover:border-[#6a0dad]/50">
            <div className="flex items-center gap-4">
               <Database className="w-8 h-8 text-[#6a0dad]" />
               <h3 className="text-xl font-bold text-white">Backend</h3>
            </div>
            <ul className="space-y-3 flex-1 flex flex-col justify-end">
              {['Node.js', 'Express', 'API Design', 'Database Modeling', 'Authentication'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#6a0dad] opacity-70 group-hover:opacity-100 transition-opacity" /> {item}
                </li>
              ))}
            </ul>
          </Card>

          {/* Languages & Principles */}
          <Card delay={0.6} className="flex flex-col gap-6 group hover:border-[#ff00ff]/50">
            <div className="flex items-center gap-4">
               <Code2 className="w-8 h-8 text-[#ff00ff]" />
               <h3 className="text-xl font-bold text-white">Core Logic</h3>
            </div>
            <ul className="space-y-3 flex-1 flex flex-col justify-end">
              {['TypeScript', 'JavaScript (ES6+)', 'Data Structures', 'Algorithms', 'Redux State'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#ff00ff] opacity-70 group-hover:opacity-100 transition-opacity" /> {item}
                </li>
              ))}
            </ul>
          </Card>

          {/* Emerging / Future */}
          <Card delay={0.7} className="flex flex-col gap-6 group hover:border-white/50">
            <div className="flex items-center gap-4">
               <Cpu className="w-8 h-8 text-white" />
               <h3 className="text-xl font-bold text-white">Innovation & AI</h3>
            </div>
            <ul className="space-y-3 flex-1 flex flex-col justify-end">
              {['AI Agent Workflows', 'LLM Integration', 'Web GL & 3D (Three.js)', 'SSG / SEO Optimization', 'Performance Tuning'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-white opacity-70 group-hover:opacity-100 transition-opacity" /> {item}
                </li>
              ))}
            </ul>
          </Card>

          {/* Ethical Hacking */}
          <Card delay={0.8} className="flex flex-col gap-6 group hover:border-[#ff3366]/50">
            <div className="flex items-center gap-4">
               <Terminal className="w-8 h-8 text-[#ff3366]" />
               <h3 className="text-xl font-bold text-white">Ethical Hacking</h3>
            </div>
            <ul className="space-y-3 flex-1 flex flex-col justify-end">
              {['Cybersecurity', 'Penetration Testing', 'Vulnerability Assessment', 'Network Security', 'CTF Challenges'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#ff3366] opacity-70 group-hover:opacity-100 transition-opacity" /> {item}
                </li>
              ))}
            </ul>
          </Card>

          {/* Video Editing */}
          <Card delay={0.9} className="flex flex-col gap-6 group hover:border-[#ffaa00]/50">
            <div className="flex items-center gap-4">
               <Film className="w-8 h-8 text-[#ffaa00]" />
               <h3 className="text-xl font-bold text-white">Video Production</h3>
            </div>
            <ul className="space-y-3 flex-1 flex flex-col justify-end">
              {['Premiere Pro', 'Content Creation', 'Motion Graphics', 'Storytelling', 'Audio Sweetening'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#ffaa00] opacity-70 group-hover:opacity-100 transition-opacity" /> {item}
                </li>
              ))}
            </ul>
          </Card>

        </div>
      </section>

      {/* Process Section */}
      <section className="text-center py-10 mt-10">
         <h2 className="text-3xl font-bold text-white mb-8">Ready to integrate these skills into your team?</h2>
         <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
          >
            Start a Conversation
        </Link>
      </section>
    </div>
  );
}
