"use client";

import { ArrowUpLeft, Mail, Send, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function ContactSectionAr() {
  return (
    <section id="contact" dir="rtl" className="relative px-8 py-24">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            تواصل معنا
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-foreground">
            لنبدأ شيئًا رائعًا
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            هل أنت جاهز لتطوير حضورك الرقمي؟ تواصل معنا عبر أي من القنوات التالية.
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
                واتساب
              </h3>
              <p className="text-sm text-muted-foreground">رد سريع</p>
            </div>
            <ArrowUpLeft className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
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
                إنستغرام
              </h3>
              <p className="text-sm text-muted-foreground">شاهد أعمالنا</p>
            </div>
            <ArrowUpLeft className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
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
                البريد الإلكتروني
              </h3>
              <p className="text-sm text-muted-foreground">
                استفسارات تفصيلية
              </p>
            </div>
            <ArrowUpLeft className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
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
                تيليغرام
              </h3>
              <p className="text-sm text-muted-foreground">
                دعم مباشر وسريع
              </p>
            </div>
            <ArrowUpLeft className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
          </a>
        </div>
      </div>
    </section>
  );
}