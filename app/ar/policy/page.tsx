"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck, FileText } from "lucide-react";

export default function PolicyPageAr() {
  return (
    <main
      lang="ar"
      dir="rtl"
      className="relative min-h-screen overflow-hidden text-white
      bg-gradient-to-br from-[#07070a] via-[#0d0d17] to-[#07070a]"
    >
      {/* Background */}
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

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_50%_22%,black,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-14 sm:py-16">
        {/* Top bar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[linear-gradient(90deg,rgba(168,85,247,1),rgba(236,72,153,1))]" />
              <span className="text-xs tracking-[0.25em] text-white/70">
                VMSS STORE
              </span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              السياسة{" "}
              <span className="bg-[linear-gradient(90deg,rgba(168,85,247,1),rgba(236,72,153,1))] bg-clip-text text-transparent">
                والخصوصية
              </span>
            </h1>

            <p className="mt-3 max-w-2xl text-sm text-white/65 sm:text-base">
              سياسة واضحة تساعد على الشفافية وحماية الخصوصية.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-white/20"
            >
              الرجوع
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>

            <Link
              href="/ar"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-white/20"
            >
              الرئيسية (AR)
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6">
          {/* Terms */}
          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5">
                <FileText className="h-5 w-5 text-white/80" />
              </div>
              <h2 className="font-display text-2xl font-bold">الشروط والأحكام</h2>
            </div>

            <p className="text-sm text-white/70">
              باستخدامك لموقع VMSS – Vamos، فإنك توافق على الالتزام بجميع الشروط والأحكام التالية:
            </p>

            <div className="mt-6 space-y-4 text-sm text-white/70">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="font-semibold text-white/90">1. طبيعة الخدمات</div>
                <div className="mt-1">
                  جميع الخدمات المقدمة عبر الموقع هي خدمات رقمية تشمل خدمات السوشيال ميديا،
                  الاشتراكات الرقمية، بيع اليوزرات، وخدمات الدعم ذات الصلة.
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="font-semibold text-white/90">2. مسؤولية المستخدم</div>
                <div className="mt-1">
                  المستخدم مسؤول بشكل كامل عن استخدامه للخدمات، ويقر بأن جميع الطلبات تتم
                  على مسؤوليته الشخصية.
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="font-semibold text-white/90">3. تعديل الشروط</div>
                <div className="mt-1">
                  يحتفظ موقع VMSS – Vamos بالحق في تعديل أو تحديث الشروط والأحكام في أي وقت
                  دون إشعار مسبق، ويُعتبر استمرار استخدام الموقع موافقة على التعديلات.
                </div>
              </div>
            </div>
          </section>

          {/* Privacy */}
          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5">
                <ShieldCheck className="h-5 w-5 text-white/80" />
              </div>
              <h2 className="font-display text-2xl font-bold">سياسة الخصوصية</h2>
            </div>

            <p className="text-sm text-white/70">
              نلتزم في VMSS – Vamos بحماية خصوصية العملاء والحفاظ على سرية بياناتهم:
            </p>

            <div className="mt-6 space-y-4 text-sm text-white/70">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="font-semibold text-white/90">1. جمع المعلومات</div>
                <div className="mt-1">
                  يتم جمع المعلومات الضرورية فقط لتنفيذ الطلبات والتواصل مع العميل.
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="font-semibold text-white/90">2. حماية البيانات</div>
                <div className="mt-1">
                  لا نطلب أو نخزن كلمات المرور أو أي بيانات حساسة، ويتم التعامل مع جميع المعلومات
                  بسرية تامة.
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="font-semibold text-white/90">3. الأمان</div>
                <div className="mt-1">
                  نستخدم إجراءات مناسبة لحماية البيانات من الوصول غير المصرح به أو الاستخدام غير القانوني.
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="font-semibold text-white/90">4. الموافقة</div>
                <div className="mt-1">
                  استخدامك للموقع يعني موافقتك الكاملة على سياسة الخصوصية هذه.
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} VMSS. جميع الحقوق محفوظة.
        </div>
      </div>
    </main>
  );
}