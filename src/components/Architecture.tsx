"use client";

import { useEffect, useRef, useState } from "react";

export default function Architecture() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
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
            className="relative w-full py-32 md:py-48 bg-[#f4f1ea] dark:bg-[#0a0a0a] overflow-hidden"
        >
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '4cm 4cm' }}>
            </div>

            <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">

                <div className="text-center mb-24">
                    <span className="inline-block border border-black/20 dark:border-white/20 px-3 py-1 mb-6">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                            Chapter III — The Loop
                        </span>
                    </span>
                    <h2 className="font-serif text-5xl md:text-7xl text-black dark:text-white leading-none mb-6">
                        Two Surfaces.<br />
                        <span className="italic text-zinc-400">One Shared State.</span>
                    </h2>
                    <p className="font-sans text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                        We keep the Retailer and Client connected. When the store team updates a product the client sees it instantly. When a client requests a fitting the store team is notified immediately.
                    </p>
                </div>

                <div className="relative flex flex-col items-center">

                    <div className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] border-l-2 border-dashed border-zinc-300 dark:border-zinc-700 transition-all duration-[2000ms] ease-out ${isVisible ? "h-full opacity-100" : "h-0 opacity-0"
                        }`}></div>


                    <div className={`relative w-full flex flex-col md:flex-row items-center md:justify-start gap-0 md:gap-8 mb-24 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        }`}>

                        <div className="md:w-[45%] text-center md:text-right order-2 md:order-1 bg-[#f4f1ea] dark:bg-[#0a0a0a] md:bg-transparent relative z-10 py-6 md:py-0">
                            <h3 className="font-sans text-xl font-bold uppercase tracking-tight text-black dark:text-white mb-4">
                                01. RETAIL OS
                            </h3>
                            <p className="font-sans text-xs md:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm mx-auto md:mx-0 md:ml-auto">
                                A role-aware interface that fuses intelligent merchandising with retail personalization. It adapts to the user to support every function, allowing teams to manage inventory intake, analyze market trends, and orchestrate hyper-personalized client outreach from one unified system.
                            </p>
                        </div>

                        <div className="relative z-10 w-4 h-4 bg-black dark:bg-white rounded-full border-4 border-[#f4f1ea] dark:border-[#0a0a0a] order-1 md:order-2 md:absolute md:left-1/2 md:-translate-x-1/2"></div>

                        <div className="hidden md:block md:w-[45%] order-3"></div>
                    </div>


                    <div className={`relative w-full flex flex-col items-center justify-center gap-6 mb-24 transition-all duration-1000 delay-300 ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        }`}>
                        <div className="relative bg-white dark:bg-[#111] p-8 md:p-10 shadow-2xl border border-black/5 dark:border-white/5 max-w-md text-center z-20 rotate-[-1deg]">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-zinc-300 dark:bg-zinc-700"></div>

                            <h3 className="font-serif text-3xl md:text-4xl text-black dark:text-white mb-4">
                                The Intelligence Layer
                            </h3>
                            <p className="font-serif text-lg italic text-zinc-500 mb-3">
                                The shared brain.
                            </p>
                            <p className="font-sans text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                Real-time inventory, availability, and trend context.
                            </p>

                            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-black/20"></div>
                            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-black/20"></div>
                            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-black/20"></div>
                            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-black/20"></div>
                        </div>
                    </div>


                    <div className={`relative w-full flex flex-col md:flex-row items-center md:justify-end gap-0 md:gap-8 mb-12 transition-all duration-1000 delay-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        }`}>
                        <div className="hidden md:block md:w-[45%] order-1"></div>

                        <div className="relative z-10 w-4 h-4 bg-white dark:bg-black rounded-full border-4 border-black dark:border-white order-1 md:order-2 md:absolute md:left-1/2 md:-translate-x-1/2"></div>

                        <div className="md:w-[45%] text-center md:text-left order-2 md:order-3 bg-[#f4f1ea] dark:bg-[#0a0a0a] md:bg-transparent relative z-10 py-6 md:py-0">
                            <h3 className="font-serif text-3xl md:text-4xl text-black dark:text-white mb-4">
                                02. VAULT
                            </h3>
                            <p className="font-sans text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm mx-auto md:mx-0">
                                The digital extension of the physical wardrobe and fitting room. It moves beyond transaction into continuity, giving the client a dedicated, branded surface to manage their relationship with their favorite brands. It is a persistent concierge that turns shopping into service.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}