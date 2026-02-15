import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Page Not Found",
    robots: { index: false, follow: false },
};

export default function NotFound() {
    return (
        <main className="min-h-screen w-full bg-[#f4f1ea] dark:bg-[#0a0a0a] flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">

            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}>
            </div>

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="relative z-10 max-w-lg">

                <div className="mb-8">
                    <span className="font-mono text-[12px] uppercase tracking-widest text-red-600 dark:text-red-500 border border-red-600/20 dark:border-red-500/20 px-4 py-2 rounded-full">
                        Error: 404
                    </span>
                </div>

                <h1 className="font-serif text-6xl md:text-8xl text-black dark:text-white leading-none mb-6">
                    Sequence<br />Interrupted.
                </h1>

                <p className="font-sans text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-12">
                    The coordinates you entered do not resolve to a valid asset within the archive. The page may have been moved, redacted, or never existed.
                </p>

                <Link
                    href="/"
                    className="group relative inline-flex items-center justify-center overflow-hidden"
                >
                    <span className="absolute inset-0 border border-black/10 dark:border-white/10 rounded-sm scale-105 transition-transform duration-500 group-hover:scale-110"></span>

                    <span className="relative bg-black dark:bg-white text-white dark:text-black px-12 py-4 rounded-sm font-sans text-xs font-bold uppercase tracking-[0.25em] transition-all duration-300 group-hover:bg-zinc-800 dark:group-hover:bg-zinc-200">
                        Return to Console
                    </span>
                </Link>

            </div>

            <div className="absolute bottom-12 left-0 right-0 text-center opacity-30">
                <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                    System ID: VLT-NULL-POINTER
                </span>
            </div>

        </main>
    );
}