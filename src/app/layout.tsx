import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Auth Template",
    description: "Template with working auth.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.className} ${geistMono.className} "min-h-[calc(100vh-1px)] flex flex-col antialiased"`}
            >
                <Providers>
                    <main className="relative flex-1 flex flex-col">{children}</main>
                    <Toaster />
                </Providers>
            </body>
        </html>
    );
}
