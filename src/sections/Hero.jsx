import { StarBackground } from "@/components/StarBackground";
import { Button } from "@/components/Button"
import { ArrowRight, Download } from "lucide-react";


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
                            Contact me <ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button size="lg">
                            Download CV <Download className="w-5 h-5" />
                        </Button>

                    </div>
                    {/* Links */}

                </div>
                {/* right profile img */}
            </div>
        </div>
    </section>;
};