"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const sections = [
    {
        label: "Dynamic Prioritization",
        headline: "Two Surfaces. One Shared State.",
        body: "Remove the guesswork from the sales floor. Our Dashboard aggregates disparate signals from inventory, logistics, and client behavior. It presents a ranked view of the highest value actions for the day so your team knows exactly where to focus.",
        image: "/assets/images/platform/vault-homepage.webp",
        layout: "left-image"
    },
    {
        label: "Merchandising Intake",
        headline: "Immediate Sell-Through.",
        body: "Turn logistics into a sales strategy. As soon as a shipment is scanned the system identifies which clients have shown interest in those specific styles. It prompts the team to reach out before the product even hits the floor.",
        image: "/assets/images/platform/new-arrivals-page.webp",
        layout: "right-image"
    },
    {
        label: "The Edit",
        headline: "Digital Curation.",
        body: "Elevate the standard of digital communication. Associates can build shoppable, visually rich lookbooks based on live inventory. Send a finished editorial vision rather than a disjointed screenshot.",
        image: "/assets/images/platform/client-capsule-tool.webp",
        layout: "left-image"
    },
    {
        label: "Market Context",
        headline: "Localized Demand.",
        body: "Align your merchandising with your market. The system integrates broader trend data to show your team which categories are heating up in your specific city so you can push the right product at the right moment.",
        image: "/assets/images/platform/trend-atlas-page.webp",
        layout: "right-image"
    }
];

export default function PlatformClient() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <main className="min-h-screen bg-[#f4f1ea] dark:bg-[#0a0a0a] pt-32 pb-20">

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24 md:mb-32 text-center">
                <h1 className="font-serif text-6xl md:text-8xl text-black dark:text-white leading-[0.9]">
                    The Platform.
                </h1>
                <p className="mt-6 font-sans text-base md:text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
                    A unified retail operating system that connects inventory intelligence, client data, and merchandising workflows in real time.
                </p>
            </div>

            <div className="flex flex-col gap-0">
                {sections.map((section, index) => (
                    <section key={index} className="w-full">
                        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl">

                            {section.layout === "left-image" && (
                                <>
                                    <div className="relative h-[400px] lg:h-auto bg-[#e8e6df] dark:bg-[#151515] border-r border-black/10 dark:border-white/10 p-8 flex items-center justify-center overflow-hidden group">
                                        <div className="absolute inset-0 opacity-[0.05]"
                                            style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                                        </div>
                                        <div className="relative w-[80%] aspect-[4/3] shadow-lg rotate-1 group-hover:rotate-0 transition-transform duration-700">
                                            <Image
                                                src={section.image}
                                                alt={`${section.label} — ${section.headline}`}
                                                fill
                                                className="object-cover grayscale"
                                            />
                                        </div>
                                    </div>

                                    <div className="bg-[#f0ede6] dark:bg-[#111] p-12 md:p-20 flex flex-col justify-center">
                                        <div className="mb-0">
                                            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 block mb-4">
                                                [{section.label}]
                                            </span>
                                            <h2 className="font-serif text-4xl md:text-5xl text-black dark:text-white mb-6">
                                                {section.headline}
                                            </h2>
                                            <p className="font-sans text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-black/10 dark:border-white/10 pt-6">
                                                {section.body}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )}

                            {section.layout === "right-image" && (
                                <>
                                    <div className="order-2 lg:order-1 bg-white dark:bg-[#050505] p-12 md:p-20 flex flex-col justify-center relative overflow-hidden">
                                        <div className="relative z-10 mb-0">
                                            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 block mb-4">
                                                [{section.label}]
                                            </span>
                                            <h2 className="font-serif text-4xl md:text-5xl text-black dark:text-white mb-6">
                                                {section.headline}
                                            </h2>
                                            <p className="font-sans text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-black/5 dark:border-white/5 pt-6">
                                                {section.body}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="order-1 lg:order-2 relative h-[400px] lg:h-auto bg-[#f4f1ea] dark:bg-[#111] p-0 flex items-center justify-center overflow-hidden">
                                        <Image
                                            src={section.image}
                                            alt={`${section.label} — ${section.headline}`}
                                            fill
                                            className="object-cover opacity-90 hover:scale-105 transition-transform duration-1000 grayscale"
                                        />
                                        <div className="absolute inset-0 bg-black/5 dark:bg-black/40 pointer-events-none"></div>
                                    </div>
                                </>
                            )}

                        </div>
                    </section>
                ))}
            </div>

        </main>
    );
}
