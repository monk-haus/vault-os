"use client";

import { useEffect, useRef, useState } from "react";

export default function Problem() {
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

    const frictionPoints = [
        {
            title: "Invisible Stock",
            desc: "New arrivals stagnate in the back of house because the floor team lacks visibility.",
            number: "01"
        },
        {
            title: "Generic Outreach",
            desc: "Clienteling is reactive because data is trapped in silos.",
            number: "02"
        },
        {
            title: "Lost Revenue",
            desc: "Recommendations fail to convert because they ignore real time availability.",
            number: "03"
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-[#f4f1ea] dark:bg-[#0a0a0a] overflow-hidden"
        >
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                <div className={`flex flex-col gap-8 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

                    <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                        Chapter II — The Gap
                    </span>

                    <h2 className="font-serif text-5xl md:text-6xl text-black dark:text-white leading-[1.05] tracking-tight">
                        The Missing Layer.
                    </h2>

                    <div className="relative pl-6 border-l border-black/10 dark:border-white/10 space-y-6">
                        <p className="font-sans text-lg md:text-xl text-zinc-800 dark:text-zinc-200 leading-relaxed font-light">
                            Inventory is static volume. Conversation is a fluid trend. Without a mechanism to translate stock into story, the client interaction loses its shape.
                        </p>
                        <p className="font-sans text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                            VAULT bridges the divide. We synchronize product availability with client desire. Our OS ensures the store team knows exactly what to sell and who to sell it to.
                        </p>
                    </div>
                </div>

                <div
                    className={`relative group transition-all duration-1000 delay-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? "opacity-100 translate-y-0 rotate-1" : "opacity-0 translate-y-20 rotate-2"
                        }`}
                >
                    <div className="relative bg-[#fffdf9] dark:bg-[#111] p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-black/5 dark:border-white/5 transition-transform duration-700 group-hover:rotate-0">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/40 dark:bg-white/5 backdrop-blur-sm rotate-1 shadow-sm border border-white/20"></div>

                        <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 mb-10 text-center">
                            The Friction
                        </h3>

                        <div className="space-y-10">
                            {frictionPoints.map((point, idx) => (
                                <div key={idx} className="group/item flex gap-6 items-baseline">
                                    <span className="font-sans text-lg italic text-zinc-300 group-hover/item:text-black dark:group-hover/item:text-white transition-colors duration-300">
                                        {point.number}
                                    </span>
                                    <div>
                                        <h4 className="font-serif text-xl text-black dark:text-white mb-2 transition-colors">
                                            {point.title}
                                        </h4>
                                        <p className="font-sans text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
                                            {point.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t border-black/5 dark:border-white/5">
                            <p className="font-serif italic text-lg text-black dark:text-white leading-snug">
                                The Result: Margin leakage and a service standard that fails to match the quality of the inventory.
                            </p>
                        </div>

                    </div>

                    <div className="absolute inset-0 bg-black/5 dark:bg-white/5 translate-x-3 translate-y-3 -z-10 w-full h-full blur-sm rounded-sm"></div>
                </div>

            </div>
        </section>
    );
}