import { href } from "react-router-dom";
import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#testimonials', label: 'Testimonials' },
];

// need to add color for logo
// for the dot as well 21.07

// when screen is minimised, no menu visible straight away --> fixed
export const Navbar = () => {
    const [isMobileMenuOn, setisMobileMenuOn] = useState(true);
    return <header className='fixed top-0 left-0 right-0 bg-transparent py-5 z-50'>
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight ">
                MXM<span>.</span>
            </a>
            {/* Desctop Nav */}
            <div className="hidden md:flex  items-center gap-1">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    {navLinks.map((link, index) => (
                        <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground  rounded-full hover:bg-highlight">{link.label}
                        </a>
                    ))}
                </div>
            </div>
            {/* Button */}
            <div className="hidden md:block">
                <Button size="sm">Contact me</Button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setisMobileMenuOn((prev) => !prev)}>
                {isMobileMenuOn ? <X size={24} /> : < Menu size={24} />}
            </button>
        </nav>
        {/* Mobile menu */}
        {isMobileMenuOn && (
            <div className="md:hidden glass-mobile animate-fade-in">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                    {navLinks.map((link, index) => (
                        <a href={link.href} key={index} className="text-lg text-muted-foreground hover:text-foreground py-2">
                            {link.label}
                        </a>
                    ))}
                    <Button>Contact me</Button>
                </div>
            </div>)}
    </header>;
};