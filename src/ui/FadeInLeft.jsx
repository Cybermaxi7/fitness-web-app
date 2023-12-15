import { useEffect, useRef } from "react";

export default function FadeInLeft({ children }) {
    const targetRef = useRef(null);

    useEffect(() => {
        // const targetElement = targetRef.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible-left");
                    entry.target.classList.remove("not-visible-left");
                } else {
                    entry.target.classList.remove("visible-left");
                    entry.target.classList.add("not-visible-left");
                }
            });
        });

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        // Cleanup function
        return () => observer.disconnect();
    }, []);

    return <div ref={targetRef}>{children}</div>;
}
