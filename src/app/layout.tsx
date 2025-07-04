import type { Metadata } from "next";
import { Inter, Open_Sans} from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Header from "./_components/header";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const InterSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "pivnenkowebdev | программирование для детей",
  description: "программирование для детей",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.className} antialiased`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
