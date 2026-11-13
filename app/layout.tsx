import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MBA Admission Enquiry | Find Your MBA College",
  description:
    "Explore MBA admission options and submit an enquiry to request information from an admission counsellor.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
