import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <h1 className="h1-bold">hello world</h1>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
