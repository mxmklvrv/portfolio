import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/Button"

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "maximkleverov@icloud.com",
        href: "mailto:maximkleverov@icloud.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+35845617022",
        href: "tel:+358456171022",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Helsinki, Finland",
        href: "#",

    }
]


export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
    }



    return <section id="contact" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                    Get In Touch
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Let's build
                    <span className="font-serif italic font-normal text-white"> something great.
                    </span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    Have a project in mind? I'd love to hear about it. Send me a message
                    and let's discuss how we can work together.
                </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animtaion-delay-300">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name"
                                className="block text-sm font-medium mb-2">
                                Name</label>
                            <input id="name"
                                type="text"
                                required
                                placeholder="Your Name..."
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                        </div>
                        <div>
                            <label htmlFor="email"
                                type="email"
                                className="block text-sm font-medium mb-2">
                                Email</label>
                            <input id="email"
                                required
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                        </div>
                        <div>
                            <label htmlFor="message"
                                className="block text-sm font-medium mb-2">
                                Message</label>
                            <textarea

                                rows={5}
                                required
                                placeholder="Your Message..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                            />
                        </div>
                        <Button className="w-full" type="submit" size="lg">
                            Send Message
                            <Send />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    </section>;
};
