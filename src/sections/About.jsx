import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing readable, modular, and maintainable code with long-term scalability in mind.",
    },
    {
        icon: Rocket,
        title: "Performance",
        description: "Optimizing applications for speed, responsiveness, and efficient resource usage.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working effectively in teams through clear communication and shared problem-solving.",
    },
    {
        icon: Lightbulb,
        title: "Development",
        description: "Staying up to date with modern tools, patterns, and evolving development practices.",
    },
];



export const About = () => {
    return <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* left side */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About me</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Building software with,
                        <span className="font-serif italic font-normal text-white"> curiosity, structure, and purpose..</span>
                    </h2>
                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>My journey into software development started through curiosity
                            about how systems work behind the scenes — from processes and
                            memory management to the architecture that powers modern applications.</p>
                        <p>At Hive Helsinki, I’ve focused on low-level programming,
                            backend development, and collaborative problem solving through
                            hands-on projects built with C, Unix systems, and modern web technologies.</p>
                        <p>Before transitioning into tech, I spent several years working in
                            operations, logistics, and customer-facing roles. That experience
                            taught me how to communicate clearly, stay calm under pressure,
                            and approach problems with a practical mindset.</p>
                    </div>
                    <div className="glass round-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            “I enjoy building software that is not only functional,
                            but understandable, reliable, and built with intention.”
                        </p>
                    </div>
                </div>
                {/* right side highlight*/}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, idx) => (
                        <div key={idx}
                            className="glass p-6 rounded-2xl animate-fade-in"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6  text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </section>;
};