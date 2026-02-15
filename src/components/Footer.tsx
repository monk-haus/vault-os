import Link from "next/link";

export default function Footer() {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Platform", href: "/platform" },
        { name: "Mission", href: "/mission" },
        { name: "Journal", href: "/journal" },
        { name: "Inquire", href: "/inquire" },
    ];

    return (
        <footer className="w-full bg-[#050505] text-white pt-0 pb-12 px-6 border-t border-white/5">
            <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-12">

                <div className="text-center pt-12">
                    <p className="font-serif text-2xl md:text-3xl italic text-zinc-400">
                        "Operate with intention."
                    </p>
                </div>

                <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/5 pt-8 mt-4">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-600">
                        VAULT © 2026
                    </span>

                    <div className="flex gap-6">
                        <Link
                            href="https://www.linkedin.com/company/thevaulthq/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[9px] uppercase tracking-widest text-zinc-600 hover:text-zinc-400 transition-colors"
                        >
                            LinkedIn
                        </Link>
                        <Link href="/privacy" className="font-mono text-[9px] uppercase tracking-widest text-zinc-600 hover:text-zinc-400 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="font-mono text-[9px] uppercase tracking-widest text-zinc-600 hover:text-zinc-400 transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}