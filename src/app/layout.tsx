import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Space_Grotesk, DM_Mono } from "next/font/google";
import "@/styles/globals.css";
import { CartProvider } from "@/context/CartContext";
import { Toast } from "@/components/Toast";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { CartDrawer } from "@/components/CartDrawer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-data",
});

export const viewport: Viewport = {
  themeColor: "#0D0A1A",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Games Habibi | Premium Digital Game Store",
  description:
    "Games Habibi offers premium PC game access, digital streaming memberships, and seamless UPI checkout with fast order fulfillment.",
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
      className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${dmMono.variable}`}
    >
      <body>
        <CartProvider>
          {children}
          <CartDrawer />
          <Toast />
          <MobileBottomNav />
        </CartProvider>
      </body>
    </html>
  );
}
