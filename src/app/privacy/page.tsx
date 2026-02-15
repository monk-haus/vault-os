import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Privacy Policy for VAULT. Learn how we collect, use, and protect your personal data when you visit thevaulthq.io or use our agentic commerce platform for luxury retail.",
    alternates: {
        canonical: "https://thevaulthq.io/privacy",
    },
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen w-full bg-[#f4f1ea] dark:bg-[#0a0a0a] flex flex-col items-center px-6 pt-32 pb-24">
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="relative w-full max-w-3xl bg-white dark:bg-[#111] shadow-2xl border border-black/5 dark:border-white/5 p-8 md:p-16">

                <div className="mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-8">
                    <h1 className="font-serif text-4xl md:text-5xl text-black dark:text-white mb-4">
                        Privacy Policy.
                    </h1>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                        Last Updated: February 2026
                    </p>
                </div>

                <div className="space-y-8 font-sans text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                    <section>
                        <h2 className="font-sans text-2xl text-black dark:text-white mb-4">1. Introduction</h2>
                        <p>
                            VAULT (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy and security of the personal data we process. This Privacy Policy explains how we collect, use, store, and disclose information when you visit our website at thevaulthq.io, submit an enterprise inquiry, or use our agentic commerce platform (collectively, the &ldquo;Service&rdquo;). By accessing or using the Service, you acknowledge that you have read and understood this Privacy Policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl text-black dark:text-white mb-4">2. Information We Collect</h2>
                        <p className="mb-3">We collect the following categories of information:</p>

                        <h3 className="font-sans text-lg text-black dark:text-white mb-2 mt-4">a. Information You Provide Directly</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Identity Data:</strong> your name, job title, and role within your organization, as submitted through our enterprise inquiry form.</li>
                            <li><strong>Contact &amp; Organizational Data:</strong> the name of your organization or retail house, and any details provided in your inquiry message.</li>
                            <li><strong>Operational Focus:</strong> your area of responsibility (e.g., merchandising, retail operations, clienteling, or executive leadership), as selected during the inquiry process.</li>
                        </ul>

                        <h3 className="font-sans text-lg text-black dark:text-white mb-2 mt-4">b. Information Collected Automatically</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Technical Data:</strong> IP address, browser type and version, device information, operating system, time zone, and general location data.</li>
                            <li><strong>Usage Data:</strong> pages visited, time spent on pages, navigation paths, and interaction patterns within the Service.</li>
                        </ul>

                        <h3 className="font-sans text-lg text-black dark:text-white mb-2 mt-4">c. Platform Data (Enterprise Users)</h3>
                        <p>
                            For organizations with active platform access, the Service may process inventory data, client relationship records, merchandising configurations, and operational metrics as necessary to deliver the Service. The scope of such processing is defined by your enterprise agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl text-black dark:text-white mb-4">3. How We Use Your Information</h2>
                        <p className="mb-3">We use the information we collect for the following purposes:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>To process and respond to enterprise access inquiries submitted through our platform;</li>
                            <li>To deliver, maintain, and improve the Service, including our prioritization dashboard, merchandising tools, curation workflows, and market intelligence features;</li>
                            <li>To communicate with you regarding your account, inquiry status, or Service updates;</li>
                            <li>To generate aggregated, anonymized insights for the purpose of improving platform performance and retail intelligence;</li>
                            <li>To detect, investigate, and prevent fraudulent, unauthorized, or illegal activity; and</li>
                            <li>To comply with applicable legal obligations.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl text-black dark:text-white mb-4">4. How We Share Your Information</h2>
                        <p className="mb-3">We do not sell your personal data. We may share information in the following limited circumstances:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Service Providers:</strong> we use Resend to process and deliver email communications related to enterprise inquiries. These providers are contractually obligated to use your data only as necessary to perform services on our behalf.</li>
                            <li><strong>Infrastructure Partners:</strong> the Service is hosted and delivered through Cloudflare, which may process technical data as part of content delivery and security operations.</li>
                            <li><strong>Legal Compliance:</strong> we may disclose information if required to do so by law, regulation, legal process, or governmental request.</li>
                            <li><strong>Business Transfers:</strong> in the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction, subject to the same privacy protections described herein.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl text-black dark:text-white mb-4">5. Data Retention</h2>
                        <p>
                            We retain personal data only for as long as reasonably necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting obligations. Inquiry data is retained for the duration of the business relationship and for a reasonable period thereafter. Enterprise platform data is retained in accordance with your enterprise agreement. When data is no longer required, it is securely deleted or anonymized.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl text-black dark:text-white mb-4">6. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect personal data against unauthorized access, alteration, disclosure, or destruction. These measures include encryption in transit, access controls, and regular security reviews. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl text-black dark:text-white mb-4">7. Your Rights</h2>
                        <p className="mb-3">
                            Depending on your jurisdiction, you may have the following rights with respect to your personal data:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>The right to access the personal data we hold about you;</li>
                            <li>The right to request correction of inaccurate or incomplete data;</li>
                            <li>The right to request deletion of your personal data, subject to legal retention requirements;</li>
                            <li>The right to restrict or object to certain processing activities; and</li>
                            <li>The right to data portability where technically feasible.</li>
                        </ul>
                        <p className="mt-3">
                            To exercise any of these rights, please contact us through the channels described below. We will respond to valid requests within the timeframe required by applicable law.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl text-black dark:text-white mb-4">8. International Data Transfers</h2>
                        <p>
                            Your information may be transferred to and processed in jurisdictions other than your own. Where such transfers occur, we take appropriate steps to ensure that your data receives an adequate level of protection in accordance with applicable data protection laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl text-black dark:text-white mb-4">9. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, or legal requirements. Any material changes will be reflected by updating the &ldquo;Last Updated&rdquo; date at the top of this page. We encourage you to review this Policy periodically. Your continued use of the Service after any changes constitutes acceptance of the updated Policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl text-black dark:text-white mb-4">10. Contact Us</h2>
                        <p>
                            If you have questions about this Privacy Policy, wish to exercise your data rights, or have concerns about how your information is handled, please contact us through our enterprise inquiry portal at <a href="/inquire" className="underline text-black dark:text-white hover:opacity-70 transition-opacity">thevaulthq.io/inquire</a> or reach out to your designated account representative.
                        </p>
                    </section>
                </div>

            </div>
        </main>
    );
}
