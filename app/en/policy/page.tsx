"use client";

import Link from "next/link";
import { ArrowLeft, Shield, FileText } from "lucide-react";

const terms = [
  {
    num: "1.",
    title: "Service Type",
    text: "All services provided on the website are digital services, including social media services, digital subscriptions, and username sales.",
  },
  {
    num: "2.",
    title: "User Responsibility",
    text: "The user is fully responsible for using the services and agrees that all orders are made at their own risk.",
  },
  {
    num: "3.",
    title: "Changes to Terms",
    text: "VMSS – Vamos reserves the right to change or update these terms at any time without prior notice.",
  },
];

const privacy = [
  {
    num: "1.",
    title: "Information Collection",
    text: "We collect only the information needed to process orders and communicate with customers.",
  },
  {
    num: "2.",
    title: "Data Protection",
    text: "We do not ask for or store passwords or sensitive account information. All data is handled securely.",
  },
  {
    num: "3.",
    title: "Security",
    text: "We take reasonable measures to protect user data from unauthorized access.",
  },
  {
    num: "4.",
    title: "Acceptance",
    text: "By using the website, you agree to this Privacy Policy",
  },
];

export default function PolicyENPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white bg-black">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-56 -top-56 h-[760px] w-[760px] rounded-full blur-[190px]
          bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.45),transparent_70%)]" />
        <div className="absolute -right-56 top-[6%] h-[740px] w-[740px] rounded-full blur-[190px]
          bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.40),transparent_70%)]" />
        <div className="absolute bottom-[-320px] left-1/2 h-[980px] w-[980px] -translate-x-1/2 rounded-full blur-[220px]
          bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.30),transparent_75%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,transparent_0%,rgba(0,0,0,0.45)_45%,rgba(0,0,0,0.85)_80%,rgba(0,0,0,0.95)_100%)]" />
      </div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.10]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:78px_78px]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_50%_18%,black,transparent_75%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-10 sm:py-14">
        {/* Top bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[linear-gradient(90deg,rgba(168,85,247,1),rgba(236,72,153,1))]" />
            <span className="text-xs tracking-[0.25em] text-white/70">VMSS • POLICY</span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/80 backdrop-blur-xl transition hover:border-white/20"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>

            <Link
              href="/en"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/80 backdrop-blur-xl transition hover:border-white/20"
            >
              Home (EN)
            </Link>
          </div>
        </div>

        {/* Header */}
        <div className="mt-10">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy{" "}
            <span className="bg-[linear-gradient(90deg,rgba(168,85,247,1),rgba(236,72,153,1),rgba(99,102,241,1))] bg-clip-text text-transparent">
              & Terms
            </span>
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-white/60 sm:text-base">
            The following text is provided as-is to keep everything clear, safe, and transparent.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 space-y-6">
          {/* Terms */}
          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <FileText className="h-5 w-5 text-white/80" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Terms and Conditions</h2>
                <p className="text-sm text-white/55">
                  By using VMSS – Vamos, you agree to the following terms:
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {terms.map((item) => (
                <div
                  key={item.num}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex min-w-[44px] justify-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-white/80">
                      {item.num}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-white/90">
                        {item.title}
                      </div>
                      <div className="mt-1 text-sm text-white/60">
                        {item.text}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Privacy */}
          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <Shield className="h-5 w-5 text-white/80" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Privacy Policy</h2>
                <p className="text-sm text-white/55">
                  At VMSS – Vamos, we respect and protect your privacy:
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {privacy.map((item) => (
                <div
                  key={item.num}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex min-w-[44px] justify-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-white/80">
                      {item.num}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-white/90">
                        {item.title}
                      </div>
                      <div className="mt-1 text-sm text-white/60">
                        {item.text}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} VMSS. All rights reserved.
        </div>
      </div>
    </main>
  );
}