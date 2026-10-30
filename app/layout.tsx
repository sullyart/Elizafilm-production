import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { site } from "@/lib/data";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const f = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: `${site.name} | Video Production & Studio Rental`,
  description: site.tagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={f.variable}>
      <body className="font-sans bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
