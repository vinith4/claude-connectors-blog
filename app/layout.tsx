import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://claude-connectors-blog.vercel.app"),
  title: {
    default: "Claude + Connectors: From AI Assistant to Developer Workflow",
    template: "%s | Claude Connectors Blog",
  },
  description:
    "How GitHub and Vercel connectors turn a Claude conversation into a real development, version-control, and deployment workflow.",
  openGraph: {
    title: "Claude + Connectors: From AI Assistant to Developer Workflow",
    description:
      "How GitHub and Vercel connectors turn a Claude conversation into a real development, version-control, and deployment workflow.",
    type: "website",
    siteName: "Claude Connectors Blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude + Connectors: From AI Assistant to Developer Workflow",
    description:
      "How GitHub and Vercel connectors turn a Claude conversation into a real development, version-control, and deployment workflow.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
