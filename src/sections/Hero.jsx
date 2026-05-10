

export const Hero = () => {
    return <section className="relative min-h-screen items-center overflow-hidden">
        {/* Background, need to add space anim here later */}
        <div className="absolute inset-0">
            <img
                src="/hero.jpg"
                alt="hero img"
                className="w-full h-full object-cover opacity-40"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/> */}
        </div>
        {/* Dots white */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(55)].map((_, i) => (
                <div className="absolute w-1 h-1 rounded-full opacity-60"
                style={{
                    backgroundColor: "#ffffff",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `star-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                    animationDelay: `${Math.random() *5}s`
                }}
                />
            ))}
        </div>
    </section>;
};