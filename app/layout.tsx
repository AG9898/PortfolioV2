import "./globals.css";
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 

const inter = Inter({ subsets:['latin']})

export const metadata = {
  title: 'My Portfolio',
  description: 'Created with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} px-4 sm:px-8`}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}



