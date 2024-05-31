import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Thasadith } from "next/font/google";

const t = Thasadith({
  subsets: ["latin"],
  weight: ["400", "700"]
  // variable: "--font-s"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex text-dblue flex-col bg-lpink h-screen justify-between ${t.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
