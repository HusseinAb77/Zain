import {
  Instagram,
  Music2,
  Layers3,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Instagram,
    title: "Instagram Services",
    description:
      "Special Users, Followers, likes, views, comments, and account services to grow your Instagram presence naturally and effectively.",
    features: ["Special Users · Followers · Likes · Views · Accounts"],
  },
  {
    icon: Music2,
    title: "TikTok Services",
    description:
      "Boost your TikTok reach with high-retention views, likes, and followers designed to improve visibility and ranking.",
    features: ["Views · Likes · Followers"],
  },
  {
    icon: Layers3,
    title: "Multi-Platform Growth",
    description:
      "Support for Telegram, YouTube, Facebook, X (Twitter), Snapchat, and more — tailored to your needs.",
    features: ["Telegram · YouTube · Facebook · X · Snapchat"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative px-8 py-32">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 bottom-0 left-1/3 w-px bg-foreground" />
        <div className="absolute top-0 bottom-0 right-1/3 w-px bg-foreground" />
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        <div className="mb-20 max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            What We Offer
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Services Built for Growth
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            High-quality social media services designed to boost visibility, engagement, and credibility across all major platforms.
          
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/30"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
              </div>

              <h3 className="font-display text-xl font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
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
