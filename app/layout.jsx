import { Inter } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "./components/ContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Projct SODH",
  description: "A project by the SODH collective",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextProvider>
        <body className={inter.className}>{children}</body>
      </ContextProvider>
    </html>
  );
}
