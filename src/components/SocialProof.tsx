export default function SocialProof() {
    const partners = [
        "NVIDIA INCEPTION",
        "WGSN",
        "SAVOIR FLAIR"
    ];

    return (
        <section className="w-full px-6 md:px-12 py-12 border-y border-black/5 dark:border-white/5 bg-white/50 dark:bg-white/5">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

                <div className="md:w-1/3">
                    <h3 className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                        Powering the Next Era of<br />High-Touch Retail
                    </h3>
                </div>

                <div className="md:w-2/3 flex flex-wrap gap-x-8 gap-y-4 md:justify-end items-center">
                    {partners.map((partner, index) => (
                        <span
                            key={index}
                            className="font-sans text-xs md:text-sm font-medium tracking-[0.15em] text-black/80 dark:text-white/80 uppercase whitespace-nowrap"
                        >
                            {partner}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}