import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400","600","700","900"]
});

export const metadata = {
  title: "SkillSphere",
  description: "Conectando pessoas, competências e propósito",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = stored === 'dark' || (!stored && prefersDark);
    if (dark) {
      document.documentElement.style.setProperty('--background', '#0a0a0a');
      document.documentElement.style.setProperty('--foreground', '#ededed');
      document.documentElement.style.setProperty('--muted', '#9ca3af');
      document.documentElement.style.setProperty('--card', '#0f1724');
      document.documentElement.style.setProperty('--interactive', '#f9fafb');
    } else {
      document.documentElement.style.setProperty('--background', '#ffffff');
      document.documentElement.style.setProperty('--foreground', '#171717');
      document.documentElement.style.setProperty('--muted', '#6b7280');
      document.documentElement.style.setProperty('--card', '#ffffff');
      document.documentElement.style.setProperty('--interactive', '#111827');
    }
  } catch(e){}
})();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
