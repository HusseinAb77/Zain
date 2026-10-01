"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinksAr = [
  { label: "الخدمات", href: "#services" },
  { label: "لماذا نحن", href: "#why-us" },
  { label: "تواصل معنا", href: "#contact" },
    { label: "الثقة أساس النمو", href: "/social-media-ar" },

];

export function NavbarAr() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <nav
      dir="rtl"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 sm:px-8 sm:py-5">
        {/* Logo */}
        <a href="/ar" className="flex items-center gap-2">
          <span className="font-display text-lg font-bold tracking-tight text-foreground sm:text-xl">
            Vmss
          </span>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
            <span className="font-display text-lg font-bold text-accent-foreground">
              V
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-10 lg:flex">
          {navLinksAr.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
          >
            VMSS الأفضل
          </a>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/60 text-foreground backdrop-blur transition hover:bg-card"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden">
          {/* Overlay */}
          <button
            aria-label="إغلاق"
            className="fixed inset-0 z-40 cursor-default bg-black/40"
            onClick={closeMenu}
          />

          {/* Panel */}
          <div className="fixed left-0 right-0 top-[64px] z-50 mx-auto w-[92%] max-w-md overflow-hidden rounded-2xl border border-border bg-background/95 p-4 shadow-2xl backdrop-blur">
            <div className="flex flex-col gap-2">
              {navLinksAr.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary/60"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 rounded-xl bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground transition hover:brightness-110"
              >
                VMSS الأفضل
              </a>

              <div className="mt-3 text-center text-xs text-muted-foreground">
                اختر قسمًا للانتقال بسرعة
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}