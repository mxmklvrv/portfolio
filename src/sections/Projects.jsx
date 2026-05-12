import { Link, ArrowUpRight } from "lucide-react";
import{ Button } from "@/components/Button"

const projects = [
	{
		title: "Custom Unix Shell",
		description: "minishell bla bla bla",
		image: "/projects/minishell.png",
		tags: ["C", "valgrind", "GDB"],
		github: "https://github.com/mxmklvrv/Custom-Unix-Shell",
	},
	{
		title: "Ray Tracing Engine",
		description: "minirt bla bla bla",
		image: "/projects/minirt.png",
		tags: ["C", "valgrind", "GDB"],
		github: "https://github.com/mxmklvrv/Ray-Tracing-Engine",
	},
	{
		title: "Concurrent Dining Philosophers Simulation",
		description: "philo bla bla bla",
		image: "/projects/philo.png",
		tags: ["C", "valgrind", "GDB"],
		github: "https://github.com/mxmklvrv/Concurrent-Dining-Philosophers-Simulation",
	},
]

export const Projects = () =>{
    return (
			<section id="projects" className="py-32 relative overflow-hidden">
        		<div className="container mx-auto px-6 relative z-10">
					{/* section header */}
					<div className="text-center mx-auto max-w-3xl mb-16">
						<span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in ">Featured Work</span>
						<h2 text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground>
							Projects that
							<span className="font-serif italic font-normal text-white"> gave me knowledge.</span>
						</h2>
						<p className="text-muted-foreground animate-fade-in animation-delay-200">
							selection of my recent work from complex bla bla, to
							beautiful bla bla
						</p>
					</div>
					{/* Projects grid */}
					<div className="grid md:grid-cols-2 gap-8">
						{projects.map((projects, idx) => (
							<div key={idx}
							className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
							style={{ animationDelay: `${(idx + 1) * 100}ms` }}
							>
								{/* img */}
								<div className="relative overflow-hidden aspect-video">
									<img src={projects.image} alt={projects.title} className="w-full h-full object-cover transition-transform duration-900 group-hover:scale-110"/>
									<div className=" absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"/>
									{/* Overlay links */}
									<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<a href={projects.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                            <Link className="w-5 h-5"/>
                                        </a> 
									</div>
								</div>
                                {/* Content */}
                                <div className="p-6 space-y-4">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-XL font-semibold group-hover:text-primary">{projects.title}</h3>
                                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                                    </div>
                                    <p className="flex flex-wrap gap-2">{projects.description}</p>
                                    <div>{projects.tags.map((tag, tagIdx) => (
                                        <span 
                                        key={tagIdx} 
                                        className="px-4 py-2 rounded-full bg-surface text-xs font-medium border border-border/69 text-muted-foreground hover:border-primary/69 hover:text-primary duration 300 transition-all" >{tag}</span>
                                    ))}</div>
                                </div>
							</div>
						))}
					</div>
                    <div className="text-center mt-12 animate-fade-in animation-delay-400">
                        <Button>
                            View All projects
                            <ArrowUpRight className="w-5 h-5"/>
                        </Button>
                    </div>
				</div>
			</section>
		);
};

