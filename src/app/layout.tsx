import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import { Toaster } from "react-hot-toast";

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
        <Toaster
          position="bottom-center"
          containerStyle={{
            bottom: "80px",
          }}
          toastOptions={{
            style: {
              background: "#323232",
              color: "#fff",
              width: "100%",
              maxWidth: "520px",
            },
          }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
