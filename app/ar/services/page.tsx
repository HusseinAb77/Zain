"use client";

import Link from "next/link";
import {
  Instagram,
  Send,
  Video,
  Sparkles,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

type ServiceItem = { title: string; desc: string };

type ServiceCategory = {
  id: string;
  icon: React.ReactNode;
  name: string;
  subtitle: string;
  items: ServiceItem[];
};

const categories: ServiceCategory[] = [
  {
    id: "instagram",
    icon: <Instagram className="h-5 w-5" />,
    name: "خدمات إنستغرام",
    subtitle: "نطوّر حسابك ومنشوراتك بتسليم نظيف ونتائج واضحة.",
    items: [
      { title: "متابعين إنستغرام", desc: "زيادة متابعين حقيقيين أو مخصصين لحسابك." },
      { title: "لايكات إنستغرام", desc: "رفع عدد اللايكات على البوستات والريلز." },
      { title: "توثيق إنستغرام", desc: "وثق حسابك للحصول على حماية اكبر ومميزات عديده" },
      { title: "تعليقات إنستغرام", desc: "تعليقات لرفع التفاعل والمصداقية." },
      { title: "رفع الحظر عن حسابك", desc: "استرجع حسابك المحظور باسرع وقت" },
      { title: "يوزرات / حسابات", desc: "توفير يوزرات أو حسابات إنستغرام (حسب الطلب)." },
      { title: "تبديل يوزرات", desc: "خدمة تبديل أو نقل يوزرات عند الطلب." },
    ],
  },
  {
    id: "tiktok",
    icon: <Video className="h-5 w-5" />,
    name: "خدمات تيك توك",
    subtitle: "نمو سريع مع تفاعل قوي يحسّن وصول فيديوهاتك.",
    items: [
            { title: "رفع الحظر عن حسابك", desc: "استرجع حسابك المحظور باسرع وقت" },

      { title: "متابعين تيك توك", desc: "زيادة متابعين لحسابك على تيك توك." },
      { title: "لايكات تيك توك", desc: "تعزيز اللايكات على الفيديوهات." },
      { title: "مشاهدات تيك توك", desc: "رفع عدد المشاهدات لتحسين الترتيب." },
      { title: "تعليقات تيك توك", desc: "تعليقات لزيادة التفاعل." },
      { title: "مشاركات تيك توك", desc: "شير أكثر = وصول أقوى." },
    ],
  },
  {
    id: "telegram",
    icon: <Send className="h-5 w-5" />,
    name: "خدمات تيليغرام",
    subtitle: "دعم كامل لنمو القنوات والجروبات.",
    items: [
      { title: "أعضاء قنوات تيليغرام", desc: "زيادة أعضاء للقنوات." },
      { title: "أعضاء جروبات", desc: "رفع عدد الأعضاء في الجروبات." },
      { title: "مشاهدات المنشورات", desc: "زيادة مشاهدات بوستات القناة." },
      { title: "تفاعلات (ريأكشن)", desc: "إضافة تفاعل للمنشورات عند الحاجة." },
    ],
  },
  {
    id: "other",
    icon: <Sparkles className="h-5 w-5" />,
    name: "منصات أخرى",
    subtitle: "اسأل عن أي منصة — غالبًا نوفر لها حلول.",
    items: [
      { title: "يوتيوب", desc: "مشاهدات / لايكات / اشتراكات." },
      { title: "فيسبوك", desc: "متابعين، لايكات، وتفاعل للمنشورات." },
      { title: "X (تويتر سابقًا)", desc: "متابعين ولايكات وتفاعل." },
      { title: "سناب شات", desc: "سناب شات بلس/مشاهدات/اشتراكات بسعر رخيص" },
      { title: "طلب مخصص", desc: "خبرنا هدفك ونقترح لك الباقة المناسبة." },
         { title: "برامج بلس", desc: "DLinsta, Snapchat plus, Youtube premium..." },

    ],
  },
];

export default function ServicesPageAr() {
  return (
    <main
      dir="rtl"
      lang="ar"
      className="relative min-h-screen overflow-hidden text-white
      bg-gradient-to-br from-[#07070a] via-[#0d0d17] to-[#07070a]"
    >
      <div id="top" />

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full blur-[140px]
          bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),transparent_65%)]" />
        <div className="absolute -right-44 top-[10%] h-[560px] w-[560px] rounded-full blur-[150px]
          bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.28),transparent_65%)]" />
        <div className="absolute bottom-[-220px] left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full blur-[170px]
          bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.22),transparent_70%)]" />
      </div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_50%_22%,black,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-14 sm:py-16">
        {/* Top */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[linear-gradient(90deg,rgba(168,85,247,1),rgba(236,72,153,1))]" />
              <span className="text-xs tracking-[0.25em] text-white/70">
                VMSS STORE
              </span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              خدماتنا
            </h1>

            <p className="mt-3 max-w-2xl text-sm text-white/65 sm:text-base">
              اختر المنصة المناسبة لك. تسليم سريع، تواصل واضح، ودعم مستمر.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/ar"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-white/20"
            >
              <ArrowLeft className="h-4 w-4 rotate-180" />
              الرجوع للرئيسية
            </Link>

            <a
              href="https://wa.me/491774684827?text=مرحبا%20VMSS%20حابب%20أعرف%20أكثر%20عن%20الخدمات"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white
              bg-[linear-gradient(90deg,rgba(168,85,247,1),rgba(236,72,153,1))]
              shadow-[0_12px_35px_rgba(168,85,247,0.20)]
              transition hover:opacity-90"
            >
              تواصل واتساب
            </a>
          </div>
        </div>

        {/* Chips */}
        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80 backdrop-blur transition hover:border-white/20"
            >
              {c.icon}
              {c.name}
            </a>
          ))}
        </div>

        {/* Categories */}
        <div className="mt-10 space-y-10">
          {categories.map((c) => (
            <section key={c.id} id={c.id} className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold">{c.name}</h2>
              <p className="mt-2 text-sm text-white/60">{c.subtitle}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {c.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-white/70" />
                      <div>
                        <div className="font-semibold">{item.title}</div>
                        <div className="mt-1 text-sm text-white/60">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-white/65 backdrop-blur">
          محتاج خدمة خاصة أو منصة معينة؟ راسلنا على واتساب وابعث:
          <span className="text-white/90">
            {" "}
            المنصة + الخدمة + الكمية
          </span>
        </div>

        <div className="mt-10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} VMSS. جميع الحقوق محفوظة.
        </div>
      </div>
    </main>
  );
}