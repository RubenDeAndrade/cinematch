import './globals.css';
import { Raleway } from 'next/font/google';
import type { Metadata } from 'next';
import { TRPCProvider } from '~/app/_trpc/provider';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: 'tRPC Prisma Starter',
  description: 'A starter project with tRPC, Prisma, and Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={raleway.className}>
      <body className="antialiased">
        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  );
}
