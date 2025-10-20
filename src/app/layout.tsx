import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import BackToTop from "@/components/ui/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codeiam Club",
  description: "Andhra University's Official Innovation Ecosystem",
  icons: {
    icon: [
      { url: "/codeiam-logo.jpg", sizes: "any" },
      { url: "/codeiam-logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/codeiam-logo.jpg" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/codeiam-logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/codeiam-logo.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {/* Fixed Navbar */}
        <Navbar />

        {/* 👇 Added top padding so content doesn't overlap */}
        <main className="pt-10 min-h-screen">
          {children}
        </main>

        <Footer />
        
        {/* Back to Top Button */}
        <BackToTop />
      </body>
    </html>
  );
}
