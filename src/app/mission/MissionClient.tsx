"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MissionClient() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <main className="min-h-screen bg-[#f4f1ea] dark:bg-[#0a0a0a] pt-32 pb-20 flex flex-col justify-between">

            <div className="max-w-4xl mx-auto px-6 md:px-12 w-full">

                <div className={`mb-12 text-center transition-all duration-1000 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 border border-black/10 dark:border-white/10 px-3 py-1 rounded-full">
                        Mission Statement
                    </span>
                </div>

                <h1 className={`font-serif text-5xl md:text-7xl lg:text-8xl text-center text-black dark:text-white leading-[0.9] mb-20 transition-all duration-1000 delay-200 ease-[cubic-bezier(0.25,1,0.5,1)] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                    Infrastructure for<br />Agentic Commerce.
                </h1>

                <div className="space-y-12 md:space-y-16">

                    <div className={`flex flex-col gap-6 transition-all duration-1000 delay-500 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                        <p className="font-sans text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light max-w-2xl mx-auto text-center">
                            Commerce is shifting from passive tools to agentic systems. Premium retail requires infrastructure that does not merely report on the past, but actively orchestrates the future.
                        </p>
                    </div>

                    <div className={`relative py-8 transition-all duration-1000 delay-700 ease-out ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-black/10 dark:bg-white/10"></div>

                        <p className="relative z-10 font-serif text-3xl md:text-4xl text-black dark:text-white text-center leading-tight bg-[#f4f1ea] dark:bg-[#0a0a0a] py-4 px-4 max-w-3xl mx-auto">
                            Yet, the defining asset of any House is not its data, but its <span className="italic">instinct.</span>
                        </p>
                    </div>

                    <div className={`flex flex-col gap-6 transition-all duration-1000 delay-900 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                        <p className="font-sans text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light max-w-2xl mx-auto text-center">
                            VAULT is built to scale that advantage. We absorb the computational weight of the enterprise. We handle logistics, allocation, and compliance to liberate your talent for high-leverage execution.
                        </p>
                        <p className="font-sans text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light max-w-2xl mx-auto text-center">
                            We do not replace human judgment. We clear the path for it to scale.
                        </p>
                    </div>

                    <div className={`transition-all duration-1000 delay-1000 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                        <p className="font-serif text-3xl md:text-4xl text-black dark:text-white text-center leading-tight border-y border-black/10 dark:border-white/10 py-10 md:py-12">
                            We architect the operation.<br />
                            <span className="italic text-zinc-500">You define the narrative.</span>
                        </p>
                    </div>

                    <div className={`pt-12 pb-12 transition-all duration-1000 delay-[1100ms] ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 max-w-3xl mx-auto">

                            <div className="flex flex-col items-center text-center group">
                                <div className="relative w-48 h-64 md:w-56 md:h-72 mb-6 overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                                    <Image
                                        src="/assets/images/olaitan.jpeg"
                                        alt="Olaitan Ajilore, Founder and CEO of VAULT"
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                                    />
                                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-black/30 dark:border-white/30"></div>
                                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-black/30 dark:border-white/30"></div>
                                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-black/30 dark:border-white/30"></div>
                                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-black/30 dark:border-white/30"></div>
                                </div>

                                <h3 className="font-serif text-2xl text-black dark:text-white mb-1">Olaitan Ajilore</h3>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-4">Founder & CEO</span>

                                <div className="flex gap-4">
                                    <Link href="https://www.linkedin.com/in/olaitanajilore/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                        <span className="sr-only">Olaitan Ajilore on LinkedIn</span>
                                    </Link>
                                    <Link href="mailto:olai@thevaulthq.co" className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                        <span className="sr-only">Email Olaitan Ajilore</span>
                                    </Link>
                                </div>
                            </div>

                            <div className="flex flex-col items-center text-center group">
                                <div className="relative w-48 h-64 md:w-56 md:h-72 mb-6 overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                                    <Image
                                        src="/assets/images/haboon.jpeg"
                                        alt="Haboon Nur, Co-Founder and CTO of VAULT"
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                                    />
                                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-black/30 dark:border-white/30"></div>
                                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-black/30 dark:border-white/30"></div>
                                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-black/30 dark:border-white/30"></div>
                                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-black/30 dark:border-white/30"></div>
                                </div>

                                <h3 className="font-serif text-2xl text-black dark:text-white mb-1">Haboon Nur</h3>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-4">Co-Founder & CTO</span>

                                <div className="flex gap-4">
                                    <Link href="https://www.linkedin.com/in/haboon/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                        <span className="sr-only">Haboon Nur on LinkedIn</span>
                                    </Link>
                                    <Link href="mailto:haboon@thevaulthq.co" className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                        <span className="sr-only">Email Haboon Nur</span>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className={`mt-12 md:mt-20 max-w-[1400px] mx-auto px-6 md:px-12 w-full transition-all duration-1000 delay-[1300ms] ease-out ${loaded ? "opacity-100" : "opacity-0"}`}>
                <div className="border-t border-black/10 dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-8">

                    <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                        Supported By
                    </span>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {["NVIDIA INCEPTION", "WGSN", "SAVOIR FLAIR"].map((partner, i) => (
                            <span
                                key={i}
                                className="font-sans font-bold text-xs md:text-sm tracking-[0.15em] text-zinc-800 dark:text-zinc-200 uppercase"
                            >
                                {partner}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

        </main>
    );
}
