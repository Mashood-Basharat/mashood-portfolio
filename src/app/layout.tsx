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

const BASE_URL = "https://mashood-portfolio-nine.vercel.app";

export const metadata: Metadata = {
  title: "Mashood Basharat | Computer Vision & AI Developer",
  description: "Portfolio of Mashood Basharat — Computer Vision & AI Developer specializing in RAG pipelines, edge AI, and LLM applications.",
  openGraph: {
    title: "Mashood Basharat | Computer Vision & AI Developer",
    description:
      "Portfolio of Mashood Basharat — Computer Vision & AI Developer. RAG pipelines, edge AI, real-time object detection, and LLM applications.",
    url: BASE_URL,
    siteName: "Mashood Basharat Portfolio",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Mashood Basharat - Computer Vision & AI Developer",
      },
    ],
  },
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
