const experiences = [
    {
        period:"2025 - Present" ,
        role: "Software development student",
        company: "Hive Helsinki (42 Network)",
        description: "",
        technologies: ["C", "C++", "React", "some more"],
        current: true,
    },
      {
        period: "",
        role: "",
        company: "",
        description: "",
        technologies: "",
        current: false,
    },
      {
        period: "",
        role: "",
        company: "",
        description: "",
        technologies: "",
        current: false,
    },
      {
        period: "",
        role: "",
        company: "",
        description: "",
        technologies: "",
        current: false,
    },
    {
        period: "",
        role: "",
        company: "",
        description: "",
        technologies: "",
        current: false,
    },

]


export const Experience = () =>{
    return <section id="experience" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Career Journey</span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">Experience that <span className="font-serif italic font-normal text-white"> makes difference.</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    A timeline of my professional growth from restaurant worker to account manager and future Software Developer.
                </p>
            </div>

            {/* Timeline */}
        </div>
    </section>;
};
// 1.58 timline