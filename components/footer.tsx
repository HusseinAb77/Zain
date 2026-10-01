export function Footer() {
  return (
    <footer className="border-t border-border px-8 py-10">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent">
            <span className="font-display text-sm font-bold text-accent-foreground">
              V
            </span>
          </div>
          <span className="font-display text-sm font-bold tracking-tight text-foreground">
            VMSS
          </span>
        </div>

        <p className="text-xs text-muted-foreground">
          {"© 2026 VMSS. All rights reserved."}
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
