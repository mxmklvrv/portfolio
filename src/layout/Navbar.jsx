import { href } from "react-router-dom";
import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
];




export const Navbar = () => {
    const [isMobileMenuOn, setIsMobileMenuOn] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return <header className={`fixed top-0 left-0 right-0  ${isScrolled ? "glass-mobile py-3" : "bg-transparent "}py-5 z-50`}>
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight ">
                MXM<span>.</span>
            </a>
            {/* Desctop Nav */}
            <div className="hidden md:flex  items-center gap-1">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    {navLinks.map((link, index) => (
                        <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground  rounded-full hover:bg-secondary-foreground transition all">{link.label}
                        </a>
                    ))}
                </div>
            </div>
            {/* Button */}
            <a href="#contact">
            <div className="hidden md:block">
                <Button size="sm">Contact me</Button>
            </div>
            </a>
            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMobileMenuOn((prev) => !prev)}>
                {isMobileMenuOn ? <X size={24} /> : < Menu size={24} />}
            </button>
        </nav>
        {/* Mobile menu */}
        {isMobileMenuOn && (
            <div className="md:hidden glass-mobile animate-fade-in">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                    {navLinks.map((link, index) => (
                        <a href={link.href}
                            key={index}
                            onClick={() => setIsMobileMenuOn(false)}
                            className="text-lg text-muted-foreground hover:text-foreground py-2">
                            {link.label}
                        </a>
                    ))}
                    <Button>Contact me</Button>
                </div>
            </div>)}
    </header>;
};