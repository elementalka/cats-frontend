"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function labelOf(seg: string) {
  if (seg === "containers") return "Тара";
  if (seg === "admin") return "Адмін";
  if (seg === "users") return "Користувачі";
  if (seg === "products") return "Продукти";
  if (seg === "product-types") return "Типи продуктів";
  if (seg === "reminders") return "Нагадування";
  return seg;
}

export function Breadcrumbs() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);

  let acc = "";
  const items = parts.map((p) => {
    acc += `/${p}`;
    return { href: acc, label: labelOf(p) };
  });

  return (
    <nav className="text-sm text-slate-600">
      <Link className="hover:underline" href="/">Home</Link>
      {items.map((it) => (
        <span key={it.href}>
          {" / "}
          <Link className="hover:underline" href={it.href}>
            {it.label}
          </Link>
        </span>
      ))}
    </nav>
  );
}
