"use client";

import { useEffect } from "react";
import { trackPhoneCall } from "@/lib/analytics";
import { CONTACT } from "@/lib/constants";

export default function BlogPhoneTracking() {
  useEffect(() => {
    // Add click tracking to all phone links in blog posts
    const phoneLinks = document.querySelectorAll(".blog-phone-link");
    
    phoneLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const phoneNumber = (e.currentTarget as HTMLElement).getAttribute("data-phone") || CONTACT.phone;
        trackPhoneCall(phoneNumber, "Blog Post Content");
      });
    });

    // Cleanup
    return () => {
      phoneLinks.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return null;
}
