import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navBar";
import 'devicon/devicon.min.css';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({children }: RootLayoutProps ) {

  return (
    <html lang="en">
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}




