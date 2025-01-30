import localFont from "next/font/local";
import "./globals.css";

const pexicoMicro = localFont({
  src: "./fonts/PexicoMicro.woff",
  variable: "--pexico-micro",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pexicoMicro.className}>{children}</body>
    </html>
  );
}
