import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "MediConnect",
  description: "Your health, connected with technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-4 bg-[#9ECAD6] shadow-md">
          {/* Left side: Logo */}
          <h1 className="text-2xl font-bold text-black">MediConnect</h1>

          {/* Right side: Navigation links */}
          <div className="flex gap-6">
            <Link href="/" className="text-gray-900 hover:text-gray-700">
              Home
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-gray-700">
              About
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-gray-700">
              Contact Us
            </Link>
          </div>
        </nav>


        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
