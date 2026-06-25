"use client";

import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Icon */}
        <motion.div
          className="mb-8 inline-block"
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <div
            className="p-6 rounded-2xl"
            style={{
              backgroundColor: "var(--accent-light)",
            }}
          >
            <Wrench size={48} style={{ color: "var(--accent)" }} />
          </div>
        </motion.div>

        {/* Heading */}
        <h1
          className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)] mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Under Maintenance
        </h1>

        {/* Message */}
        <p
          className="text-lg mb-6"
          style={{ color: "var(--text-secondary)" }}
        >
          Kami sedang melakukan pemeliharaan untuk meningkatkan layanan.
          Silakan kembali lagi nanti.
        </p>

        {/* Estimated Time */}
        <div
          className="inline-block px-6 py-3 rounded-full"
          style={{
            backgroundColor: "var(--background-secondary)",
            border: "1px solid var(--border)",
          }}
        >
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Estimasi selesai dalam{" "}
            <span className="font-semibold" style={{ color: "var(--accent)" }}>
              3-5 hari
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
