import { StarBackground } from "@/components/StarBackground";
import { Button } from "@/components/Button"
import { ArrowRight, Download, ChevronsDown } from "lucide-react";

const skills = [
    "C",
    "C++",
    "React",
    "Tailwind CSS",
    "Figma",
    "Git",
    "GDB",
    "Microsoft Dynamics NAV",
    "Zendesk",
    "Qlik Sense",
]

export const Hero = () => {
    return <section className="relative min-h-screen items-center overflow-hidden">
        {/* Background, need to add space anim here later */}
        <div className="absolute inset-0">
            <StarBackground />
        </div>
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* left text */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            Junior Software Engineer * smth else
                        </span>
                    </div>

                    {/* headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                            some <span className="text-primary glow-text">strong text</span>
                            <br />
                            inspiring text
                            <br />
                            deep af.
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                            hi! i'm max blalablalbalbbalbalablbalablbalablablab
                            blablablablablablalbablablablablablablablablablablabl
                            lablablablablabalbablablab
                        </p>
                    </div>
                    {/* ctas buttons */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg">
                            Contact me <ArrowRight className="w-5 h-5 animate-" />
                        </Button>
                        <Button size="lg">
                            Download CV <Download className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
                {/* right profile img */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* picture of my face */}

                    <div className="relative max-w-md mx-auto">
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img src="/face.jpeg" alt="maxim kleverov" className="w-full aspect[4/5] object-cover rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Skilsl */}
            <div className="mt-20 animate-fade-in animation-delay-500">
                <p className="text-sm text-muted-foreground mb-6 text-center">
                    Technologies I work with
                </p>
                <div className="relative overflow-hidden">
                    <div className="flex animate-blade-runner">
                        {[...skills, ...skills].map((skill, idx) => (
                            <div key={idx} className="flex-shrink-0 px-8 py-4">
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-500"
        >
            <a
                href="#about"
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronsDown className="w-6 h-6 animate-bounce" />
            </a>
        </div>
    </section>;
};