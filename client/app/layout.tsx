// app/layout.tsx
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import store from "@/mainStore/store";
import AppWalletProvider from "./components/AppWalletProvider";
import { ToastContainer } from "react-toastify";
import ReduxProvider from "@/mainStore/provider";
import MobileWarning from "./components/MobileWarning/MobileWarning";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eventmint",
  description: "Enhancing Events with interactions",
  openGraph: {
    images:
      "/https://res.cloudinary.com/dtfvdjvyr/image/upload/v1719802304/event-logo_iyl1ec.png",
  },
  twitter: {
    title: "Eventmint",
    description: "Enhancing Events with interactions",

    creator: "@eventmint_",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <AppWalletProvider>
            <MobileWarning />
            {children}
            <ToastContainer />
          </AppWalletProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
