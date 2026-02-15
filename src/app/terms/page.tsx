import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
    description:
        "Terms of Service governing access to and use of the VAULT enterprise retail operating system, including merchandising intelligence, clienteling workflows, and inventory orchestration tools.",
    alternates: {
        canonical: "https://thevaulthq.io/terms",
    },
};

export default function TermsPage() {
    return (
        <main className="min-h-screen w-full bg-[#f4f1ea] dark:bg-[#0a0a0a] flex flex-col items-center px-6 pt-32 pb-24">
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="relative w-full max-w-3xl bg-white dark:bg-[#111] shadow-2xl border border-black/5 dark:border-white/5 p-8 md:p-16">

                <div className="mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-8">
                    <h1 className="font-serif text-4xl md:text-5xl text-black dark:text-white mb-4">
                        Terms of Service.
                    </h1>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                        Last Updated: February 2026
                    </p>
                </div>

                <div className="space-y-8 font-sans text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                    <section>
                        <h2 className="font-sans text-2xl text-black dark:text-white mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using the VAULT platform, website, and related services (collectively, the &ldquo;Service&rdquo;), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you are accepting these Terms on behalf of an organization, you represent and warrant that you have the authority to bind that organization. If you do not agree to these Terms, you must discontinue use of the Service immediately.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl text-black dark:text-white mb-4">2. Description of Service</h2>
                        <p className="mb-3">
                            VAULT provides an agentic commerce platform designed for modern luxury retail. The Service includes, but is not limited to:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>A dynamic prioritization dashboard for retail operations;</li>
                            <li>Real-time merchandising intake and inventory intelligence tools;</li>
                            <li>Constraint-grounded capsule curation and digital lookbook generation;</li>
                            <li>Localized market intelligence and trend analysis;</li>
                            <li>A client-facing interface for managing brand relationships and digital wardrobes; and</li>
                            <li>An enterprise inquiry portal for access requests.</li>
                        </ul>
                        <p className="mt-3">
                            We reserve the right to modify, suspend, or discontinue any part of the Service at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl text-black dark:text-white mb-4">3. Enterprise Access and Accounts</h2>
                        <p className="mb-3">
                            Access to the VAULT platform is granted exclusively through approved enterprise partnerships. By submitting an inquiry or receiving access credentials, you agree to:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Provide accurate, current, and complete information during the registration or inquiry process;</li>
                            <li>Maintain and promptly update your account information;</li>
                            <li>Maintain the security and confidentiality of your login credentials and restrict access to your account;</li>
                            <li>Accept responsibility for all activities that occur under your account; and</li>
                            <li>Notify VAULT immediately of any unauthorized access or security breach.</li>
                        </ul>
                        <p className="mt-3">
                            We reserve the right to refuse, suspend, or terminate access at our sole discretion if we reasonably believe that any account information is inaccurate, or that the account has been compromised or misused.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl text-black dark:text-white mb-4">4. Permitted Use</h2>
                        <p className="mb-3">
                            You may use the Service solely for lawful business purposes in connection with your organization&rsquo;s retail operations. You shall not:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Reverse engineer, decompile, or disassemble any portion of the Service;</li>
                            <li>Use the Service to develop a competing product or service;</li>
                            <li>Scrape, harvest, or extract data from the Service through automated means;</li>
                            <li>Sublicense, resell, or redistribute access to the Service without our written consent; or</li>
                            <li>Use the Service in any manner that could damage, disable, or impair its operation.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl text-black dark:text-white mb-4">5. Intellectual Property</h2>
                        <p className="mb-3">
                            The Service&mdash;including all software, algorithms, models, user interfaces, designs, text, graphics, trademarks, and other content&mdash;is and shall remain the exclusive property of VAULT and its licensors. These Terms do not grant you any right, title, or interest in the Service except for the limited right to use it in accordance with these Terms.
                        </p>
                        <p>
                            Any data, insights, or outputs generated by the Service using your organization&rsquo;s proprietary data shall be governed by the terms of your enterprise agreement. In the absence of such an agreement, VAULT retains all rights to aggregated, anonymized, and de-identified data derived from your use of the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl text-black dark:text-white mb-4">6. Confidentiality</h2>
                        <p>
                            Each party acknowledges that it may receive confidential information from the other party in connection with the Service. Confidential information includes, without limitation, business strategies, client lists, inventory data, product information, and proprietary technology. Each party agrees to use the other party&rsquo;s confidential information solely for the purpose of performing its obligations under these Terms and to protect such information with no less than the same degree of care it uses to protect its own confidential information.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl text-black dark:text-white mb-4">7. Disclaimers</h2>
                        <p className="mb-3">
                            THE SERVICE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, VAULT DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                        </p>
                        <p>
                            VAULT does not warrant that the Service will be uninterrupted, error-free, or entirely secure, nor does it make any representation regarding the accuracy, reliability, or completeness of any trend data, market intelligence, or recommendations provided through the Service. You acknowledge that business decisions made in reliance on the Service are made at your own discretion and risk.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl text-black dark:text-white mb-4">8. Limitation of Liability</h2>
                        <p className="mb-3">
                            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL VAULT, ITS FOUNDERS, OFFICERS, EMPLOYEES, AGENTS, PARTNERS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, REVENUE, DATA, BUSINESS OPPORTUNITIES, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE SERVICE.
                        </p>
                        <p>
                            VAULT&rsquo;S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THESE TERMS SHALL NOT EXCEED THE AMOUNTS PAID BY YOU TO VAULT IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR ONE HUNDRED U.S. DOLLARS ($100), WHICHEVER IS GREATER.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl text-black dark:text-white mb-4">9. Indemnification</h2>
                        <p>
                            You agree to indemnify, defend, and hold harmless VAULT and its founders, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in any way connected with your access to or use of the Service, your violation of these Terms, or your infringement of any third-party rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl text-black dark:text-white mb-4">10. Term and Termination</h2>
                        <p className="mb-3">
                            These Terms remain in effect for as long as you maintain access to or use the Service. We may terminate or suspend your access immediately, without prior notice, for any reason, including breach of these Terms.
                        </p>
                        <p>
                            Upon termination, your right to use the Service will cease immediately. Sections relating to intellectual property, confidentiality, limitation of liability, indemnification, and governing law shall survive any termination.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl text-black dark:text-white mb-4">11. Governing Law and Dispute Resolution</h2>
                        <p className="mb-3">
                            These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law principles.
                        </p>
                        <p>
                            Any dispute arising out of or relating to these Terms shall first be submitted to good-faith negotiation between the parties. If the dispute cannot be resolved through negotiation within thirty (30) days, either party may pursue binding arbitration in accordance with the rules of the American Arbitration Association, with proceedings to be held in Delaware. Each party shall bear its own costs and fees in connection with such arbitration.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl text-black dark:text-white mb-4">12. Amendments</h2>
                        <p>
                            We reserve the right to revise these Terms at any time by posting updated terms on this page and updating the &ldquo;Last Updated&rdquo; date. Your continued use of the Service following the posting of revised Terms constitutes your acceptance of such changes. It is your responsibility to review these Terms periodically.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl text-black dark:text-white mb-4">13. Contact</h2>
                        <p>
                            If you have questions regarding these Terms, please reach out through the enterprise inquiry portal at <a href="/inquire" className="underline text-black dark:text-white hover:opacity-70 transition-opacity">thevaulthq.io/inquire</a> or contact your designated account representative.
                        </p>
                    </section>
                </div>

            </div>
        </main>
    );
}
