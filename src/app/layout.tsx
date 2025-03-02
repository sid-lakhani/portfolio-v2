import "./globals.css";
import { constructMetadata } from "@/lib/metadata";
import { Cascadia, poppins } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme/theme-providers";

export const metadata = constructMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${Cascadia.variable} ${poppins.variable} antialiased bg-white dark:bg-black transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
