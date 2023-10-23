import "./globals.css";
import type { Metadata } from "next";
import { Source_Sans_3, Roboto_Slab } from "next/font/google";

const fontRegular = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-regular",
});

const fontSpecial = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-special",
});

export const metadata: Metadata = {
  title: "Grey Stone International | For your ready-made garments needs",
  description:
    "Grey Stone International is a 100% export-oriented garment buying house based in Bangladesh, offering a wide range of services for ready-made garments needs.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${fontRegular.variable} ${fontSpecial.variable}`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
