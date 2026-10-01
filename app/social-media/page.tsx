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

export default function SocialMediaPage() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#12001f] via-[#2a0a4a] to-[#070010]" />

      {/* Glow */}
      <div className="absolute top-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-[120px]" />
      <div className="absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-fuchsia-500/20 blur-[120px]" />

      {/* Back Button */}
      <Link
        href="/"
        className="fixed top-24 right-6 flex items-center gap-2 text-white/70 hover:text-white transition z-20"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>

      <div className="mx-auto max-w-5xl px-6 py-24 space-y-10">

        {/* HERO */}
        <section className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold">
            Social Media Protection & Growth Services
          </h1>
          <p className="text-white/70">
            Verification • Recovery • Brand Protection
          </p>
        </section>

        {/* CARD 1 */}
        <section className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-4">
            <BadgeCheck className="text-purple-400" />
            <h2 className="text-2xl font-bold">Why the Verified Badge Matters</h2>
          </div>

          <p className="text-white/70 leading-8">
            Verification is a trust signal. It increases credibility, reduces impersonation,
            and strengthens brand identity across social platforms.
          </p>

          <p className="mt-4 font-semibold">
            Trust creates customers. Verification builds trust.
          </p>
        </section>

        {/* CARD 2 */}
        <section className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="text-purple-400" />
            <h2 className="text-2xl font-bold">More Than Management</h2>
          </div>

          <p className="text-white/70 leading-8">
            Account suspensions, verification issues, and platform restrictions can directly
            impact business growth. VMSS provides recovery and protection when it matters most.
          </p>
        </section>

        {/* CARD 3 (PROTECTION) + STATS UNDER IT (FIXED HERE) */}
        <section className="space-y-6">

          {/* PROTECTION CARD */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="text-purple-400" />
              <h2 className="text-2xl font-bold">Protection, Trust & Growth</h2>
            </div>

            <p className="text-white/70 leading-8">
              We don’t just manage accounts — we protect brands, restore access, and help businesses
              grow with confidence in a competitive digital world.
            </p>

            <p className="mt-4 font-bold">
              VMSS — Protect Your Brand. Build Trust. Grow Without Limits.
            </p>
          </div>

          {/* STATS UNDER PROTECTION (NOW EXACTLY WHERE YOU WANTED) */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <h3 className="text-sm text-white/60 mb-6 pl-1">
              Key Market Insights
            </h3>

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-white/80">SMEs using social media</span>
                <span className="font-semibold">55%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: "55%" }} />
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-white/80">SMEs using social media to acquire customers</span>
                <span className="font-semibold">78%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-fuchsia-500 rounded-full" style={{ width: "78%" }} />
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-white/80">Consumers researching brands</span>
                <span className="font-semibold">51%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-purple-400 rounded-full" style={{ width: "51%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white/80">Population active on social media</span>
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
          <h2 className="text-2xl font-bold mb-8">Our Core Services</h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <Rocket className="text-purple-400 mb-3" />
              <h3 className="font-bold text-lg mb-2">Account Growth</h3>
              <p className="text-white/60 text-sm">
                Strategic growth systems to increase reach and engagement.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <ShieldCheck className="text-fuchsia-400 mb-3" />
              <h3 className="font-bold text-lg mb-2">Brand Protection</h3>
              <p className="text-white/60 text-sm">
                Prevent impersonation and secure your identity.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <Zap className="text-purple-300 mb-3" />
              <h3 className="font-bold text-lg mb-2">Fast Recovery</h3>
              <p className="text-white/60 text-sm">
                Restore hacked or suspended accounts quickly.
              </p>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="text-center rounded-2xl border border-white/10 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 p-10 backdrop-blur-xl">
          <Globe className="mx-auto text-purple-300 mb-4" />
          <h2 className="text-3xl font-bold mb-3">Ready to Upgrade Your Brand?</h2>
          <p className="text-white/70 mb-6">
            Secure your presence and scale your business.
          </p>

        <Link
  href="/"
  className="inline-block px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
>
  Start Now
</Link>
        </section>

      </div>
    </main>
  );
}