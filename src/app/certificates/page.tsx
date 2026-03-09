import Card from "@/components/ui/Card";
import { Award, Calendar, ShieldCheck, ExternalLink } from "lucide-react";
import Image from "next/image";

const certificates = [
    {
        id: "crta",
        title: "CRTA Certification",
        issuer: "Cyberwarfare Labs",
        date: "2024",
        description: "Certification demonstrating expertise in Red Teaming, penetration testing, and ethical hacking methodologies.",
        image: "/CRTA.png",
        tags: ["Red Teaming", "Penetration Testing", "Security", "Offensive"],
    },
    {
        id: "cjca",
        title: "CJCA Certification",
        issuer: "HackTheBox Academy",
        date: "2023",
        description: "Foundational certification covering core cybersecurity principles, threat analysis, and defensive strategies.",
        image: "/CJCA.png",
        tags: ["Cybersecurity", "Threat Analysis", "Defense", "Offensive"],
    }
];

export default function CertificatesPage() {
    return (
        <div className="min-h-screen pt-32 pb-32 px-6 max-w-7xl mx-auto flex flex-col gap-16">
            <header className="flex flex-col gap-6 max-w-2xl">
                <div className="flex items-center gap-3 text-[var(--color-accent)]">
                    <Award className="w-6 h-6" />
                    <span className="font-semibold tracking-wider uppercase text-sm">Achievements</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
                    Certificates
                </h1>
                <p className="text-lg text-gray-400 leading-relaxed">
                    Official verifications of my technical skills, demonstrating a commitment to continuous learning and mastery in software engineering and cybersecurity.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {certificates.map((cert) => (
                    <Card key={cert.id} className="group overflow-hidden flex flex-col h-full bg-[#0a0a0e]/50 border border-white/5 hover:border-[var(--color-accent)]/50 transition-all duration-500">
                        {/* Image Section */}
                        <div className="relative w-full aspect-[4/3] overflow-hidden bg-black/40">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-transparent to-transparent z-10 opacity-60"></div>
                            <Image
                                src={cert.image}
                                alt={cert.title}
                                fill
                                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {/* Overlay Badge */}
                            <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 text-white px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-medium">
                                <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                                Verified
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 flex flex-col flex-grow gap-4 relative z-20">
                            <div className="flex flex-wrap gap-2 mb-2">
                                {cert.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h2 className="text-2xl font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">
                                {cert.title}
                            </h2>

                            <div className="flex flex-col gap-2 mt-2">
                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                    <ExternalLink className="w-4 h-4" />
                                    <span className="font-medium">{cert.issuer}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-500 text-sm">
                                    <Calendar className="w-4 h-4" />
                                    <span>Issued: {cert.date}</span>
                                </div>
                            </div>

                            <p className="text-gray-400 mt-4 text-sm leading-relaxed flex-grow">
                                {cert.description}
                            </p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
