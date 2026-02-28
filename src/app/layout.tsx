import type { Metadata } from "next";
import { inter } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Acme Dash",
  description: "A dashboard for Acme Inc.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en" className={inter.className}>
            <body>
                {children}
            </body>
        </html>
    )
}