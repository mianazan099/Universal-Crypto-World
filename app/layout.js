import "./globals.css";
import { Bai_Jamjuree } from "next/font/google";

const bai_Jamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Universal Crypto World",
  description: "Universal Crypto World",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bai_Jamjuree.className} mx-auto max-w-[min(100%-4rem,76rem)] overflow-x-hidden bg-dark-one text-center text-white lg:text-start`}
      >
        {children}
      </body>
    </html>
  );
}
