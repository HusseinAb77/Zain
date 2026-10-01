import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  ShieldCheck,
  Lock,
  Rocket,
  Globe,
  Zap,
} from "lucide-react";

export default function SocialMediaPageAR() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden" dir="rtl">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#12001f] via-[#2a0a4a] to-[#070010]" />

      {/* Glow */}
      <div className="absolute top-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-[120px]" />
      <div className="absolute bottom-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-fuchsia-500/20 blur-[120px]" />

      {/* Back Button */}
      <Link
        href="/"
        className="fixed top-24 left-6 flex items-center gap-2 text-white/70 hover:text-white transition z-20"
      >
        <ArrowLeft className="h-4 w-4" />
        رجوع
      </Link>

      <div className="mx-auto max-w-5xl px-6 py-24 space-y-10">

        {/* HERO */}
        <section className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold">
            خدمات حماية ونمو حسابات السوشيال ميديا
          </h1>
          <p className="text-white/70">
            التحقق • استرجاع الحسابات • حماية العلامة التجارية
          </p>
        </section>

        {/* CARD 1 */}
        <section className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-4 justify-end">
            <h2 className="text-2xl font-bold">لماذا علامة التوثيق مهمة؟</h2>
            <BadgeCheck className="text-purple-400" />
          </div>

          <p className="text-white/70 leading-8 text-right">
            التوثيق هو إشارة ثقة. يزيد من مصداقية الحساب، يقلل انتحال الهوية،
            ويعزز هوية العلامة التجارية على جميع المنصات.
          </p>

          <p className="mt-4 font-semibold text-right">
            الثقة تجلب العملاء — والتوثيق يبني الثقة.
          </p>
        </section>

        {/* CARD 2 */}
        <section className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-4 justify-end">
            <h2 className="text-2xl font-bold">أكثر من مجرد إدارة</h2>
            <ShieldCheck className="text-purple-400" />
          </div>

          <p className="text-white/70 leading-8 text-right">
            إيقاف الحسابات، مشاكل التوثيق، وقيود المنصات يمكن أن تؤثر بشكل مباشر
            على نمو الأعمال. نحن نوفر الحماية والاسترجاع عندما يكون الأمر مهمًا.
          </p>
        </section>

        {/* PROTECTION + STATS */}
        <section className="space-y-6">

          {/* PROTECTION */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <div className="flex items-center gap-3 mb-4 justify-end">
              <h2 className="text-2xl font-bold">الحماية والثقة والنمو</h2>
              <Lock className="text-purple-400" />
            </div>

            <p className="text-white/70 leading-8 text-right">
              نحن لا ندير الحسابات فقط — بل نحمي العلامات التجارية، نسترجع الوصول،
              ونساعد الشركات على النمو بثقة في عالم رقمي تنافسي.
            </p>

            <p className="mt-4 font-bold text-right">
              VMSS — احمِ علامتك التجارية. ابنِ الثقة. انطلق بلا حدود.
            </p>
          </div>

          {/* KEY LABEL */}
          <p className="text-white/60 text-sm pr-1 text-right">
            مؤشرات السوق الرئيسية
          </p>

          {/* STATS */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-white/80">الشركات الصغيرة تستخدم السوشيال ميديا</span>
                <span className="font-semibold">55%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: "55%" }} />
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-white/80">استخدامها لجذب العملاء</span>
                <span className="font-semibold">78%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-fuchsia-500 rounded-full" style={{ width: "78%" }} />
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-white/80">المستخدمون يبحثون عن العلامات</span>
                <span className="font-semibold">51%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-purple-400 rounded-full" style={{ width: "51%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white/80">معدل النشاط على السوشيال ميديا</span>
                <span className="font-semibold">78%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-fuchsia-400 rounded-full" style={{ width: "78%" }} />
              </div>
            </div>

          </div>

        </section>

        {/* SERVICES */}
        <section className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="text-2xl font-bold mb-8 text-right">خدماتنا الأساسية</h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 rounded-xl border border-white/10 bg-white/5 text-right">
              <Rocket className="text-purple-400 mb-3 ml-auto" />
              <h3 className="font-bold text-lg mb-2">نمو الحسابات</h3>
              <p className="text-white/60 text-sm">
                استراتيجيات لزيادة الوصول والتفاعل بشكل احترافي.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/10 bg-white/5 text-right">
              <ShieldCheck className="text-fuchsia-400 mb-3 ml-auto" />
              <h3 className="font-bold text-lg mb-2">حماية العلامة</h3>
              <p className="text-white/60 text-sm">
                منع انتحال الهوية وتأمين وجودك الرقمي.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/10 bg-white/5 text-right">
              <Zap className="text-purple-300 mb-3 ml-auto" />
              <h3 className="font-bold text-lg mb-2">استرجاع سريع</h3>
              <p className="text-white/60 text-sm">
                استرجاع الحسابات المخترقة أو الموقوفة بسرعة.
              </p>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="text-center rounded-2xl border border-white/10 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 p-10 backdrop-blur-xl">
          <Globe className="mx-auto text-purple-300 mb-4" />
          <h2 className="text-3xl font-bold mb-3">
            هل أنت جاهز لتطوير علامتك؟
          </h2>
          <p className="text-white/70 mb-6">
            احمِ حساباتك وابدأ في التوسع بثقة.
          </p>

        <Link
  href="/"
  className="inline-block px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
>
  ابدأ الآن
</Link>
        </section>

      </div>
    </main>
  );
}