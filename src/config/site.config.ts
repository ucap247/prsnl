import { SITE_URL, GOOGLE_SITE_VERIFICATION, BING_SITE_VERIFICATION } from 'astro:env/server';

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  socialLinks: string[];
  twitter?: {
    site: string;
    creator: string;
  };
  verification?: {
    google?: string;
    bing?: string;
  };
  /**
   * Branding configuration
   * Logo files: Replace SVGs in src/assets/branding/
   * Favicon: Replace in public/favicon.svg
   */
  branding: {
    /** Logo alt text for accessibility */
    logo: {
      alt: string;
    };
    /** Favicon path (lives in public/) */
    favicon: {
      svg: string;
    };
    /** Theme colors for manifest and browser UI */
    colors: {
      /** Browser toolbar color (hex) */
      themeColor: string;
      /** PWA splash screen background (hex) */
      backgroundColor: string;
    };
  };
}

const siteConfig: SiteConfig = {
  name: 'capaul.com',
  description: '',
  url: SITE_URL || 'https://capaul.com',
  ogImage: '/og-default.png',
  author: '',
  // Demo contact info - replace with your actual business details
  email: '',
  phone: '',
  address: {
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  },
  socialLinks: [
    'https://github.com/ucap247',
  ],
  // Twitter metadata - update with your actual handles or remove
  // twitter: {
  //   site: '@yourhandle',
  //   creator: '@yourhandle',
  // },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
    bing: BING_SITE_VERIFICATION,
  },
  // Branding: Logo files live in src/assets/branding/
  // Replace the SVG files there with your own branding
  branding: {
    logo: {
      alt: 'capaul.com',
    },
    favicon: {
      svg: '/favicon.svg',
    },
    colors: {
      themeColor: '#F94C10',
      backgroundColor: '#ffffff',
    },
  },
};

export default siteConfig;
