"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

type Review = {
  id: string;
  name: string;
  handle: string;
  platform: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
  verified?: boolean;
  avatar?: string;
  accent?: "pink" | "purple" | "blue" | "teal";
};

function Stars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${value} stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-sm ${i < value ? "text-yellow-400" : "text-white/15"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function Avatar({
  name,
  handle,
  src,
  link,
}: {
  name: string;
  handle: string;
  src?: string;
  link?: string;
}) {
  const Wrapper: any = link ? "a" : "div";
  const wrapperProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  const safeSrc = src && src.trim().length > 0 ? src : "/pfp/default.jpg";

  return (
    <Wrapper
      {...wrapperProps}
      className="relative h-11 w-11 overflow-hidden rounded-full border border-white/15 bg-white/5"
      title={handle}
    >
      <img
        src={safeSrc}
        alt={`${name} avatar`}
        className="h-full w-full object-cover"
        loading="lazy"
        onError={(e) => {
          const img = e.currentTarget as HTMLImageElement;
          if (!img.src.includes("/pfp/default.jpg")) {
            img.src = "/pfp/default.jpg";
          }
        }}
      />
    </Wrapper>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
      {text}
    </span>
  );
}

function AccentGlow({ accent }: { accent?: Review["accent"] }) {
  const cls = useMemo(() => {
    switch (accent) {
      case "pink":
        return "bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.22),transparent_60%)]";
      case "blue":
        return "bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.22),transparent_60%)]";
      case "teal":
        return "bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_60%)]";
      default:
        return "bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.22),transparent_60%)]";
    }
  }, [accent]);

  return (
    <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
      <div className={`absolute inset-0 ${cls}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_60%)]" />
    </div>
  );
}

export default function ReviewsPage() {
  const reviews: Review[] = [
    {
      id: "1",
      name: "Hussein",
      handle: "@leb3",
      platform: "Instagram",
      rating: 5,
      comment: "افحلللل حد بلانستا 🔥🔥🔥",
      verified: true,
      avatar: "/pfp/hussein.jpg",
      accent: "purple",
    },
    {
      id: "2",
      name: "Daniel",
      handle: "@yusuf_mhll",
      platform: "Instagram",
      rating: 5,
      comment: "اسطورة, اسرع وافضل متجر🔥",
      verified: true,
      avatar: "/pfp/yusuf.jpg",
      accent: "blue",
    },
    {
      id: "3",
      name: "Adam",
      handle: "@psbx",
      platform: "All Platforms",
      rating: 4,
      comment: "والله وحش خيي اكرم, استمر",
      verified: true,
      avatar: "/pfp/adam.jpg",
      accent: "pink",
    },
    {
      id: "4",
      name: "Zain",
      handle: "@z5y6",
      platform: "All Platforms",
      rating: 5,
      comment: "VMSS THE GOAT GUYS, THE BEST IN ALL TIME⚡.",
      verified: true,
      avatar: "/pfp/zain.jpg",
      accent: "teal",
    },
    {
      id: "5",
      name: "محمد الحسيني",
      handle: "@m_py_",
      platform: "Tik Tok",
      rating: 4,
      comment: "Great Store, fast delivery and high quality.",
      verified: true,
      avatar: "/pfp/mhmd.jpg",
      accent: "pink",
    },
    {
      id: "6",
      name: "Ahmad",
      handle: "@x.6am_",
      platform: "Telegram",
      rating: 5,
      comment: "Great services, This guy is beast 💪🏻",
      verified: true,
      avatar: "/pfp/ahmad.jpg",
      accent: "blue",
    },
    {
      id: "7",
      name: "Frank",
      handle: "@fyhb",
      platform: "All Platforms",
      rating: 5,
      comment: "الافضل بدون نقاش, 10/10 🔥🔥",
      verified: true,
      avatar: "/pfp/frank.jpg",
      accent: "purple",
    },
    {
      id: "8",
      name: "عتي",
      handle: "@33te",
      platform: "All Platforms",
      rating: 5,
      comment: "THE GOATTTTTTT, VAMOOSSSS",
      verified: true,
      avatar: "/pfp/33te.jpg",
      accent: "teal",
    },
    {
      id: "9",
      name: "Yusuf",
      handle: "@7udr",
      platform: "Instagram",
      rating: 4,
      comment: "تعامل محترم وخدمة ممتازة.",
      verified: true,
      avatar: "/pfp/ysf.jpg",
      accent: "pink",
    },
    {
      id: "10",
      name: "mgyp",
      handle: "@mgyp.old",
      platform: "YouTube",
      rating: 5,
      comment: "Instant Delivery!, I love it bro keep going",
      verified: true,
      avatar: "/pfp/mgyp.jpg",
      accent: "blue",
    },
  ];

  const [name, setName] = useState("");
  const [handle, setHandle] = useState("");
  const [platform, setPlatform] = useState("Instagram");
  const [rating, setRating] = useState<1 | 2 | 3 | 4 | 5>(5);
  const [comment, setComment] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [submitted, setSubmitted] = useState(false);
  const [formErr, setFormErr] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormErr(null);

    if (!name.trim() || !comment.trim()) {
      setFormErr("Please fill in your name and comment.");
      return;
    }

    setSubmitted(true);

    setName("");
    setHandle("");
    setPlatform("Instagram");
    setRating(5);
    setComment("");
    setFile(null);

    setTimeout(() => setSubmitted(false), 3500);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-64 -top-64 h-[720px] w-[720px] rounded-full blur-[190px] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),transparent_70%)]" />
        <div className="absolute -right-64 top-[6%] h-[720px] w-[720px] rounded-full blur-[190px] bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.32),transparent_70%)]" />
        <div className="absolute bottom-[-320px] left-1/2 h-[980px] w-[980px] -translate-x-1/2 rounded-full blur-[220px] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),rgba(236,72,153,0.15),transparent_75%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,transparent_0%,rgba(0,0,0,0.55)_50%,rgba(0,0,0,0.92)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-[linear-gradient(90deg,rgba(168,85,247,1),rgba(236,72,153,1))]" />
              <span className="text-xs tracking-[0.25em] text-white/70">VMSS REVIEWS</span>
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Customer{" "}
              <span className="bg-[linear-gradient(90deg,rgba(168,85,247,1),rgba(236,72,153,1))] bg-clip-text text-transparent">
                Reviews
              </span>
            </h1>

            <p className="mt-2 max-w-2xl text-sm text-white/65 sm:text-base">
              Top reviews from our customers.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => history.back()}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>

            <Link
              href="/en"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              Home (EN)
            </Link>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">Add your review</h2>
              <p className="mt-1 text-sm text-white/60">
              </p>
            </div>

            {submitted ? (
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200">
                ✅ Thanks! Your review was submitted.
              </div>
            ) : null}
          </div>

          {formErr ? (
            <div className="mt-4 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {formErr}
            </div>
          ) : null}

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs text-white/60">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/20"
                />
              </div>

              <div>
                <label className="text-xs text-white/60">Username</label>
                <input
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  placeholder="@username (optional)"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/20"
                />
              </div>

              <div>
                <label className="text-xs text-white/60">Platform</label>
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-white/20"
                >
                  <option>Instagram</option>
                  <option>Tik Tok</option>
                  <option>YouTube</option>
                  <option>Telegram</option>
                  <option>All Platforms</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-white/60">Avatar (optional)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80 file:mr-3 file:rounded-xl file:border-0 file:bg-white/10 file:px-3 file:py-2 file:text-xs file:text-white hover:file:bg-white/15"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-white/60">Stars</label>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    type="button"
                    key={n}
                    onClick={() => setRating(n as any)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      rating === n
                        ? "border-white/25 bg-white/10 text-white"
                        : "border-white/10 bg-white/[0.04] text-white/70 hover:border-white/20"
                    }`}
                  >
                    {n} ★
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs text-white/60">Comment</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                rows={4}
                placeholder="Write your review..."
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/20"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs text-white/45">
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white
                  bg-[linear-gradient(90deg,rgba(168,85,247,1),rgba(236,72,153,1))]
                  shadow-[0_12px_35px_rgba(168,85,247,0.22)]
                  transition hover:opacity-90 active:scale-[0.99]"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:-translate-y-0.5 hover:border-white/20"
            >
              <AccentGlow accent={r.accent} />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Avatar name={r.name} handle={r.handle} src={r.avatar} link={r.avatar} />
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="font-semibold text-white">{r.name}</div>
                        {r.verified ? (
                          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-200">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            Verified
                          </span>
                        ) : null}
                      </div>
                      <div className="text-xs text-white/55">{r.handle}</div>
                    </div>
                  </div>

                  <Badge text={r.platform} />
                </div>

                <div className="mt-4">
                  <Stars value={r.rating} />
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{r.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} VMSS. All rights reserved.
        </div>
      </div>
    </main>
  );
}