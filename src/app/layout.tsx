import { Metadata } from "next";
import "./globals.css";

// Correct metadata object for Next.js
export const metadata: Metadata = {
  title: "Rahul Resume - Portfolio Website",
  description: "A professional portfolio website by Rahul Vishwakarma showcasing projects and skills.",
  keywords: ["Rahul Vishwakarma", "portfolio", "resume", "developer portfolio", "full-stack developer", "Rahulresume"],
  authors: [{ name: "Rahul Vishwakarma" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Rahul Resume - Professional Portfolio",
    description: "Explore Rahul Vishwakarma's professional projects and experience.",
    url: "https://rahulresume.com", // Replace with your actual URL
    siteName: "Rahul Resume",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
