import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Web ESG - Form`,
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
  return <>{children}</>;
}
