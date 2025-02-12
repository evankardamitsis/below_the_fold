'use client'

import { motion } from 'framer-motion'

export default function PrivacyPage() {
    return (
        <section className="py-24 bg-page-light">
            <div className="mx-auto max-w-[1620px] px-8">
                {/* Header */}
                <div className="mb-16">
                    <motion.h1
                        className="text-[2rem] font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        PRIVACY POLICY
                    </motion.h1>
                    <motion.p
                        className="text-neutral-600 text-[14px] lg:text-[15px] leading-relaxed tracking-wide font-medium uppercase w-full lg:max-w-[550px]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Last updated: March 14, 2024
                    </motion.p>
                </div>

                {/* Content */}
                <motion.div
                    className="prose prose-lg max-w-[800px] text-neutral-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-neutral-900 mb-4">1. Introduction</h2>
                        <p>
                            Below The Fold (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-neutral-900 mb-4">2. Information We Collect</h2>
                        <h3 className="text-lg font-bold text-neutral-900 mb-2">Personal Information</h3>
                        <p>We may collect personal information that you voluntarily provide to us when you:</p>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Fill out contact forms</li>
                            <li>Subscribe to our newsletter</li>
                            <li>Request a consultation</li>
                            <li>Contact us via email or phone</li>
                        </ul>

                        <h3 className="text-lg font-bold text-neutral-900 mb-2">Automatically Collected Information</h3>
                        <p>When you visit our website, we may automatically collect:</p>
                        <ul className="list-disc pl-6">
                            <li>IP addresses</li>
                            <li>Browser type</li>
                            <li>Device information</li>
                            <li>Usage data</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-neutral-900 mb-4">3. How We Use Your Information</h2>
                        <p>We use the collected information for various purposes:</p>
                        <ul className="list-disc pl-6">
                            <li>To provide and maintain our services</li>
                            <li>To notify you about changes to our services</li>
                            <li>To provide customer support</li>
                            <li>To gather analysis or valuable information to improve our services</li>
                            <li>To monitor the usage of our services</li>
                            <li>To detect, prevent and address technical issues</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-neutral-900 mb-4">4. Data Protection</h2>
                        <p>
                            We implement appropriate technical and organizational measures to maintain the security of your personal information, including but not limited to encryption, access controls, and secure networks.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-neutral-900 mb-4">5. Third-Party Services</h2>
                        <p>
                            We may employ third-party companies and individuals to facilitate our services, provide services on our behalf, perform service-related tasks, or assist us in analyzing how our services are used. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-neutral-900 mb-4">6. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul className="list-disc pl-6">
                            <li>Access your personal information</li>
                            <li>Correct inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Object to our use of your data</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-neutral-900 mb-4">7. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at:{' '}
                            <a
                                href="mailto:hello@belowthefold.gr"
                                className="text-neutral-900 hover:opacity-70 transition-opacity"
                            >
                                hello@belowthefold.gr
                            </a>
                        </p>
                    </section>
                </motion.div>
            </div>
        </section>
    )
} 