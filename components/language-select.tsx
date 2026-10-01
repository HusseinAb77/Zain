"use client";

import { Globe } from "lucide-react";

interface LanguageSelectProps {
  onSelect: (lang: "en" | "ar") => void;
}

export function LanguageSelect({ onSelect }: LanguageSelectProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative flex flex-col items-center gap-12">
        {/* Subtle radial glow */}
        <div className="pointer-events-none absolute -top-32 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

        <div className="flex flex-col items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card">
            <Globe className="h-8 w-8 text-accent" />
          </div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">
            Select Language
          </h1>
          <p className="text-sm text-muted-foreground">
            Choose your preferred language
          </p>
        </div>

        <div className="flex gap-6">
          <button
            type="button"
            onClick={() => onSelect("en")}
            className="group relative flex h-40 w-48 flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card transition-all duration-300 hover:border-accent/50 hover:bg-accent/5"
          >
            <span className="text-4xl font-bold text-foreground transition-colors group-hover:text-accent">
              EN
            </span>
            <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
              English
            </span>
            <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-accent transition-all duration-300 group-hover:w-12" />
          </button>

          <button
            type="button"
            onClick={() => onSelect("ar")}
            className="group relative flex h-40 w-48 flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card transition-all duration-300 hover:border-accent/50 hover:bg-accent/5"
          >
            <span className="text-4xl font-bold text-foreground transition-colors group-hover:text-accent">
              AR
            </span>
            <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
              {"العربية"}
            </span>
            <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-accent transition-all duration-300 group-hover:w-12" />
          </button>
        </div>
      </div>
    </div>
  );
}
