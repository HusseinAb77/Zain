import { Zap, Shield, TrendingUp, Clock } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Performance First",
    description:
      "Every service is optimized for measurable growth, real engagement, and long-term impact — not fake numbers.",
  },
  {
    icon: Shield,
    title: "Safe & Trusted Growth",
    description:
      "We focus on safe delivery methods that protect your brand reputation and keep your accounts secure.",
  },
  {
    icon: TrendingUp,
    title: "Built to ScaleBuilt to Scale",
    description:
      "Whether you're starting small or scaling fast, our services grow with your business needs.",
  },
  {
    icon: Clock,
    title: "Real Human Support",
    description:
      "Get fast responses and real assistance whenever you need — before, during, and after your order.",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="relative px-8 py-32">
      <div className="absolute inset-0 bg-card/50" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="mb-20 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Why Choose Us
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl text-balance">
          Why People Choose VMSS
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Growth-focused solutions built to scale your online presence.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-2">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group flex items-start gap-6 bg-card p-10 transition-colors hover:bg-secondary/50"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-background transition-colors group-hover:border-accent/30">
                <reason.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
              <span className="ml-auto font-display text-4xl font-bold text-border">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
