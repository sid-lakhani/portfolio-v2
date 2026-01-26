import "./globals.css";
import { constructMetadata } from "@/lib/metadata";
import { poppins } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme/theme-providers";

export const metadata = constructMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          defer
          src="https://analytics.sidlakhani.in/script.js"
          data-website-id="27ac714c-4691-431d-8eb1-1828743b7be2"
        ></script>
      </head>
      <body
        className={`${poppins.variable} antialiased bg-gradient-to-tl from-gray-300 to-white dark:from-gray-900 dark:to-black transition-colors duration-300`}
      >
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
