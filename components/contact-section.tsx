import { ArrowUpRight, Mail, Send, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

type ContactT = {
  badge: string;
  title: string;
  desc: string;

  whatsapp: string;
  instagram: string;
  email: string;
  telegram: string;

  quick: string;
  work: string;
  details: string;
  fast: string;
};

type ContactSectionProps = {
  t?: Partial<ContactT>;
  dir?: "ltr" | "rtl";
};

const fallback: ContactT = {
  badge: "Get in Touch",
  title: "Let’s Start Something Great",
  desc: "Ready to elevate your digital presence? Reach out through any of these channels.",

  whatsapp: "WhatsApp",
  instagram: "Instagram",
  email: "Email",
  telegram: "Telegram",

  quick: "Quick response",
  work: "See our work",
  details: "Detailed inquiries",
  fast: "Direct & fast support",
};

export function ContactSection({ t, dir = "ltr" }: ContactSectionProps) {
  const copy = { ...fallback, ...(t ?? {}) };
  const isRTL = dir === "rtl";

  return (
<section id="contact" className="relative px-8 py-24" dir={dir}>
        <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            {copy.badge}
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-foreground">
            {copy.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            {copy.desc}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/491774684827"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/50 hover:bg-accent/5"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 transition-colors group-hover:bg-green-500/20">
              <FaWhatsapp className="h-7 w-7 text-green-500" />
            </div>
            <div className="text-center">
              <h3 className="font-display text-lg font-bold text-foreground">
                {copy.whatsapp}
              </h3>
              <p className="text-sm text-muted-foreground">{copy.quick}</p>
            </div>
            <ArrowUpRight
              className={`h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 ${
                isRTL ? "rotate-180" : ""
              }`}
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/vmss?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/50 hover:bg-accent/5"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 transition-colors group-hover:bg-pink-500/20">
              <Instagram className="h-7 w-7 text-pink-500" />
            </div>
            <div className="text-center">
              <h3 className="font-display text-lg font-bold text-foreground">
                {copy.instagram}
              </h3>
              <p className="text-sm text-muted-foreground">{copy.work}</p>
            </div>
            <ArrowUpRight
              className={`h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 ${
                isRTL ? "rotate-180" : ""
              }`}
            />
          </a>

          {/* Email */}
          <a
            href="mailto:akramvmss@gmail.com"
            className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/50 hover:bg-accent/5"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 transition-colors group-hover:bg-accent/20">
              <Mail className="h-7 w-7 text-accent" />
            </div>
            <div className="text-center">
              <h3 className="font-display text-lg font-bold text-foreground">
                {copy.email}
              </h3>
              <p className="text-sm text-muted-foreground">{copy.details}</p>
            </div>
            <ArrowUpRight
              className={`h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 ${
                isRTL ? "rotate-180" : ""
              }`}
            />
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/xvmssx"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/50 hover:bg-accent/5"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 transition-colors group-hover:bg-blue-500/20">
              <Send className="h-7 w-7 text-blue-500" />
            </div>
            <div className="text-center">
              <h3 className="font-display text-lg font-bold text-foreground">
                {copy.telegram}
              </h3>
              <p className="text-sm text-muted-foreground">{copy.fast}</p>
            </div>
            <ArrowUpRight
              className={`h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 ${
                isRTL ? "rotate-180" : ""
              }`}
            />
          </a>
        </div>
      </div>
    </section>
  );
}