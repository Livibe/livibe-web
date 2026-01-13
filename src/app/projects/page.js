import { project } from "../../data/project";

export const metadata = {
 title: "Project | Livibe",
 description: "Selected projects and performances showcasing Livibe experiences.",
};

export default function ProjectsPage() {
 return (
 <main className="grid-bg relative mx-auto max-w-6xl px-6 py-12">
 <section className="mb-10 text-center">
 <div className="bg-gradient-to-tr from-[#F96443] to-[#FB3E60] bg-clip-text text-4xl text-transparent sm:text-5xl md:text-6xl">
 Project
 </div>
 <div className="mt-3 text-[#F0B987]">
 A glimpse of installations and performances we light up
 </div>
 </section>

 <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 {project.map((p) => (
 <div
 key={`${p.title}-${p.date}`}
 className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#2E2D68] p-6 shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl"
 >
 <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#F96443] to-[#FB3E60]" />
 <div className="mb-3 flex items-center gap-2 text-white">
 <div className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/80">
 {p.client}
 </div>
 <div className="ml-auto text-xs text-[#F0B987]">{p.date}</div>
 </div>
 <div className="text-lg font-bold text-white">{p.title}</div>
 <div className="mt-2 text-white/90">{p.description}</div>
 <div className="mt-4 flex items-center gap-2">
 <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-[#F96443] to-[#FB3E60] opacity-30 blur-sm" />
 <div className="h-[1px] w-full bg-white/10" />
 </div>
 </div>
 ))}
 </section>
 </main>
 );
}
