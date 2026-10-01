"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Utensils,
  Instagram,
  Send,
  Video,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";

type ServiceItem = { id: string; title: string; desc: string; image?: string };

type ServiceCategory = {
  id: string;
  icon: React.ReactNode;
  name: string;
  subtitle: string;
  items: ServiceItem[];
};

const categories: ServiceCategory[] = [
  {
    id: "food",
    icon: <Utensils className="h-5 w-5" />,
    name: "Food Services",
    subtitle: "Specialized food ordering, delivery, and catering solutions.",
    items: [
      {
        id: "food-1",
        title: "Calamares Rellenos",
        desc: "Calamares rellenos! Una receta súper! Te esperamos en nuestra sucursal de canning y sino por envío a domicilio vía WhatsApp al 1162792630",
        image: "/food1.jpg",
      },
      {
        id: "food-2",
        title: "Venta Mayorista Ercopez",
        desc: "Si tenes un restaurante, bar o haces sushi envíanos un mensaje que te asesoramos brindándote lo mejor en pescados y mariscos. Escribinos por Whatsapp al 11-6279-2630",
        image: "/food2.jpg",
      },
      {
        id: "food-3",
        title: "Catering & Special Events",
        desc: "Custom food catering packages for parties and business events.",
        image: "/food3.jpg",
      },
      {
        id: "food-4",
        title: "Meal Prep Subscriptions",
        desc: "Weekly or monthly healthy meal prep delivery options.",
        image: "/food4.jpg",
      },
    ],
  },
  {
    id: "instagram",
    icon: <Instagram className="h-5 w-5" />,
    name: "Instagram Services",
    subtitle: "Boost your profile & post performance with clean delivery.",
    items: [
      { id: "ig-1", title: "Instagram Followers", desc: "Increase followers for your profile." },
      { id: "ig-2", title: "Instagram Unban", desc: "Reactivate Your Banned Account With Vmss" },
      { id: "ig-3", title: "Instagram Verification", desc: "Verify your account to get alot of features {verified Badge}." },
      { id: "ig-4", title: "Instagram Comments", desc: "More comments on your posts / reels." },
      { id: "ig-5", title: "Instagram Likes", desc: "Increase likes for better reach." },
      { id: "ig-6", title: "Instagram Users (Accounts)", desc: "Instagram users / accounts availability." },
      { id: "ig-7", title: "Swap for Users", desc: "Swap / exchange options for users (by request)." },
    ],
  },
  {
    id: "tiktok",
    icon: <Video className="h-5 w-5" />,
    name: "TikTok Services",
    subtitle: "Grow your TikTok reach with strong engagement packages.",
    items: [
      { id: "tt-1", title: "TikTok Followers", desc: "Increase followers for your TikTok account." },
      { id: "tt-2", title: "TikTok Likes", desc: "Boost likes on your videos." },
      { id: "tt-3", title: "TikTok Unban", desc: "Reactivate Your Banned Account With Vmss" },
      { id: "tt-4", title: "TikTok Views", desc: "Increase video views to improve ranking." },
      { id: "tt-5", title: "TikTok Comments", desc: "Add comments to drive interaction." },
      { id: "tt-6", title: "TikTok Shares", desc: "Increase shares for wider reach." },
    ],
  },
  {
    id: "telegram",
    icon: <Send className="h-5 w-5" />,
    name: "Telegram Services",
    subtitle: "Support your channel growth with members & engagement.",
    items: [
      { id: "tg-1", title: "Telegram Channel Members", desc: "Increase members for channels." },
      { id: "tg-2", title: "Telegram Premium", desc: "Unlock huge features in telegram by getting Premium" },
      { id: "tg-3", title: "Telegram Group Members", desc: "Boost members for groups." },
      { id: "tg-4", title: "Telegram Post Views", desc: "Increase views on channel posts." },
      { id: "tg-5", title: "Telegram Reactions", desc: "More reactions for posts (if needed)." },
    ],
  },
  {
    id: "other",
    icon: <Sparkles className="h-5 w-5" />,
    name: "Other Platforms",
    subtitle: "Ask for any platform — we can usually provide options.",
    items: [
      { id: "oth-1", title: "YouTube", desc: "Views / likes / subscribers (packages available)." },
      { id: "oth-2", title: "Facebook", desc: "Followers / likes / engagement for posts." },
      { id: "oth-3", title: "X (Twitter)", desc: "Followers / likes / post engagement options." },
      { id: "oth-4", title: "Snapchat", desc: "Snapchat Plus / engagement options (by request)." },
      { id: "oth-5", title: "Custom Order", desc: "Tell us your goal — we’ll suggest the best package." },
      { id: "oth-6", title: "Plus For Iphone", desc: "DLinsta, Snapchat plus, Youtube premium..." },
    ],
  },
];

