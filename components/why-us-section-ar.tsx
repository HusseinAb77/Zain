"use client";

import { Zap, Shield, TrendingUp, Clock } from "lucide-react";

const reasonsAr = [
  {
    icon: Zap,
    title: "الأداء أولًا",
    description:
      "جميع خدماتنا مُحسّنة لتحقيق نمو حقيقي وقابل للقياس، وتفاعل فعلي، وتأثير طويل الأمد — وليس أرقامًا وهمية.",
  },
  {
    icon: Shield,
    title: "نمو آمن وموثوق",
    description:
      "نستخدم طرق تنفيذ آمنة تحافظ على سمعة علامتك التجارية وتضمن أمان حساباتك.",
  },
  {
    icon: TrendingUp,
    title: "مصمم للتوسع",
    description:
      "سواء بدأت بخطوات صغيرة أو كنت تتوسع بسرعة، خدماتنا تنمو مع احتياجات عملك.",
  },
  {
    icon: Clock,
    title: "دعم بشري حقيقي",
    description:
      "احصل على ردود سريعة ودعم حقيقي في أي وقت تحتاجه — قبل الطلب وأثناءه وبعده.",
  },
];

export function WhyUsSectionAr() {
  return (
    <section id="why-us" dir="rtl" className="relative px-8 py-32">
      <div className="absolute inset-0 bg-card/50" />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            لماذا تختارنا
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl text-balance">
            لماذا يختار الناس VMSS
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
            حلول تركّز على النمو ومصممة لتوسيع حضورك الرقمي.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-2">
          {reasonsAr.map((reason, index) => (
            <div
              key={reason.title}
              className="group grid min-h-[220px] grid-cols-[auto_1fr_auto] items-center gap-6 bg-card p-10 transition-colors hover:bg-secondary/50"
            >
              {/* Number */}
              <span className="font-display text-4xl font-bold text-border">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="min-w-0">
                <h3 className="font-display text-lg font-bold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>

              {/* Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center self-center rounded-xl border border-border bg-background transition-colors group-hover:border-accent/30">
                <reason.icon className="h-5 w-5 text-accent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}