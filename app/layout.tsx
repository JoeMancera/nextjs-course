import { Metadata } from 'next'
import { montserrat } from './ui/fonts';
import './ui/global.css'

// more info about metadata: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}
        <footer
          className="flex justify-center items-center h-16 bg-gray-800 text-white">
          <p className="text-sm">
            &copy; 2022 Acme Inc. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
