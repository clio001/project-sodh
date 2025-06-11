import { Inter } from 'next/font/google'
import './globals.css'
import Statbar from './components/Statbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Projct SODH',
  description: 'A project by the SODH collective',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}
      </body>
    </html>
  )
}
