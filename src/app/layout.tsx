import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Connectoo",
  description: "Connectoo is a place for confrences and fairs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        // suppressHydrationWarning={true}
        className={`${inter.className} dark:bg-gray-800`}>
        {/* @ts-expect-error Server Component */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
