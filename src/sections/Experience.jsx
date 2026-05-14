const experiences = [
    {
        period: "2025 - Present",
        role: "Software development student",
        company: "Hive Helsinki (42 Network)",
        description: "Studying low-level programming, algorithms, Unix systems, multithreading, and software architecture through project-based learning. Built projects including a Unix shell, concurrent simulations, and graphical applications using C and modern development tools.",
        technologies: ["C", "C++", "Linux", "Git", "Unix", "Threads", "Algorithms"],
        current: true,
    },
    {
        period: "2019 - 2025",
        role: "Wholesale / Account Manager",
        company: "Verkkokauppa.com",
        description: "Managed B2B and B2C operations across European and Baltic markets, coordinating logistics, customer communication, ERP workflows, and complex order handling in a fast-paced environment.",
        technologies: ["ERP", "Zendesk", "HubSpot", "QlikSense", "B2B Operations"],
        current: false,
    },
    {
        period: "2017 - 2019",
        role: "Shift Manager",
        company: "Restaurant Bastardo",
        description: "Led daily operations in high-pressure service environments, coordinating teams, resolving operational challenges, and maintaining efficient communication across multicultural teams.",
        technologies: ["Leadership", "Operations", "Team Coordination"],
        current: false,
    },
]


export const Experience = () => {
    return <section id="experience" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Career Journey</span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">Experience shaped by<span className="font-serif italic font-normal text-white"> problem solving and adaptability.</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    From customer-facing operations to systems programming,
                    each role strengthened my ability to communicate clearly,
                    adapt quickly, and solve problems under pressure.
                </p>
            </div>
            {/* Timeline */}
            <div className="relative">
                <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
                {/* experience items */}
                <div className="space-w-12">
                    {experiences.map((exp, idx) => (
                        <div
                            key={idx}
                            className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                            {/* Pulsating timeline dot */}
                            <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                {exp.current && (<span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />)}
                            </div>

                            {/* content */}
                            <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                <div className={`glass p-6 rounded-2xl border border-primary/10 hover:border-primary/50 transition-all duration-500`}>
                                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                    <p className="text-muted-foreground">{exp.company}</p>
                                    <p className="text-sm text-muted-foreground text-left mt-4">{exp.description}</p>
                                    <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                                        {exp.technologies.map((tech, techIdx) => (
                                            <span key={techIdx} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">{tech}</span>
                                        ))}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>;
};
