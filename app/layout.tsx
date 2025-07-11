import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ResponsiveNav } from "@/components/Home/Navbar/ResponsiveNav";
import { Toaster } from "@/components/ui/sonner";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


// code for the button component
const font = Poppins({
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Title and description for the application
  title: "AI Image Generator",
  description: "AI Generator is a Next.js application that allows users to generate images using AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-gray-900 antialiased`}>
        <ResponsiveNav />
        {children}
        <Toaster className="bg-white"/>
      </body>
    </html>
  );
}
