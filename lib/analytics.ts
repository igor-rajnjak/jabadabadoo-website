// Google Analytics 4 Event Tracking Helper

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

// Track phone call clicks
export const trackPhoneCall = (phoneNumber: string, location: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "phone_call_click", {
      event_category: "Contact",
      event_label: phoneNumber,
      location: location,
      value: 1,
    });
  }
};

// Track form submission
export const trackFormSubmission = (formType: string, packageName?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "form_submission", {
      event_category: "Conversion",
      event_label: formType,
      package: packageName || "N/A",
      value: 1,
    });
  }
};

// Track CTA button click
export const trackCTAClick = (ctaText: string, location: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "cta_click", {
      event_category: "Engagement",
      event_label: ctaText,
      location: location,
      value: 1,
    });
  }
};

// Track package view
export const trackPackageView = (packageName: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "view_package", {
      event_category: "Pricing",
      event_label: packageName,
      value: 1,
    });
  }
};

// Track package button click
export const trackPackageClick = (packageName: string, location: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "package_click", {
      event_category: "Conversion",
      event_label: packageName,
      location: location,
      value: 1,
    });
  }
};

// Track scroll depth (optional - for engagement)
export const trackScrollDepth = (depth: number) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "scroll_depth", {
      event_category: "Engagement",
      event_label: `${depth}%`,
      value: depth,
    });
  }
};

// Track navigation link click
export const trackNavClick = (linkText: string, linkHref: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "nav_click", {
      event_category: "Navigation",
      event_label: linkText,
      link_url: linkHref,
      value: 1,
    });
  }
};

// Track generic link click (social media, external links, etc.)
export const trackLinkClick = (linkText: string, linkUrl: string, location: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "link_click", {
      event_category: "Engagement",
      event_label: linkText,
      link_url: linkUrl,
      location: location,
      value: 1,
    });
  }
};

// Track WhatsApp clicks as conversion (same as phone calls)
export const trackWhatsAppClick = (location: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "phone_call_click", {
      event_category: "Contact",
      event_label: "WhatsApp",
      location: location,
      value: 1,
    });
  }
};

// Track logo click
export const trackLogoClick = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "logo_click", {
      event_category: "Navigation",
      event_label: "Logo",
      value: 1,
    });
  }
};

