import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: [
    { rel: 'icon', url: '/favicon.ico' }
  ],
  title: "Notice",
  description: "notice",
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
      </body>
    </html>
  );
}
