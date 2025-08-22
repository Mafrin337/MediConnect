import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "MediConnect",
  description: "Your health, connected with technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}