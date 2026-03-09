import type { Metadata } from "next";
import Card from "@/components/ui/Card";
import { Send, Linkedin, MapPin, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Shahzod Islomov",
  description: "Get in touch with Shahzod Islomov for projects, collaboration, or consulting.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-center text-center gap-10">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Let&apos;s talk</h1>
        <p className="text-lg text-gray-400 max-w-xl">
          Whether you have a critical software problem, need a fast next.js web application built, or just want to connect—feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
        <Card className="flex flex-col items-center justify-center p-10 gap-4 hover:border-[#0088cc]/50 transition-colors">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2">
            <Send className="w-8 h-8 text-[#0088cc]" />
          </div>
          <h2 className="text-2xl font-semibold text-white">Telegram</h2>
          <p className="text-gray-400 mb-4">Fastest way to reach me.</p>
          <a 
            href="https://t.me/shawn_isl" 
            target="_blank" 
            rel="noreferrer"
            className="bg-[#0088cc] text-white px-6 py-2 rounded-xl font-medium hover:bg-[#0077b3] transition-colors"
          >
            @shawn_isl
          </a>
        </Card>
        <Card className="flex flex-col items-center justify-center p-10 gap-4">
          <div className="w-20 h-16 rounded-full flex items-center justify-center mb-2">
            <PhoneCall className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-2xl font-semibold text-white">Phone Number</h2>
          <p className="text-gray-400 mb-4">Uzbekistan</p>
          <div className="bg-white/5 border border-white/10 text-white px-6 py-2 rounded-xl font-medium cursor-default">
            +998970347773
          </div>
        </Card>
        <Card className="flex flex-col items-center justify-center p-10 gap-4 hover:border-[#0077b5]/50 transition-colors">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2">
            <Linkedin className="w-8 h-8 text-[#0077b5]" />
          </div>
          <h2 className="text-2xl font-semibold text-white">LinkedIn</h2>
          <p className="text-gray-400 mb-4">Official account on LinkedIn</p>
          <a 
            href="https://www.linkedin.com/in/shahzodislomov/" 
            target="_blank" 
            rel="noreferrer"
            className="bg-[#0077b5] text-white px-6 py-2 rounded-xl font-medium hover:bg-[#005885] transition-colors"
          >
            @shahzodislomov
          </a>
        </Card>

      </div>
    </div>
  );
}