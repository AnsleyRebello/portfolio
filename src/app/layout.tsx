import { Metadata } from "next";
import "./globals.css";

// Correct metadata object for Next.js
export const metadata: Metadata = {
  title: "Ansley Rebello - Portfolio Website",
  description: "A professional portfolio website by Ansley Rebello showcasing projects and skills.",
  keywords: ["Ansley Rebello", "portfolio", "resume", "developer portfolio", "full-stack developer", "Rahulresume"],
  authors: [{ name: "Ansley Rebello" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Rahul Resume - Professional Portfolio",
    description: "Explore Ansley Rebello's professional projects and experience.",
    url: "https://ansleyrebellome.vercel.aoo", // Replace with your actual URL
    siteName: "Ansley Resume",
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
