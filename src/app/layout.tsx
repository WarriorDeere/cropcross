import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CropCross - Deine Züchtung zum Erfolg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}