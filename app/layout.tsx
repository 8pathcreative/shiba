import { Inter } from 'next/font/google';
import './globals.css'; // Ensure global styles are imported
import { Navigation } from '@/components/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Shiba Inu Breeders & Rescues | Find Your Perfect Companion',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}