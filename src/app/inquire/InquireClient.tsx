"use client";

import { useEffect, useState } from "react";

export default function InquireClient() {
    const [loaded, setLoaded] = useState(false);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const [formData, setFormData] = useState({
        name: "",
        org: "",
        role: "",
        focus: "",
        inquiry: ""
    });

    useEffect(() => {
        setLoaded(true);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("/api/inquire", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", org: "", role: "", focus: "", inquiry: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <main className="min-h-screen w-full bg-[#f4f1ea] dark:bg-[#0a0a0a] flex flex-col items-center justify-center px-6 pt-32 pb-12">

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className={`relative w-full max-w-2xl bg-white dark:bg-[#111] shadow-2xl border border-black/5 dark:border-white/5 p-8 md:p-16 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>

                {status === "success" ? (
                    <div className="flex flex-col items-center justify-center text-center py-12 animate-fadeIn">
                        <div className="w-16 h-16 border border-black dark:border-white rounded-full flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl text-black dark:text-white mb-4">
                            Inquiry Transmitted.
                        </h2>
                        <p className="font-sans text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-md">
                            Your request has been logged in the archive. Our team will review your dossier and establish contact shortly.
                        </p>
                        <button
                            onClick={() => setStatus("idle")}
                            className="mt-8 text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                        >
                            Submit another request
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="text-center mb-16">
                            <h1 className="font-serif text-4xl md:text-5xl text-black dark:text-white mb-4">
                                Enterprise Access.
                            </h1>
                            <p className="font-sans text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-md mx-auto">
                                We are actively onboarding retail partners who are ready to elevate their operational standard. Connect with our team to discuss deployment for your brand.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-12">

                            <div className="group relative">
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    autoComplete="name"
                                    className="peer w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 text-black dark:text-white font-serif text-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder-transparent"
                                    placeholder="Name"
                                />
                                <label
                                    htmlFor="name"
                                    className={`absolute left-0 transition-all ${formData.name ? "-top-3 text-[10px] text-black dark:text-white" : "-top-3 text-[10px] text-zinc-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-black dark:peer-focus:text-white"} font-mono uppercase tracking-widest`}
                                >
                                    Name
                                </label>
                            </div>

                            <div className="group relative">
                                <input
                                    type="text"
                                    id="org"
                                    value={formData.org}
                                    onChange={handleChange}
                                    required
                                    autoComplete="organization"
                                    className="peer w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 text-black dark:text-white font-serif text-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder-transparent"
                                    placeholder="Organization / House"
                                />
                                <label
                                    htmlFor="org"
                                    className={`absolute left-0 transition-all ${formData.org ? "-top-3 text-[10px] text-black dark:text-white" : "-top-3 text-[10px] text-zinc-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-black dark:peer-focus:text-white"} font-mono uppercase tracking-widest`}
                                >
                                    Organization / House
                                </label>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                                <div className="group relative">
                                    <input
                                        type="text"
                                        id="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        required
                                        autoComplete="organization-title"
                                        className="peer w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 text-black dark:text-white font-serif text-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder-transparent"
                                        placeholder="Role"
                                    />
                                    <label
                                        htmlFor="role"
                                        className={`absolute left-0 transition-all ${formData.role ? "-top-3 text-[10px] text-black dark:text-white" : "-top-3 text-[10px] text-zinc-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-black dark:peer-focus:text-white"} font-mono uppercase tracking-widest`}
                                    >
                                        Role
                                    </label>
                                </div>

                                <div className="group relative">
                                    <select
                                        id="focus"
                                        required
                                        value={formData.focus}
                                        onChange={handleChange}
                                        className="peer w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 text-black dark:text-white font-serif text-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled className="text-zinc-400">Select Focus...</option>
                                        <option value="merchandising">Merchandising</option>
                                        <option value="retail_ops">Retail Operations</option>
                                        <option value="clienteling">Clienteling</option>
                                        <option value="executive">Executive</option>
                                    </select>
                                    <label
                                        htmlFor="focus"
                                        className="absolute left-0 -top-3 text-[10px] font-mono uppercase tracking-widest text-zinc-400"
                                    >
                                        Operational Focus
                                    </label>
                                    <div className="absolute right-0 top-4 pointer-events-none">
                                        <svg className="w-3 h-3 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>

                            </div>

                            <div className="group relative">
                                <textarea
                                    id="inquiry"
                                    value={formData.inquiry}
                                    onChange={handleChange}
                                    rows={3}
                                    className="peer w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 text-black dark:text-white font-serif text-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder-transparent resize-none"
                                    placeholder="Inquiry"
                                ></textarea>
                                <label
                                    htmlFor="inquiry"
                                    className={`absolute left-0 transition-all ${formData.inquiry ? "-top-3 text-[10px] text-black dark:text-white" : "-top-3 text-[10px] text-zinc-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-black dark:peer-focus:text-white"} font-mono uppercase tracking-widest`}
                                >
                                    Inquiry
                                </label>
                            </div>

                            <div className="pt-8 text-center">
                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="group relative inline-flex items-center justify-center overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span className="absolute inset-0 border border-black/10 dark:border-white/10 rounded-sm scale-105 transition-transform duration-500 group-hover:scale-110"></span>
                                    <span className="relative bg-black dark:bg-white text-white dark:text-black px-12 py-4 rounded-sm font-sans text-xs font-bold uppercase tracking-[0.25em] transition-all duration-300 group-hover:bg-zinc-800 dark:group-hover:bg-zinc-200">
                                        {status === "submitting" ? "Processing..." : "Request Access"}
                                    </span>
                                </button>
                                {status === "error" && (
                                    <p className="mt-4 text-red-500 font-mono text-xs uppercase tracking-widest">
                                        Transmission Failed. Please try again.
                                    </p>
                                )}
                            </div>

                        </form>
                    </>
                )}

            </div>
        </main>
    );
}
