import { profile } from "@/content/profile";
import {
  getSiteUrl,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/constants";

export function getPersonJsonLd() {
  const candidates: Array<string | undefined> = [
    profile.githubUrl,
    profile.linkedinUrl,
  ];
  const sameAs = candidates.filter((url): url is string => Boolean(url));

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.displayName,
    jobTitle: profile.role,
    address: {
      "@type": "PostalAddress",
      addressCountry: "CL",
    },
    description: SITE_DESCRIPTION,
    url: getSiteUrl(),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: profile.displayName,
    description: SITE_TAGLINE,
    url: getSiteUrl(),
    inLanguage: "es",
  };
}
