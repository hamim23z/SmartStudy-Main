import { Inter, Kanit } from "next/font/google";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Smart Study - For Engineering Students",
  description: "Making life a little bit easier for engineering students.",
  openGraph: {
    title: "Smart Study - For Engineering Students",
    description: "Making life a little bit easier for engineering students.",
    type: "website",
    images: [
      {
        url: "",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Smart Study - For Engineering Students",
    description: "Making life a little bit easier for engineering students",
    images: [
      {
        url: "",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${kanit.className}`}>
        <StackProvider app={stackServerApp}>
          <StackTheme>{children}</StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
