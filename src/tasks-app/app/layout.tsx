import type { Metadata } from "next";
import Providers from "./providers";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Todoist Clone",
  description: "A simple to-do list inspired by Todoist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className="w-full h-screen">
          {/*         <aside>
          Sidebar
        </aside> */}
          <main className="h-full bg-neutral-800 text-white">{children}</main>
        </body>
      </html>
    </Providers>
  );
}
