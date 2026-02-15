"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Platform", href: "/platform" },
        { name: "Mission", href: "/mission" },
        { name: "Journal", href: "/journal" },
        { name: "Inquire", href: "/inquire" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${isScrolled ? "py-4 px-4 md:px-8" : "py-6 px-6 md:px-12"
                    }`}
            >
                <div
                    className={`relative mx-auto flex items-center justify-between rounded-xl px-6 py-4 transition-all duration-700 ${isScrolled
                        ? "glass-panel shadow-sm w-full max-w-7xl"
                        : "bg-transparent w-full"
                        }`}
                >
                    <div className="flex items-center z-50">
                        <Link href="/" onClick={() => setIsMobileOpen(false)} className="relative block">
                            <Image
                                src="/assets/images/VAULT-logo-new.png"
                                alt="VAULT — The Operating System for Luxury Retail"
                                width={180}
                                height={60}
                                className="object-contain h-10 md:h-14 w-auto hover:opacity-70 transition-opacity duration-300"
                                priority
                            />
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="group relative text-xs font-sans font-medium tracking-[0.2em] uppercase text-zinc-600 transition-colors duration-300 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                            >
                                {link.name}
                                <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-black dark:bg-white transition-all duration-300 group-hover:w-1/2 group-hover:-translate-x-1/2 opacity-0 group-hover:opacity-50"></span>
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-6">
                        <Link
                            href="/inquire"
                            className="hidden md:flex items-center justify-center px-6 py-2 rounded-full border border-black/10 bg-transparent transition-all duration-500 hover:border-black/30 hover:bg-black/5 dark:border-white/10 dark:hover:border-white/30 dark:hover:bg-white/5"
                        >
                            <span className="text-[10px] font-sans font-semibold tracking-widest uppercase text-black dark:text-white">
                                Request Access
                            </span>
                        </Link>

                        <button
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            className="z-50 md:hidden flex flex-col items-end gap-[6px] p-2 group"
                            aria-label="Toggle Menu"
                        >
                            <span
                                className={`h-[1px] bg-black dark:bg-white transition-all duration-300 ease-out ${isMobileOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-8 group-hover:w-6"
                                    }`}
                            />
                            <span
                                className={`h-[1px] bg-black dark:bg-white transition-all duration-300 ease-out ${isMobileOpen ? "opacity-0" : "w-5 group-hover:w-8"
                                    }`}
                            />
                            <span
                                className={`h-[1px] bg-black dark:bg-white transition-all duration-300 ease-out ${isMobileOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-8 group-hover:w-6"
                                    }`}
                            />
                        </button>
                    </div>
                </div>
            </header>

            <div
                className={`fixed inset-0 z-40 bg-[#f4f1ea] dark:bg-zinc-950 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${isMobileOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <div className="flex flex-col h-full justify-center px-8 relative">

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
                        <span className="font-serif text-[20vw] font-bold">V</span>
                    </div>

                    <div className="flex flex-col gap-8 items-center md:items-start z-10">
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileOpen(false)}
                                className="text-4xl md:text-5xl font-serif text-black dark:text-white transition-all duration-500 hover:tracking-widest"
                                style={{ transitionDelay: `${100 + i * 50}ms` }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/inquire"
                            onClick={() => setIsMobileOpen(false)}
                            className="mt-12 text-sm font-sans tracking-[0.2em] uppercase text-zinc-500 border-b border-zinc-300 pb-1 hover:text-black dark:hover:text-white transition-colors"
                        >
                            Request Access
                        </Link>
                    </div>

                    <div className="absolute bottom-12 left-0 right-0 text-center">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">
                            Volume 01 . Index
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}