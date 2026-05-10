import { useEffect, useState } from "react";



export const StarBackroubnd = () => {
    const [stars, setStars] = useState([])

    useEffect(() => {
        generateStars()
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
    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div key={star.id} className="star" style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                left: `${star.x}%`,
                top: `${star.y}%`,
                opacity: star.opacity,
                animation: `star-drift ${40 + star.animationDuration}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,

            }} />
        ))}
    </div>;
} 