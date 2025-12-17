import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./Components/providers"; // 👈 Import file baru tadi

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portofolio Satria",
  description: "Satria | Frontend Developer Portofolio",
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning wajib ada jika pakai next-themes
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Bungkus children dengan Providers */}
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  );
}
