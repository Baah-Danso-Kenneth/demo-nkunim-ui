import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Providers from "@/components/Providers";

const bowlby = localFont({
  src: '../../public/fonts/BowlbyOneSC-Regular.ttf',
  variable: '--font-bowlby'
})

const dmMono = localFont({
  src: '../../public/fonts/DMMono-Regular.ttf',
  variable: '--font-dmMono'
})

const playWright = localFont({
  src: '../../public/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf',
  variable: '--font-playWright'
})


export const metadata: Metadata = {
  title: "Payment system",
  description: "Your number one genue payment system with Crypto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`${bowlby.variable} ${dmMono.variable} ${playWright.variable} antialiased`}
      >
        <main>
          <Providers>
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
