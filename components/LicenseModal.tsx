"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface LicenseModalProps {
  open: boolean;
  onClose: () => void;
  url: string;
  title?: string;
}

export default function LicenseModal({ open, onClose, url, title }: LicenseModalProps) {
  const [key, setKey] = useState("");
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allowed = process.env.NEXT_PUBLIC_RNL_MINI_POS_LICENSE || "";
    if (!allowed) {
      setStatus({ ok: false, msg: "No license configured. Contact the site owner." });
      return;
    }

    if (key.trim() === allowed.trim()) {
      setStatus({ ok: true, msg: "License accepted — opening demo..." });
      // small delay for UX
      setTimeout(() => {
        window.open(url, "_blank");
        setKey("");
        setStatus(null);
        onClose();
      }, 700);
    } else {
      setStatus({ ok: false, msg: "Invalid license key." });
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.18 }}
        className="relative z-10 w-full max-w-md p-6 rounded-2xl bg-gradient-to-br from-white/6 to-white/3 border border-white/10 backdrop-blur-lg"
      >
        <h3 className="text-xl font-bold mb-2 text-white">{title || "Enter License"}</h3>
        <p className="text-sm text-gray-300 mb-4">This project requires a license key to access the live demo. Enter the key provided to you.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="License key"
            aria-label="License key"
          />

          <div className="flex gap-3">
            <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded-full">Verify</button>
            <button type="button" onClick={onClose} className="px-4 py-2 bg-white/5 text-white rounded-full">Cancel</button>
          </div>

          {status && (
            <div className={`p-3 rounded-md ${status.ok ? "bg-green-600/10 border border-green-500/20 text-green-300" : "bg-red-600/10 border border-red-500/20 text-red-300"}`}>
              {status.msg}
            </div>
          )}
        </form>
      </motion.div>
    </div>
  );
}
