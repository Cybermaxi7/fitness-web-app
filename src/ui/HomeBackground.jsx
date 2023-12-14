import { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { desktopImages, mobileImages } from "../data/data";

export default function HomeBackground() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const bgRef = useRef(null);
    const isMobile = useMediaQuery({ maxWidth: 768 });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (isMobile ? mobileImages.length : desktopImages.length));
        }, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, [isMobile]);

    useEffect(() => {
        const imageUrl = isMobile ? mobileImages[currentIndex] : desktopImages[currentIndex];
        console.log("Setting background image to:", imageUrl);
        bgRef.current.style.backgroundImage = `url(${imageUrl})`;
    }, [currentIndex, isMobile]);
    
    

    return (
        <div
            ref={bgRef}
            className="w-full h-[calc(100dvh-4.7rem)] overflow-hidden bg-cover transition 1s ease-in-out"
        >
            
        </div>
    );
}
