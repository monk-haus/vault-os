"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function JournalClient() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <main className="min-h-screen w-full bg-[#f4f1ea] dark:bg-[#0a0a0a] pt-32 pb-20">

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-[1000px] mx-auto px-6 md:px-12 relative z-10">

                <div className={`mb-24 text-center transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                    <h1 className="font-serif text-6xl md:text-8xl text-black dark:text-white leading-[0.9] mb-8">
                        The Archive.
                    </h1>
                    <p className="font-sans text-base md:text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto border-l border-black/10 dark:border-white/10 pl-6">
                        Conversations, critical analysis, and coverage. A growing record of the dialogue surrounding VAULT and the future of commerce.
                    </p>
                </div>

                <div className="border-t border-black/10 dark:border-white/10">

                    <article className={`group relative border-b border-black/10 dark:border-white/10 py-16 transition-all duration-1000 delay-200 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">

                            <div className="md:col-span-3 flex flex-col gap-2">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-black dark:text-white font-bold">
                                    Technocouture
                                </span>
                                <time dateTime="2025-12-02" className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                                    Dec 02, 2025
                                </time>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mt-4">
                                    Auth: Navya Kilaru
                                </span>
                            </div>

                            <div className="md:col-span-9 flex flex-col gap-6">

                                <h2 className="font-serif text-3xl md:text-4xl text-black dark:text-white leading-tight group-hover:opacity-70 transition-opacity duration-300">
                                    The Fashion-Tech Startup Reimagining Luxury Retail
                                </h2>

                                <div className="relative pl-6">
                                    <span className="absolute top-0 left-0 text-4xl text-black/10 dark:text-white/10 font-serif leading-none" aria-hidden="true">&ldquo;</span>
                                    <blockquote className="font-serif text-lg md:text-xl italic text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                        In an era obsessed with AI, VAULT&apos;s insistence on elevating judgment, taste, and relationship-building feels not just refreshing but necessary. VAULT is proving that the future of luxury won&apos;t belong to brands that automate the magic out of the experience, but to those that build technology quiet enough to let human expertise shine.
                                    </blockquote>
                                </div>

                                <p className="font-sans text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mt-2 max-w-2xl">
                                    An in-depth conversation with founders Olaitan Ajlore and Haboon Nur on the hidden inefficiencies of the luxury salon, the geometry of their co-founder partnership, and why &ldquo;time&rdquo; remains the ultimate luxury asset.
                                </p>
                                <div className="mt-4">
                                    <Link
                                        href="https://open.substack.com/pub/technocouture/p/the-fashion-tech-startup-reimagining?utm_campaign=post-expanded-share&utm_medium=web"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-black dark:text-white hover:opacity-60 transition-opacity border-b border-black dark:border-white pb-1"
                                    >
                                        Read the Full Entry
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </Link>
                                </div>

                            </div>

                        </div>
                    </article>

                </div>

            </div>
        </main>
    );
}
