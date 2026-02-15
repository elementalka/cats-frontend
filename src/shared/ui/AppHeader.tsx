"use client";

import Link from "next/link";
import { Breadcrumbs } from "./Breadcrumbs";

export function AppHeader() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-semibold text-brand-navy">
            CATS
          </Link>
          <div className="hidden md:block">
            <Breadcrumbs />
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* TODO: кнопка Scan -> модалка зі сканером */}
          <button className="rounded-md bg-brand-orange px-3 py-2 text-sm font-medium text-white">
            Scan
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-3 md:hidden">
        <Breadcrumbs />
      </div>
    </header>
  );
}
