import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/favorites" prefetch={false}>Favorites</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
