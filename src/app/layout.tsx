import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import RainBackground from "@/components/ui/RainBackground";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shahzod Islomov — Software Engineer, Ethical Hacker & Video Editor",
  description: "Shahzod Islomov offers professional services in Full-stack Software Engineering, Ethical Hacking & Cybersecurity, and high-quality Video Editing. Hire an expert for scalable applications and robust security solutions.",
  keywords: [
    "Shahzod Islomov",
    "Software Engineer Uzbekistan",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Backend Development",
    "Ethical Hacking Services",
    "Cybersecurity Consultant",
    "Penetration Testing",
    "Video Editing",
    "Content Creation",
    "Premiere Pro",
    "UI/UX Clones",
    "Freelance Developer",
    "Hire Software Developer",
    "Hire Frontend Developer",
    "Hire Backend Developer",
    "Hire Fullstack Developer",
    "Hire Ethical Hacker",
    "Hire Video Editor",
    "Menga Frontendchi kerak",
    "Frontend Dasturchi",
    "Online Mardikor",
    "Aytishnik",
    "qora ishchi",
    "qora ishchi kerak",
    "qora ishchi kerakmi",
    "qora ishchi kerakmi desa",
    "qora ishchi",
    "qora ishchi kerak",
    "qora ishchi kerakmi",
    "qora ishchi kerakmi desa",
    "qora ishchi kerakmi desa qara",
    "qora ishchi kerakmi desa qara qara",
    "qora ishchi kerakmi desa qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara",
    "qora ishchi kerakmi desa qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara qara",
  ],
  openGraph: {
    title: "Shahzod Islomov — Software solutions, Security & Media",
    description: "Expert Full-stack Software Engineering, Ethical Hacking, and Video Editing services. Transform your digital presence with Shahzod Islomov.",
    type: "website",
    url: "https://shahzodislomov.com", 
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans relative min-h-screen flex flex-col`}>
        <RainBackground />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
      </body>
    </html>
  );
}
