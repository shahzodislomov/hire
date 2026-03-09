import Link from "next/link";
import { ArrowRight, Github, Send } from "lucide-react";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col gap-16">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto flex flex-col items-center gap-6 mt-10 md:mt-20">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          Shahzod Islomov <span className="text-gray-500 block text-3xl md:text-5xl mt-2">— Software Engineer</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mt-4 leading-relaxed">
          Building awesome automated workflows, intelligent agents, and scalable web platforms. Based in Uzbekistan, diving deep into React, backend dev, and AI services.
        </p>
        <div className="flex gap-4 mt-8">
          <Link
            href="/projects"
            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:bg-gray-200 transition-colors"
          >
            Explore projects <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-2xl font-semibold border border-white/10 hover:bg-white/20 transition-colors"
          >
            View my journey
          </Link>
        </div>
      </section>

      {/* Grid Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <Card delay={0.1} className="flex flex-col gap-4">
          <div className="text-xs font-bold tracking-wider text-gray-500 uppercase">Currently</div>
          <h2 className="text-2xl font-semibold text-white">Exploring modern AI dev</h2>
          <p className="text-gray-400 text-sm">
            Constant learning in public, diving into full-stack Next.js applications and scalable data structures.
          </p>
        </Card>

        <Card delay={0.2} className="flex flex-col gap-4">
          <div className="text-xs font-bold tracking-wider text-gray-500 uppercase">On the radar</div>
          <h2 className="text-2xl font-semibold text-white">Building wenaco-dev</h2>
          <p className="text-gray-400 text-sm">
            Sharing tech insights, web development tutorials, and programming journeys on Telegram.
          </p>
        </Card>

        <Card delay={0.3} className="flex flex-col gap-4 md:row-span-2 relative overflow-hidden group">
          <div className="text-xs font-bold tracking-wider text-gray-500 uppercase mb-2">Connect</div>
          <div className="flex-1 flex flex-col justify-center gap-6">
            <Link href="https://github.com/shahzodislomov" target="_blank" className="flex items-center gap-4 hover:bg-white/5 p-3 rounded-xl transition-colors border border-transparent hover:border-white/10">
               <Github className="w-8 h-8 text-white" />
               <div>
                 <div className="font-semibold text-white">GitHub</div>
                 <div className="text-sm text-gray-400">@shahzodislomov</div>
               </div>
            </Link>
            <Link href="https://t.me/shawn_isl" target="_blank" className="flex items-center gap-4 hover:bg-white/5 p-3 rounded-xl transition-colors border border-transparent hover:border-white/10">
               <Send className="w-8 h-8 text-[#0088cc]" />
               <div>
                 <div className="font-semibold text-white">Telegram</div>
                 <div className="text-sm text-gray-400">@shawn_isl</div>
               </div>
            </Link>
          </div>
        </Card>
        
        <Card delay={0.4} className="md:col-span-2 flex flex-col md:flex-row items-center gap-6 p-8">
           <div className="flex-1 space-y-4">
             <h2 className="text-3xl font-bold text-white">Need a scalable solution?</h2>
             <p className="text-gray-400">I build fully-featured applications customized to your services. Let's grow your digital presence mapping high-value targets into modern software.</p>
           </div>
           <Link href="/services" className="bg-[#00e5ff]/10 text-[#00e5ff] hover:bg-[#00e5ff]/20 px-8 py-4 rounded-2xl font-bold transition-colors border border-[#00e5ff]/20 whitespace-nowrap">
             View my services
           </Link>
        </Card>
      </section>
    </div>
  );
}
