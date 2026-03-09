import type { Metadata } from "next";
import Card from "@/components/ui/Card";
import { Github, ExternalLink, Code2, Layers, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects — Shahzod Islomov",
  description: "Explore the different open-source projects and clones created by Shahzod Islomov.",
};

const featuredProjects = [
  {
    name: "Learniverse",
    description: "An interactive, scalable web platform designed to streamline the learning process. Features a clean, accessible UI and incredibly fast performance.",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    repo: "https://learniverse-amber.vercel.app",
    iframeCover: "https://learniverse-amber.vercel.app",
  },
  {
    name: "Bluepeak Logistics",
    description: "Page for trucking businesses and about improving and helping the business owners.",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    repo: "https://bluepeak-trucking.vercel.app/",
    iframeCover: "https://bluepeak-trucking.vercel.app/",
  },
  {
    name: "Youtube Clone",
    description: "A modern video streaming platform inspired by YouTube. Users can browse, search, and watch videos through a responsive interface with optimized loading and smooth playback.",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    repo: "https://youtube-clone-kueihmy0b-wenacos-projects.vercel.app/",
    iframeCover: "https://youtube-clone-kueihmy0b-wenacos-projects.vercel.app/",
  },
  {
    name: "Wenaco Taskflow (Trello Clone)",
    description: "A robust Trello-style to-do application incorporating Redux for complex state management, drag-and-drop functionality, and full CRUD operations. Built to demonstrate advanced frontend architecture.",
    tags: ["TypeScript", "React", "Redux", "Tailwind CSS"],
    repo: "https://github.com/shahzodislomov/wenaco-todo-list",
    icon: <Layers className="w-6 h-6 text-[#00e5ff]" />,
    gradient: "from-[#00e5ff]/20 to-[#6a0dad]/20"
  },
  {
    name: "E-Commerce Architecture (Amazon Clone)",
    description: "A full-featured e-commerce platform mimic. Implementations include a dynamic cart system, checkout flows, and responsive UI mapping completely to Amazon's core user experience.",
    tags: ["JavaScript", "React", "Context API", "Firebase"],
    repo: "https://github.com/shahzodislomov/amazon_clone",
    icon: <Cpu className="w-6 h-6 text-[#ff00ff]" />,
    gradient: "from-[#ff00ff]/20 to-[#ffaa00]/20"
  }
];

const otherProjects = [
  {
    name: "Weather Predictor API",
    description: "A dynamic weather application using public APIs to fetch real-time forecasts, featuring dynamic background UI changes based on weather conditions.",
    tags: ["JavaScript", "REST APIs", "CSS3"],
    repo: "https://github.com/shahzodislomov/weather-app"
  },
  {
    name: "React Recipe Engine",
    description: "A web app fetching meal recipes, built while learning advanced React patterns and custom hooks.",
    tags: ["React", "API Integration"],
    repo: "https://github.com/shahzodislomov/React-Meal-Tutorial"
  },
  {
    name: "Legacy Portfolio V1",
    description: "The initial portfolio project built from scratch to establish my core understanding of semantic structure.",
    tags: ["HTML5", "Vanilla CSS"],
    repo: "https://github.com/shahzodislomov/portfolio_project"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col gap-20">
      
      {/* Hero Section */}
      <section className="flex flex-col gap-6 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
          Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#6a0dad]">Works</span>
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          Showcasing my journey through complex UI clones, scalable architectures, and continuous open-source contributions.
        </p>
      </section>

      {/* Featured Projects (Asymmetric Layout) */}
      <section className="flex flex-col gap-12">
        {featuredProjects.map((project, idx) => (
          <Card 
            key={project.name} 
            delay={idx * 0.2} 
            className="flex flex-col lg:flex-row overflow-hidden group border border-white/10 hover:border-white/30 transition-all duration-500"
          >
            {/* Visual / Gradient Side */}
            {project.iframeCover ? (
              <div className="lg:w-2/5 p-0 relative overflow-hidden min-h-[300px] bg-black border-r border-white/5">
                <div className="absolute inset-0 w-[400%] h-[400%] pointer-events-none">
                  <iframe 
                    src={project.iframeCover} 
                    className="w-full h-full scale-[0.25] origin-top-left border-none opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                    scrolling="no"
                    tabIndex={-1}
                  />
                </div>
                {/* Vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-transparent to-transparent opacity-80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
                <h3 className="absolute bottom-6 left-8 z-10 text-xl font-bold text-white tracking-widest uppercase">Live Preview</h3>
              </div>
            ) : (
              <div className={`lg:w-2/5 p-8 flex flex-col justify-between bg-gradient-to-br ${project.gradient} relative overflow-hidden min-h-[300px]`}>
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
                 <div className="relative z-10 bg-black/40 p-4 rounded-2xl w-fit backdrop-blur-md border border-white/10">
                   {project.icon}
                 </div>
                 <h3 className="relative z-10 text-3xl font-bold text-white mt-auto pt-10">Featured</h3>
                 {/* Decorative glowing orb */}
                 <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 blur-3xl rounded-full group-hover:bg-white/40 transition-all duration-700"></div>
              </div>
            )}

            {/* Content Side */}
            <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center gap-6 bg-black/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">
                {project.name}
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mt-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-8 mt-auto flex items-center gap-4">
                <a 
                  href={project.repo} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors flex items-center gap-2"
                >
                  <Github className="w-5 h-5" /> View Repository
                </a>
              </div>
            </div>
          </Card>
        ))}
      </section>

      {/* Other Projects Grid */}
      <section className="flex flex-col gap-10">
        <div className="flex items-center gap-4 text-white">
          <Code2 className="w-8 h-8 text-[#00e5ff]" />
          <h2 className="text-3xl font-bold">More Experiments</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherProjects.map((project, idx) => (
            <Card key={project.name} delay={idx * 0.1 + 0.4} className="flex flex-col h-full group p-8 hover:-translate-y-2 transition-transform duration-500">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <Github className="w-6 h-6" />
                </div>
                <a href={project.repo} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00e5ff] transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-400 mb-8 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                   <span key={tag} className="text-xs font-semibold text-gray-500">#{tag}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Bottom CTA */}
      <div className="py-12 flex justify-center border-t border-white/10">
        <a 
          href="https://github.com/shahzodislomov?tab=repositories" 
          target="_blank" 
          rel="noreferrer"
          className="text-gray-400 hover:text-white border border-gray-600 hover:border-white px-8 py-4 rounded-xl font-semibold transition-all"
        >
          Explore All Repositories on GitHub
        </a>
      </div>
    </div>
  );
}
