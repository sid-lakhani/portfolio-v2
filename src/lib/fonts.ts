import localFont from "next/font/local";
import { Poppins } from "next/font/google";

export const Cascadia = localFont({
  src: "./font/Cascadia.ttf",
  variable: "--font-cascadia",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});