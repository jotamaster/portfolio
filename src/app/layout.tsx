import { AppFooter } from "@/components/layout/app-footer";
import { AppHeader } from "@/components/layout/app-header";
import { PageBackground } from "@/components/layout/page-background";
import { SkipLink } from "@/components/layout/skip-link";
import { profile } from "@/content/profile";
import {
  getSiteUrl,
  MAIN_CONTENT_ID,
  SITE_DESCRIPTION,
  SITE_NAME,
} from "@/lib/constants";
import {
  getPersonJsonLd,
  getWebSiteJsonLd,
} from "@/lib/structured-data";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE_NAME} · ${profile.displayName}`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: profile.displayName }],
  creator: profile.displayName,
  keywords: [
    "Jean Hernández",
    "Desarrollador Full Stack",
    "JavaScript",
    "Nuxt.js",
    "Node.js",
    "Moleculer.js",
    "Chile",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: SITE_NAME,
    title: `${SITE_NAME} · ${profile.displayName}`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} · ${profile.displayName}`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#070b10",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [getPersonJsonLd(), getWebSiteJsonLd()];

  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <PageBackground />
        <SkipLink />
        <AppHeader />
        <div id={MAIN_CONTENT_ID} className="flex-1">
          {children}
        </div>
        <AppFooter />
      </body>
    </html>
  );
}
