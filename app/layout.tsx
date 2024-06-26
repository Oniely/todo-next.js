import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Toaster } from "@/components/ui/toaster";

const font = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Messiest Todo",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${font.className}`}>
        <main className="max-w-2xl mx-auto min-h-dvh pt-10 pb-16 px-4 md:px-0 relative">
          <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="crud-themes"
          >
          <ModeToggle />
            {children}
          </ThemeProvider>
        </main>
        <Toaster />
      </body>
		</html>
	);
}
