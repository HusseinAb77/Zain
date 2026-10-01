"use client";

import {
  Instagram,
  Music2,
  Layers3,
  ArrowUpLeft,
} from "lucide-react";

const servicesAr = [
  {
    icon: Instagram,
    title: "خدمات إنستغرام",
    description:
      "متابعون مميزون، إعجابات، مشاهدات، تعليقات، وخدمات حسابات تساعدك على تنمية حسابك على إنستغرام بشكل طبيعي وفعّال.",
    features: ["مستخدمون مميزون · متابعون · إعجابات · مشاهدات · حسابات"],
  },
  {
    icon: Music2,
    title: "خدمات تيك توك",
    description:
      "عزّز وصولك على تيك توك من خلال مشاهدات عالية الاحتفاظ، إعجابات، ومتابعين لتحسين الظهور والترتيب.",
    features: ["مشاهدات · إعجابات · متابعون"],
  },
  {
    icon: Layers3,
    title: "نمو متعدد المنصات",
    description:
      "دعم شامل لمنصات تيليغرام، يوتيوب، فيسبوك، X (تويتر)، سناب شات، والمزيد — حسب احتياجاتك.",
    features: ["تيليغرام · يوتيوب · فيسبوك · X · سناب شات"],
  },
];

export function ServicesSectionAr() {
  return (
    <section
      id="services"
      dir="rtl"
      className="relative px-8 py-32"
    >
      {/* Background lines */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 bottom-0 left-1/3 w-px bg-foreground" />
        <div className="absolute top-0 bottom-0 right-1/3 w-px bg-foreground" />
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-20 max-w-xl text-right">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            ماذا نقدم
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            خدمات مصممة للنمو
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            خدمات احترافية لوسائل التواصل الاجتماعي تهدف إلى زيادة الظهور،
            التفاعل، والمصداقية عبر جميع المنصات الرئيسية.
          </p>
        </div>

        {/* Services cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {servicesAr.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/30"
            >
              <div className="mb-6 flex items-center justify-between">
                <ArrowUpLeft className="h-5 w-5 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-foreground text-right">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-right">
                {service.description}
              </p>

              <div className="mt-8 flex flex-wrap justify-end gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}