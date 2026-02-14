import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://habeshtable.example.com"),
  title: {
    default: "Habesh Table | Ethiopian & Eritrean Restaurant",
    template: "%s | Habesh Table"
  },
  description:
    "A modern Ethiopian and Eritrean restaurant experience featuring injera platters, traditional stews, and a welcoming atmosphere.",
  openGraph: {
    title: "Habesh Table",
    description:
      "Explore menu favorites, hours, and reservations for a modern Ethiopian/Eritrean dining experience.",
    url: "https://habeshtable.example.com",
    siteName: "Habesh Table",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
