import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./styles/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "500", "900"],
});

export const metadata: Metadata = {
  title: `Web ESG - Login`,
  description: "Cap 15 - Full Stack - Done! - Atividade 2 - Full Stacking",
  icons: {
    icon: "/esg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={roboto.className}>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{ duration: 8000 }}
        />
        {children}
      </body>
    </html>
  );
}
