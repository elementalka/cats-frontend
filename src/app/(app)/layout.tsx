import "@/app/globals.css";
import { ToasterClient } from "@/shared/ui/ToasterClient";
import { AppHeader } from "@/shared/ui/AppHeader";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body>
        <div className="min-h-screen">
          <AppHeader />
          <main className="mx-auto max-w-6xl px-4 py-4">{children}</main>
        </div>
        <ToasterClient />
      </body>
    </html>
  );
}
