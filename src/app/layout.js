import { Antonio } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Antonio({ subsets: ["latin"] });

export const metadata = {
  title: "Ayrton",
  description: "Ayrton_portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
        </body>
    </html>
  );
}
