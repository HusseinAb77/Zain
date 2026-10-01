export function FooterAr() {
  return (
    <footer dir="rtl" className="border-t border-border px-8 py-10">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-display text-sm font-bold tracking-tight text-foreground">
            VMSS
          </span>
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent">
            <span className="font-display text-sm font-bold text-accent-foreground">
              V
            </span>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          © 2026 VMSS. جميع الحقوق محفوظة.
        </p>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            الخصوصية
          </a>
          <a
            href="#"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            الشروط
          </a>
        </div>
      </div>
    </footer>
  );
}