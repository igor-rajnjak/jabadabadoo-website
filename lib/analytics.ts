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
    console.log("[GA4] Tracking phone_call_click", { phoneNumber, location });
    window.gtag("event", "phone_call_click", {
      event_category: "Contact",
      event_label: phoneNumber,
      location: location,
      value: 1,
    });
  } else {
    console.warn("[GA4] gtag not available");
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
    console.log("[GA4] Tracking cta_click", { ctaText, location });
    window.gtag("event", "cta_click", {
      event_category: "Engagement",
      event_label: ctaText,
      location: location,
      value: 1,
    });
  } else {
    console.warn("[GA4] gtag not available");
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

