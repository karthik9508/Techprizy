import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tech Prizy | Business Tools & SaaS Products",
  applicationName: "Tech Prizy",
  description:
    "Tech Prizy is a product-based company offering business tools like costing tools, AI accounting software, invoice makers, and productivity apps.",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tech Prizy",
  description:
    "Product-based company building business tools, costing software, AI accounting tools, invoice makers, and operational productivity apps.",
  url: "https://techprizy.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
