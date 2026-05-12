
const projects = [
	{
		title: "Minishell",
		description: "minishell bla bla bla",
		image: "/projects/minishell.png",
		tags: ["C", "valgrind", "GDB"],
		github: "#",
	},
	{
		title: "minirt",
		description: "minirt bla bla bla",
		image: "/projects/minirt.png",
		tags: ["C", "valgrind", "GDB"],
		github: "#",
	},
	{
		title: "philo",
		description: "philo bla bla bla",
		image: "/projects/philo.png",
		tags: ["C", "valgrind", "GDB"],
		github: "#",
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
									<div>
										<a></a>
									</div>
								</div>
							</div>
						)) }
					</div>
				</div>
			</section>
		);
}; // 1.46 overlaylinks 