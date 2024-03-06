import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevmentorLive is closed! 🙃",
  description:
    "Hi 👋, my name is Mark Tellez and I have spent my life writing software for every industry you can imagine and at least 15 more you can&apos;t!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-red-800`}>{children}</body>
    </html>
  );
}