export default function ServicesPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyLink = (itemId: string, imageSrc: string) => {
    const absoluteUrl = new URL(imageSrc, window.location.href).href;
    navigator.clipboard.writeText(absoluteUrl);
    setCopiedId(itemId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <main
      className="relative min-h-screen overflow-hidden text-white
      bg-gradient-to-br from-[#07070a] via-[#0d0d17] to-[#07070a]"
    >
      {/* TOP ANCHOR */}
      <div id="top" />

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full blur-[140px]
          bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),transparent_65%)]"
        />
        <div
          className="absolute -right-44 top-[10%] h-[560px] w-[560px] rounded-full blur-[150px]
          bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.28),transparent_65%)]"
        />
        <div
          className="absolute bottom-[-220px] left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full blur-[170px]
          bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.22),transparent_70%)]"
        />
      </div>

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_50%_22%,black,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-14 sm:py-16">
        {/* Top bar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[linear-gradient(90deg,rgba(168,85,247,1),rgba(236,72,153,1))]" />
              <span className="text-xs tracking-[0.25em] text-white/70">VMSS Growth</span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Our{" "}
              <span className="bg-[linear-gradient(90deg,rgba(168,85,247,1),rgba(236,72,153,1))] bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <p className="mt-3 max-w-2xl text-sm text-white/65 sm:text-base">
              Choose your service below. We provide fast delivery, clear communication, and support.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/en"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-white/20"
            >
              ← Back to Home
            </Link>

            <a
              href="https://wa.me/491774684827?text=Hello%20VMSS%2C%20I%20want%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white
              bg-[linear-gradient(90deg,rgba(168,85,247,1),rgba(236,72,153,1))]
              shadow-[0_12px_35px_rgba(168,85,247,0.20)]
              transition hover:opacity-90 hover:shadow-[0_16px_45px_rgba(236,72,153,0.25)]
              active:scale-[0.99]"
            >
              Contact on WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Quick nav chips */}
        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80 backdrop-blur transition hover:border-white/20"
            >
              <span className="text-white/80">{c.icon}</span>
              {c.name}
            </a>
          ))}
        </div>

        {/* Categories */}
        <div className="mt-10 space-y-10">
          {categories.map((c) => (
            <section key={c.id} id={c.id} className="scroll-mt-24">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-white/90">
                    <span className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-2 backdrop-blur">
                      {c.icon}
                    </span>
                    <h2 className="font-display text-2xl font-bold">{c.name}</h2>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm text-white/60">{c.subtitle}</p>
                </div>

                <a
                  href="#top"
                  className="hidden rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70 backdrop-blur transition hover:border-white/20 sm:inline-flex"
                >
                  Back to top ↑
                </a>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {c.items.map((item) => (
                  <div
                    key={item.id}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur
                    transition hover:-translate-y-0.5 hover:border-white/20 flex flex-col"
                  >
                    {/* Render photo if provided */}
                    {item.image && (
                      <div className="h-44 w-full overflow-hidden relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d17] via-transparent to-transparent opacity-80" />
                        
                        {/* Copy Link Button overlay */}
                        <button
                          onClick={() => handleCopyLink(item.id, item.image!)}
                          className="absolute top-3 right-3 z-10 flex items-center gap-1.5 rounded-xl border border-white/20 bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur hover:bg-black/80 transition"
                        >
                          {copiedId === item.id ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-green-400" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5" />
                              <span>Copy Link</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}

                    <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_60%)]" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.14),transparent_60%)]" />
                    </div>

                    <div className="relative p-6 flex flex-col justify-between flex-1">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-white/70 shrink-0" />
                        <div>
                          <div className="text-base font-semibold text-white/95">
                            {item.title}
                          </div>
                          <div className="mt-1 text-sm text-white/60">
                            {item.desc}
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 inline-flex items-center gap-2 text-xs text-white/55">
                        <span className="h-2 w-2 rounded-full bg-[linear-gradient(90deg,rgba(168,85,247,1),rgba(236,72,153,1))]" />
                        Fast delivery • Support included
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-white/65 backdrop-blur">
          Need a specific platform or a custom package? Message us on WhatsApp and tell us:
          <span className="text-white/90"> platform + service + quantity</span>.
        </div>

        <div className="mt-10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} VMSS. All rights reserved.
        </div>
      </div>
    </main>
  );
}