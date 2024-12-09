import localFont from "next/font/local";
import "./globals.css";
import Header from "@/app/shared/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`antialiased`}
      >
      <Header/>
        {children}
      </body>
    </html>
  );
}
