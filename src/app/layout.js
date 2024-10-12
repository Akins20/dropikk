import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Test1/Navbar";
import Footer from "@/components/Test1/Footer";
// import Navbar from "@/components/Test2/Navbar";
// import Footer from "@/components/Test2/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Dropikk",
  description: "Empowering your business with seamless delivery solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
