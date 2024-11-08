import "@/styles/global.css";
import Nav from "@/components/Nav";
import { Analytics } from "@vercel/analytics/react";
import { AuthProvider } from "./provider";
import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Suffa Mehfil",
  description: "Ahlussuffa Literary Festival",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col ${inter.className}`}>
        <div className="bg main">
          <div className="gradient" />
        </div>
        <div className="app">
          <Nav />
          <AuthProvider>
            {children}
          </AuthProvider>
          <Analytics />
        </div>
        
      </body>
    </html>
  );
}
