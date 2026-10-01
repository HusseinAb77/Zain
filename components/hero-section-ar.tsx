"use client";

import { ArrowLeft } from "lucide-react";

export function HeroSectionAr() {
  return (
    <section
      dir="rtl"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 sm:px-8"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main glow */}
        <div
          className="absolute left-1/2 top-1/4 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]
          bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.35),rgba(236,72,153,0.20),transparent_70%)]"
        />

        {/* Subtle bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border/70" />
      </div>

      {/* Grid lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="absolute bottom-0 left-1/4 top-0 w-px bg-foreground" />
        <div className="absolute bottom-0 right-1/4 top-0 w-px bg-foreground" />
        <div className="absolute left-0 right-0 top-1/3 h-px bg-foreground" />
        <div className="absolute bottom-1/3 left-0 right-0 h-px bg-foreground" />
      </div>

      <div className="relative mx-auto max-w-[1100px] text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 backdrop-blur">
          <div className="h-2 w-2 animate-pulse rounded-full bg-[hsl(266_92%_67%)]" />
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
لا نسعى إلى إتمام صفقة، بل نبني علاقات طويلة الأمد قائمة على الثقة.          </span>
        </div>

        {/* Title */}
        <h1 className="mx-auto max-w-5xl font-display text-5xl font-bold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
          <span className="bg-[linear-gradient(135deg,rgba(168,85,247,1),rgba(99,102,241,0.95))] bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(168,85,247,0.25)]">
            VMSS
          </span>{" "}
          <span className="bg-[linear-gradient(135deg,rgba(236,72,153,1),rgba(168,85,247,0.95))] bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(236,72,153,0.22)]">
            Growth
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          VMSS هو متجر حلول رقمية احترافي يركّز على نمو وسائل التواصل الاجتماعي
          بذكاء. نساعد الأفراد والشركات على تعزيز حضورهم الرقمي عبر المنصات
          الرئيسية مع سرعة في التنفيذ ودعم موثوق.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/491774684827?text=مرحباً%20VMSS%2C%20أرغب%20بمعرفة%20المزيد%20عن%20خدماتكم."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-semibold text-white
              bg-[linear-gradient(90deg,rgba(168,85,247,1),rgba(236,72,153,1))]
              shadow-[0_12px_35px_rgba(168,85,247,0.28)]
              transition hover:opacity-90 hover:shadow-[0_16px_45px_rgba(236,72,153,0.30)]
              active:scale-[0.99]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            تواصل عبر واتساب
          </a>

          <a
            href="/ar/services"
            className="group inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4
              text-sm font-semibold text-white
              bg-[linear-gradient(135deg,rgba(99,102,241,0.9),rgba(168,85,247,0.9))]
              shadow-[0_10px_30px_rgba(99,102,241,0.25)]
              transition-all hover:opacity-90 hover:shadow-[0_14px_40px_rgba(168,85,247,0.35)]
              active:scale-[0.99]"
          >
            عرض الخدمات
          </a>
        </div>

        {/* Stats row */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:mt-24 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-border/70">
          {[
            { value: "500+", label: "عملاء موثوقون" },
            { value: "98%", label: "رضا العملاء" },
            { value: "4+", label: "سنوات خبرة" },
          ].map((stat) => (
            <div key={stat.label} className="px-6 py-4">
              <div className="font-display text-3xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}