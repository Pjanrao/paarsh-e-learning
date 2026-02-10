import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import "react-phone-input-2/lib/style.css";

export const metadata: Metadata = {
  title: {
    default: "Paarsh E-Learning | Placement-Oriented Courses",
    template: "%s | Paarsh E-Learning",
  },
  description:
    "Placement-oriented e-learning platform offering industry-ready courses, mentorship, and real-world projects.",

  metadataBase: new URL("https://paarshelearning.com/"),

  openGraph: {
    title: "Paarsh E-Learning | Placement-Oriented Courses",
    description:
      "Placement-oriented e-learning platform offering industry-ready courses, mentorship, and real-world projects.",
    url: "https://paarshelearning.com/",
    siteName: "Paarsh E-Learning",
    images: [
      {
        url: "/parshlearning.png",
        width: 1200,
        height: 630,
        alt: "Paarsh E-Learning",
      },
    ],
    type: "website",
  },

  icons: {
    icon: "/app/favicon.ico",
    apple: "/logo-wide.webp",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn('min-h-screen bg-background font-body antialiased')}
      >
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
