"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    const headline = "The Premier Operating System for Modern Retail.";
    const words = headline.split(" ");

    return (
        <section className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden">

            <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                <div className="lg:col-span-7 flex flex-col gap-8 z-10 mix-blend-multiply dark:mix-blend-normal">

                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] md:leading-[0.85] tracking-tight text-black dark:text-white">
                        {words.map((word, i) => (
                            <span key={i} className="inline-block mr-[0.2em] overflow-hidden align-top">
                                <span
                                    className={`inline-block transition-transform duration-1000 ease-[cubic-bezier(0.2,1,0.2,1)] ${loaded ? "translate-y-0" : "translate-y-[120%]"
                                        }`}
                                    style={{ transitionDelay: `${i * 100}ms` }}
                                >
                                    {word}
                                </span>
                            </span>
                        ))}
                    </h1>

                    <div
                        className={`max-w-xl transition-all duration-1000 delay-700 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        <p className="font-sans text-sm md:text-base leading-relaxed tracking-wide text-zinc-600 dark:text-zinc-400 border-l border-black/20 dark:border-white/20 pl-6">
                            <strong className="text-black dark:text-white font-medium">VAULT</strong> aligns the pace of inventory with the depth of the client relationship. A unified workspace for the store team and a curated interface for the private client.
                        </p>
                    </div>

                    <div
                        className={`pt-4 transition-all duration-1000 delay-1000 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        <Link
                            href="/inquire"
                            className="group inline-flex items-center gap-3 text-xs font-sans font-bold uppercase tracking-[0.2em] text-black dark:text-white"
                        >
                            <span className="relative px-6 py-3 border border-black dark:border-white overflow-hidden transition-colors duration-300 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black">
                                Request Access
                            </span>
                            <span className="w-8 h-[1px] bg-black dark:bg-white transition-all duration-300 group-hover:w-12"></span>
                        </Link>
                    </div>
                </div>

                <div className="lg:col-span-5 relative mt-12 lg:mt-0">
                    <div
                        className={`relative w-full aspect-[3/4] md:aspect-[4/5] transition-all duration-1000 delay-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${loaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-95"
                            }`}
                    >

                        <div className="relative w-full h-full overflow-hidden bg-zinc-200 dark:bg-zinc-800 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700 ease-out">
                            <div className="absolute inset-0 bg-neutral-300">
                                <Image
                                    src="/assets/images/hero.webp"
                                    alt="VAULT luxury retail operating system — agentic commerce platform for high-touch retail"
                                    fill
                                    className="object-cover grayscale transition-all duration-1000 scale-105"
                                    priority
                                />
                                <div className="absolute bottom-4 left-4 z-10">
                                    <p className="font-mono text-[10px] text-white/80 uppercase tracking-widest">
                                        Fig 01. / The Agentic Shift
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-black/30 dark:border-white/30" />
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-black/30 dark:border-white/30" />
                    </div>
                </div>
            </div>
        </section>
    );
}