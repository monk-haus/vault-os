"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function FooterCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-[70vh] flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden px-6 pt-20 pb-20"
        >

            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

            <div className="relative z-10 flex flex-col items-center text-center gap-12 max-w-5xl">

                <div className="flex flex-col gap-2 md:gap-6">
                    <h2 className={`font-serif text-5xl md:text-8xl lg:text-9xl leading-[0.9] transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? "opacity-50 translate-y-0" : "opacity-0 translate-y-12"}`}>
                        Stop Messaging.
                    </h2>
                    <h2 className={`font-serif text-5xl md:text-8xl lg:text-9xl leading-[0.9] text-white transition-all duration-1000 delay-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-sm"}`}>
                        Start Operating.
                    </h2>
                </div>

                <div className={`mt-12 transition-all duration-1000 delay-700 ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
                    <Link
                        href="/inquire"
                        className="group relative inline-flex items-center justify-center"
                    >
                        <span className="absolute inset-0 border border-white/20 rounded-full scale-110 transition-transform duration-500 group-hover:scale-125 opacity-0 group-hover:opacity-100"></span>

                        <span className="relative bg-white text-black px-10 py-5 md:px-12 md:py-6 rounded-full font-sans text-xs md:text-sm font-bold uppercase tracking-[0.25em] transition-all duration-300 group-hover:bg-[#f4f1ea] group-hover:scale-105">
                            Request Demo
                        </span>
                    </Link>
                </div>
            </div>

        </section>
    );
}