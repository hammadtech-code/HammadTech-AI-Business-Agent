import './globals.css';

export const metadata = {
  title: 'HammadTech Core',
  description: 'AI-Powered Business Dashboard for HammadTech',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
