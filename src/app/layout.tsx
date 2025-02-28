import type { Metadata } from "next";
import localfont from "next/font/local";

import "./globals.css";

const nekst = localfont({
  src: [
    {
      path: "../../public/fonts/Nekst-Light.woff2",
      weight: "300",
    },
    {
      path: "../../public/fonts/Nekst-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/Nekst-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/Nekst-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../../public/fonts/Nekst-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-nekst",
});

const involve = localfont({
  src: [
    {
      path: "../../public/fonts/Involve-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Involve-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Involve-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Involve-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-involve",
});

export const metadata: Metadata = {
  title: "Buyer Mini-App",
  openGraph: {
    title: "Инновационное Telegram Mini-App",
    description:
      "Мы объединяет интересы покупателей, продавцов и инвесторов на популярных маркетплейсах в игровой экономический симулятор",
    images: [
      {
        url: "../../public/images/share.png",
        width: 1200,
        height: 800,
        alt: "Инновационное Telegram Mini-App",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${nekst.variable} ${involve.variable} max-w-[1440px] mx-auto antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
