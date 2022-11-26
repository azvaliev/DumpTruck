import "src/styles/globals.scss";
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={`dark:bg-black p-8 w-full h-full ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
