import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Misstion Driven FE Project Test",
  description: "미션드리븐 프론트앤드 과제테스트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <div className="md:hidden">
          <Footer />
        </div>
      </body>
    </html>
  );
}
