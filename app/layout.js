import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600", "700", "900"]
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
  document.documentElement.style.setProperty('--background', '#1a1a1a');
  document.documentElement.style.setProperty('--foreground', '#f5f5f5');
  document.documentElement.style.setProperty('--muted', '#a3a3a3');
  document.documentElement.style.setProperty('--card', '#262626');
  document.documentElement.style.setProperty('--interactive', '#fafafa');
} else {
  document.documentElement.style.setProperty('--background', '#fffbe6');
  document.documentElement.style.setProperty('--foreground', '#202020');
  document.documentElement.style.setProperty('--muted', '#78716c');
  document.documentElement.style.setProperty('--card', '#ffffff');
  document.documentElement.style.setProperty('--interactive', '#1f2937');
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
