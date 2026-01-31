"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedButton from "@/components/AnimatedButton";
import { fadeInUp, staggerContainer } from "@/lib/animations";
// import emailjs from "@emailjs/browser"; // We need to dynamic import or just standard import. Assuming accessible.
import emailjs from "@emailjs/browser";

export default function ContactSection() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<null | { ok: boolean; msg: string }>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

        try {
            if (!serviceId || !templateId || !publicKey) {
                throw new Error("EmailJS is not configured.");
            }

            const templateParams = {
                name: formState.name,
                email: formState.email,
                message: formState.message,
                title: "Portfolio Contact",
            };

            await emailjs.send(serviceId, templateId, templateParams, { publicKey });
            setSubmitStatus({ ok: true, msg: "Message sent! I'll get back to you shortly." });
            setFormState({ name: "", email: "", message: "" });
        } catch (err: any) {
            setSubmitStatus({ ok: false, msg: err?.message || "Failed to send message." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="p-6 md:p-12 max-w-2xl mx-auto flex flex-col h-full justify-between">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
                <div className="text-center space-y-4">
                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-foreground">
                        Get In Touch
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-gray-800 font-medium text-lg">
                        Have a project in mind or just want to say hi?
                    </motion.p>
                </div>

                <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-sticker border-4 border-border">
                    <div>
                        <label className="block text-sm font-bold text-foreground mb-1 uppercase tracking-wider">Name</label>
                        <input
                            type="text"
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            required
                            className="w-full px-4 py-3 bg-white border-4 border-border rounded-xl text-foreground focus:outline-none focus:shadow-sticker-sm transition-all placeholder:text-gray-400 font-medium"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-foreground mb-1 uppercase tracking-wider">Email</label>
                        <input
                            type="email"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            required
                            className="w-full px-4 py-3 bg-white border-4 border-border rounded-xl text-foreground focus:outline-none focus:shadow-sticker-sm transition-all placeholder:text-gray-400 font-medium"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-foreground mb-1 uppercase tracking-wider">Message</label>
                        <textarea
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            required
                            rows={4}
                            className="w-full px-4 py-3 bg-white border-4 border-border rounded-xl text-foreground focus:outline-none focus:shadow-sticker-sm transition-all resize-none placeholder:text-gray-400 font-medium"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <AnimatedButton type="submit" variant="primary" disabled={isSubmitting} className="w-full justify-center text-lg font-bold">
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </AnimatedButton>

                    {submitStatus && (
                        <p className={`text-center mt-2 text-sm font-bold ${submitStatus.ok ? "text-green-600" : "text-red-500"}`}>
                            {submitStatus.msg}
                        </p>
                    )}
                </motion.form>
            </motion.div>

            <motion.footer variants={fadeInUp} className="py-8 text-center text-gray-500 font-bold text-sm mt-12">
                <p>© 2026 Raymart Leyson. Built with Next.js & Framer Motion.</p>
            </motion.footer>
        </div>
    );
}
