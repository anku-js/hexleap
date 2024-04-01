import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hexleap",
  description: "Hexleap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#F7F7F8] dark:bg-[#292B32]">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
