import type { ReactNode } from "react";

export default function ArLayout({ children }: { children: ReactNode }) {
  return (
    <div dir="rtl" className="min-h-screen">
      {children}
    </div>
  );
}