import React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "Gaya KACI - Portfolio",
  description: "Portfolio de Gaya KACI, étudiant en cybersécurité à l'ESGI Paris. Découvrez mes compétences, certifications et projets en sécurité informatique.",
  keywords: [
    "cybersécurité",
    "étudiant",
    "ESGI",
    "Paris",
    "alternance",
    "portfolio",
    "sécurité informatique",
    "développement",
    "DevOps",
    "cloud"
  ],
  authors: [{ name: "Gaya KACI" }],
  creator: "Gaya KACI",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://gayakaci-portfolio.vercel.app",
    title: "Gaya KACI - Portfolio",
    description: "Portfolio de Gaya KACI, étudiant en cybersécurité à l'ESGI Paris. Découvrez mes compétences, certifications et projets en sécurité informatique.",
    siteName: "Gaya KACI Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaya KACI - Portfolio",
    description: "Portfolio de Gaya KACI, étudiant en cybersécurité à l'ESGI Paris.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo_light.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo_light.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo_light.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo_light.svg" />
        <link rel="manifest" href="/logo_light.svg" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={poppins.className}>
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
  )
} 