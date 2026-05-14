import { useEffect, useState } from "react";



export const StarBackground = () => {
    const [stars, setStars] = useState([])
    const [fallingStars, setFallingStars] = useState([])

    useEffect(() => {
        generateStars();
        generateFallingStars();
    }, []);


    const generateStars = () => {
        const numOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000)


        const newStars = []
        for (let i = 0; i < numOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            })
        }
        setStars(newStars);
    }

    const generateFallingStars = () => {
        const numOfFallingStars = 4;


        const newFallingStars = []
        for (let i = 0; i < numOfFallingStars; i++) {
            newFallingStars.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100 - 10,
                y: Math.random() * 60 - 25,
                delay: Math.random() * 35,
                animationDuration: Math.random() * 5 + 7,
                driftX: Math.random() * 80 - 30,
                fallY: Math.random() * 35 + 55,
            })
        }
        setFallingStars(newFallingStars);
    }



    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div key={star.id} className="star animate-pulse-subtle" style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                left: `${star.x}%`,
                top: `${star.y}%`,
                opacity: star.opacity,
                animationDuration: `${star.animationDuration}s`,
            }} />
        ))}
        {fallingStars.map((fallingStar) => (
            <div key={fallingStar.id} className="fallingStar animate-fallingStar"
                style={{
                    width: `${fallingStar.size}px`,
                    height: `${fallingStar.size}px`,
                    left: `${fallingStar.x}%`,
                    top: `${fallingStar.y}%`,
                    "--drift-x": `${fallingStar.driftX}vw`,
                    "--fall-y": `${fallingStar.fallY}vh`,
                    animationDelay: `${fallingStar.delay}s`,
                    animationDuration: `${fallingStar.animationDuration}s`,
                }} />
        ))}
    </div>;
} 