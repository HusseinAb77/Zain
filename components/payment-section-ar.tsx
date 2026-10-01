"use client";

export function PaymentSectionAr() {
  const methodsAr = [
    {
      key: "mastercard",
      label: "ماستر كارد",
      icon: (
        <svg viewBox="0 0 48 32" className="h-8 w-12" aria-hidden="true">
          <circle cx="18" cy="16" r="9" className="fill-[#eb001b]" />
          <circle cx="30" cy="16" r="9" className="fill-[#f79e1b]" />
          <path
            d="M24 9.6c2.3 1.6 3.8 4.3 3.8 7.4s-1.5 5.8-3.8 7.4c-2.3-1.6-3.8-4.3-3.8-7.4s1.5-5.8 3.8-7.4z"
            className="fill-[#ff5f00]"
          />
        </svg>
      ),
    },
    {
      key: "paypal",
      label: "باي بال",
      icon: (
        <svg viewBox="0 0 48 32" className="h-8 w-12" aria-hidden="true">
          <path
            d="M18.2 8h6.3c2.1 0 3.9.4 4.8 1.5.8.9 1.1 2.2.8 3.8-.8 4.3-3.5 6-7.2 6h-1.6c-.5 0-.9.4-1 .9l-.8 5.3c0 .3-.3.5-.6.5h-3.4c-.4 0-.6-.3-.5-.7l2.7-16.8c.1-.3.3-.5.5-.5z"
            className="fill-[#003087]"
          />
          <path
            d="M30.5 8.3c.8.9 1.1 2.2.8 3.8-.8 4.3-3.5 6-7.2 6h-1.6c-.5 0-.9.4-1 .9l-.8 5.3c0 .3-.3.5-.6.5h-2.2l-.2 1.4c0 .3.2.5.5.5h3c.4 0 .8-.3.9-.7l.7-4.8c.1-.4.5-.8.9-.8h1.5c3.4 0 5.9-1.5 6.7-5.5.3-1.4.2-2.6-.4-3.5-.1-.4-.4-.7-.8-1.1z"
            className="fill-[#002f86] opacity-70"
          />
        </svg>
      ),
    },
    {
      key: "binance",
      label: "باينانس",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-foreground"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2.5 15.3 5.8 12 9.1 8.7 5.8 12 2.5zM5.8 8.7 9.1 12 5.8 15.3 2.5 12 5.8 8.7zm12.4 0L21.5 12l-3.3 3.3L14.9 12l3.3-3.3zM12 14.9l3.3 3.3L12 21.5l-3.3-3.3 3.3-3.3z" />
          <path d="M12 10.3 13.7 12 12 13.7 10.3 12 12 10.3z" />
        </svg>
      ),
    },
    {
      key: "usdt",
      label: "USDT",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-foreground"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2.5c5.25 0 9.5 4.25 9.5 9.5S17.25 21.5 12 21.5 2.5 17.25 2.5 12 6.75 2.5 12 2.5zm0 1.9a7.6 7.6 0 1 0 0 15.2 7.6 7.6 0 0 0 0-15.2z" />
          <path d="M7.2 7.8h9.6v2H13v1.1c2.3.1 4 .5 4 1 0 .6-2.1 1.1-5 1.1s-5-.5-5-1.1c0-.5 1.7-.9 4-1V9.8H7.2v-2z" />
          <path d="M11 12.3v5h2v-5.1c-.32.02-.66.03-1 .03-.34 0-.68-.01-1-.03z" />
        </svg>
      ),
    },
    {
      key: "bank",
      label: "تحويل بنكي",
      icon: (
        <svg
          viewBox="0 0 48 32"
          className="h-8 w-12 text-muted-foreground transition-colors group-hover:text-foreground"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M24 6l14 7v2H10v-2l14-7zm-12 11h4v8h-4v-8zm8 0h4v8h-4v-8zm8 0h4v8h-4v-8zM8 27h32v2H8v-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section dir="rtl" className="relative px-8 py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="rounded-2xl border border-border bg-card p-12">
          {/* Header */}
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              طرق دفع مرنة
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold text-foreground">
              نقبل عدة وسائل دفع
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
              اختر الطريقة المناسبة لك — سنؤكد التفاصيل عبر واتساب.
            </p>
          </div>

          {/* Methods */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            {methodsAr.map((m) => (
              <div
                key={m.key}
                className="group flex flex-col items-center justify-center gap-2"
              >
                <div className="flex h-16 w-24 items-center justify-center rounded-xl border border-border bg-background transition-all hover:border-accent/30">
                  {m.icon}
                </div>

                <div className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}