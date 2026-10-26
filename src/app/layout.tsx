import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "@/styles/globals.css";
import { CartProvider } from "@/context/CartContext";
import { Toast } from "@/components/Toast";
import { MobileBottomNav } from "@/components/MobileBottomNav";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ebe6da",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Games Habibi — PC games & digital passes",
  description:
    "Curated PC games and digital passes from ₹169. Pay with UPI, get your login on WhatsApp or email.",
  icons: {
    icon: [
      { url: "/png/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/png/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/png/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(JSON.parse(localStorage.getItem("gh_theme")||"null")==="dark"||localStorage.getItem("gh_theme")==="dark"){document.documentElement.dataset.theme="dark";}}catch(e){}`,
          }}
        />
      </head>
      <body>
        {/* Global SVG filters for Void Market ink illustrations */}
        <svg
          width="0"
          height="0"
          style={{ position: "absolute" }}
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <filter id="rough" x="-5%" y="-5%" width="110%" height="110%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency=".035"
                numOctaves={3}
                seed={7}
                result="n"
              />
              <feDisplacementMap in="SourceGraphic" in2="n" scale={10} />
            </filter>
            <filter id="splat" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency=".6"
                numOctaves={2}
                seed={3}
                result="n"
              />
              <feDisplacementMap in="SourceGraphic" in2="n" scale={9} />
            </filter>
            <linearGradient id="mist" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ebe6da" stopOpacity="0" />
              <stop offset="1" stopColor="#ebe6da" stopOpacity=".92" />
            </linearGradient>
            <linearGradient id="mistDark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#0f0e0d" stopOpacity="0" />
              <stop offset="1" stopColor="#0f0e0d" stopOpacity=".9" />
            </linearGradient>
          </defs>
        </svg>

        <CartProvider>
          {children}
          <Toast />
          <MobileBottomNav />
        </CartProvider>
      </body>
    </html>
  );
}
