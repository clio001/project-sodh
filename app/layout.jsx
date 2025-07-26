import { Inter, Noto_Serif } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "./components/ContextProvider";

const inter = Inter({ subsets: ["latin"] });
const noto_serif = Noto_Serif({ subsets: ["latin"], weight: "300" });

export const metadata = {
  title: "Projekt SODH",
  description: "A project by the SODH collective",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <ContextProvider>
        <body className={noto_serif.className}>{children}</body>
      </ContextProvider>
    </html>
  );
}
