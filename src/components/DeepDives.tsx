"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const features = [
    {
        id: "01",
        title: "The Daily Operating Picture.",
        subtitle: "The User Dashboard",
        body: "A role-aware command center that replaces manual prioritization. The Dashboard aggregates disparate signals—arrivals, fittings, and client activity—into a single ranked view of what matters today.",
        image: "/assets/images/dashboard.webp"
    },
    {
        id: "02",
        title: "Real-Time Merchandising.",
        subtitle: "Arrivals Intake",
        body: "VAULT transforms inventory intake from a logistical task into a sales strategy. By identifying demand the moment product arrives, the system routes newness to the selling workflow immediately.",
        image: "/assets/images/intake.webp"
    },
    {
        id: "03",
        title: "Constraint-Grounded Curation.",
        subtitle: "Capsule Curation",
        body: "A workflow designed to scale your team's taste. The system drafts the edit based on availability and feasibility; the stylist defines the final look. It is technology stepping back to let human expertise shine.",
        image: "/assets/images/curation.webp"
    },
    {
        id: "04",
        title: "Commercial Direction.",
        subtitle: "Trend Atlas",
        body: "Trend Atlas translates global fashion signals into inventory decisions. By integrating market momentum with on-hand stock, the system ensures your priorities always align with the broader conversation.",
        image: "/assets/images/trend-atlas.webp"
    }
];

export default function DeepDives() {
    const [activeIndex, setActiveIndex] = useState(0);
    const textRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-40% 0px -40% 0px",
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = Number(entry.target.getAttribute("data-index"));
                    setActiveIndex(index);
                }
            });
        }, observerOptions);

        textRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative w-full bg-[#f4f1ea] dark:bg-[#0a0a0a] py-24 md:py-32">

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20 md:mb-32">
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 block mb-4">
                    Chapter IV — The Platform
                </span>
                <h2 className="font-serif text-5xl md:text-7xl text-black dark:text-white leading-[0.9]">
                    System<br />Specifications.
                </h2>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                <div className="hidden lg:flex relative lg:order-1 lg:sticky lg:top-32 lg:h-[600px] items-start justify-center">

                    <div className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-[#e8e6df] dark:bg-[#151515] border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden p-2 md:p-4 transition-all duration-500">
                        <div className="absolute top-0 left-0 w-32 h-8 bg-[#f4f1ea] dark:bg-[#222] border-b border-r border-black/10 dark:border-white/10 rounded-br-lg flex items-center justify-center z-20">
                            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                                Exhibit {features[activeIndex].id}
                            </span>
                        </div>

                        <div className="relative w-full h-full bg-white dark:bg-black shadow-inner border border-black/5 dark:border-white/5 overflow-hidden">

                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${activeIndex === index
                                        ? "opacity-100 scale-100 blur-0 translate-y-0 grayscale-0"
                                        : "opacity-0 scale-105 blur-sm translate-y-4 grayscale"
                                        }`}
                                >
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-cover"
                                        sizes="50vw"
                                        priority={index === 0}
                                    />

                                    <div className="absolute inset-0 bg-black/5 dark:bg-white/5 pointer-events-none mix-blend-overlay"></div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>


                <div className="relative flex flex-col gap-[10vh] lg:gap-[50vh] pb-[10vh] lg:pb-[20vh] pt-[5vh] lg:pt-[10vh] order-1 lg:order-2">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            data-index={index}
                            ref={(el) => { textRefs.current[index] = el; }}
                            className={`flex flex-col gap-6 transition-all duration-500 ${activeIndex === index ? "opacity-100" : "lg:opacity-30 lg:blur-[1px]"}`}
                        >
                            <span className="font-sans font-thin tracking-tighter text-6xl md:text-8xl text-zinc-300 dark:text-zinc-700 leading-none -ml-4 select-none">
                                {feature.id}
                            </span>

                            <div className="border-l-2 border-black/10 dark:border-white/10 pl-6 md:pl-8">
                                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 block mb-3">
                                    {feature.subtitle}
                                </span>
                                <h3 className="font-serif text-3xl md:text-4xl text-black dark:text-white mb-6 leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="font-sans text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md">
                                    {feature.body}
                                </p>
                            </div>

                            <div className="lg:hidden w-full aspect-video relative bg-zinc-100 dark:bg-zinc-900 border border-black/10 mt-4 overflow-hidden">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover"
                                    sizes="100vw"
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}