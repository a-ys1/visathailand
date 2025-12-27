import { Funnel_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${funnelSans.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
