import "@/app/globals.css";
import { ToasterClient } from "@/shared/ui/ToasterClient";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body>
        {children}
        <ToasterClient />
      </body>
    </html>
  );
}
