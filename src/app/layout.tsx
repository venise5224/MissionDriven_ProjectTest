import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
