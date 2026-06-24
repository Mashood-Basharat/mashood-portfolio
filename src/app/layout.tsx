import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ChatBubble from "@/components/chat-bubble";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mashood Basharat | AI Developer & Computer Vision Engineer",
  description: "Portfolio of Mashood Basharat — Computer Vision & AI Developer specializing in RAG pipelines, edge AI, and LLM applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ChatBubble />
      </body>
    </html>
  );
}
