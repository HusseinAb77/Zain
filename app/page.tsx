"use client";

import Link from "next/link";

export default function LanguageGate() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-52 -top-52 h-[720px] w-[720px] rounded-full blur-[170px]
          bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.45),transparent_70%)]"
        />
        <div
          className="absolute -right-56 top-[6%] h-[740px] w-[740px] rounded-full blur-[190px]
          bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.42),transparent_70%)]"
        />
        <div
          className="absolute bottom-[-260px] left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full blur-[220px]
          bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.34),rgba(34,211,238,0.16),transparent_75%)]"
        />
        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.60)_55%,rgba(0,0,0,0.92)_100%)]" />
      </div>

      {/* Soft grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.10]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_50%_25%,black,transparent_72%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 py-12 text-white">
        {/* Top badge */}
        <div className="text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-xl">
            <span className="relative inline-flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400/45" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[linear-gradient(90deg,rgba(168,85,247,1),rgba(236,72,153,1))]" />
            </span>
            <span className="text-xs tracking-[0.25em] text-white/60">VMSS</span>
            <span className="mx-1 h-1 w-1 rounded-full bg-white/25" />
            <span className="bg-[linear-gradient(90deg,rgba(168,85,247,1),rgba(236,72,153,1))] bg-clip-text text-xs font-semibold tracking-[0.25em] text-transparent">
              GROWTH
            </span>
          </div>

          <h1 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Select your{" "}
            <span className="bg-[linear-gradient(90deg,rgba(168,85,247,1),rgba(236,72,153,1),rgba(99,102,241,1))] bg-clip-text text-transparent">
              language
            </span>
          </h1>

          <p className="mt-2 text-sm text-white/65 sm:text-base">
            Choose a language to continue
          </p>
        </div>

        {/* Cards — FIXED (no glitch) */}
        <div className="mt-10 w-full grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 md:gap-6">
          {/* EN */}
          <Link
            href="/en"
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl
                       transition hover:-translate-y-0.5 hover:border-white/20 active:scale-[0.99]"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.45),transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.26),transparent_65%)]" />
            </div>

            <div className="relative min-w-0">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[11px] tracking-widest text-white/55 sm:text-xs">
                  CONTINUE IN
                </span>
                <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70 sm:text-xs">
                  Tap
                </span>
              </div>

              {/* smaller title to avoid glitch */}
              <div className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                English
              </div>

              <div className="mt-3 flex items-center gap-2 text-sm text-white/70">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[rgba(99,102,241,0.95)] shadow-[0_0_18px_rgba(99,102,241,0.60)]" />
                <span className="min-w-0">
                  Continue to VMSS website
                </span>
              </div>
            </div>
          </Link>

          {/* AR */}
          <Link
            href="/ar"
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl
                       transition hover:-translate-y-0.5 hover:border-white/20 active:scale-[0.99]"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.40),transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.30),transparent_65%)]" />
            </div>

            <div className="relative min-w-0" dir="rtl">
              <div className="flex items-center justify-between gap-3">
                <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70 sm:text-xs">
                  اضغط
                </span>
                <span className="text-[11px] tracking-widest text-white/55 sm:text-xs">
                  المتابعة باللغة
                </span>
              </div>

              {/* smaller title to avoid glitch */}
              <div className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                العربية
              </div>

              <div className="mt-3 flex items-center gap-2 text-sm text-white/70">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[rgba(236,72,153,0.95)] shadow-[0_0_18px_rgba(236,72,153,0.60)]" />
                <span className="min-w-0">المتابعة إلى موقع VMSS</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Buttons row (EN Policy | Reviews | AR Policy) */}
        <div className="mt-8 flex w-full max-w-5xl flex-col items-center justify-center gap-3 md:flex-row">
          <Link
            href="/en/policy"
            className="inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]
                       px-5 py-3 text-sm font-semibold text-white/85 backdrop-blur-xl transition
                       hover:border-white/20 hover:bg-white/[0.07] md:w-auto"
          >
            Privacy & Terms (EN)
          </Link>

          {/* ✅ Reviews in the middle */}
          <Link
            href="/reviews"
            className="inline-flex w-full items-center justify-center rounded-2xl
                       bg-[linear-gradient(90deg,rgba(168,85,247,0.95),rgba(236,72,153,0.95))]
                       px-6 py-3 text-sm font-bold text-white
                       shadow-[0_14px_45px_rgba(168,85,247,0.22)]
                       transition hover:opacity-90 active:scale-[0.99] md:w-auto"
          >
            Reviews
          </Link>

          <Link
            href="/ar/policy"
            className="inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]
                       px-5 py-3 text-sm font-semibold text-white/85 backdrop-blur-xl transition
                       hover:border-white/20 hover:bg-white/[0.07] md:w-auto"
          >
            السياسة والخصوصية (AR)
          </Link>
        </div>

        <div className="mt-10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} VMSS. All rights reserved.
        </div>
      </div>
    </main>
  );
}