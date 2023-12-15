import { useEffect, useRef } from "react";

export default function FadeInRight({ children }) {
    const targetRef = useRef(null);

    useEffect(() => {
        // const targetElement = targetRef.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible-right");
                    entry.target.classList.remove("not-visible-right");
                } else {
                    entry.target.classList.remove("visible-right");
                    entry.target.classList.add("not-visible-right");
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
