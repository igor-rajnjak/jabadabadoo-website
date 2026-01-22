"use client";

import { useState } from "react";
import { PACKAGES, CONTACT } from "@/lib/constants";
import { trackFormSubmission, trackPhoneCall } from "@/lib/analytics";
import emailjs from "@emailjs/browser";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split("T")[0],
    package: "",
    email: "",
    phone: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only digits, spaces, +, -, (, ) for phone formatting
    const value = e.target.value.replace(/[^\d\s\+\-\(\)]/g, '');
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Track form submission FIRST
      trackFormSubmission("reservation_form", formData.package);
      
      // Try EmailJS first (if configured)
      const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const emailjsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
        // Initialize EmailJS with public key
        emailjs.init({
          publicKey: emailjsPublicKey,
        });
        
        // Use EmailJS to send email directly
        // Template parameters must match the template variables in EmailJS
        const templateParams = {
          date: formData.date,
          package: formData.package,
          email: formData.email,
          phone: formData.phone || "Nije unet",
          comment: formData.comment || "Nema komentara",
        };

        const response = await emailjs.send(
          emailjsServiceId,
          emailjsTemplateId,
          templateParams
        );
        
        if (response.status !== 200) {
          throw new Error(`EmailJS error: ${response.text}`);
        }

        setSubmitStatus("success");
        setFormData({
          date: new Date().toISOString().split("T")[0],
          package: "",
          email: "",
          phone: "",
          comment: "",
        });
      } else {
        // Fallback to mailto if EmailJS is not configured
        const emailBody = `
Nova rezervacija rođendana

Datum: ${formData.date}
Paket: ${formData.package}
Email: ${formData.email}
Telefon: ${formData.phone || "Nije unet"}
Komentar: ${formData.comment || "Nema komentara"}
        `.trim();

        window.location.href = `mailto:${CONTACT.email}?subject=Nova rezervacija rođendana - ${formData.package}&body=${encodeURIComponent(emailBody)}`;
        
        // Show success message even with mailto (user needs to send manually)
        setSubmitStatus("success");
        setFormData({
          date: new Date().toISOString().split("T")[0],
          package: "",
          email: "",
          phone: "",
          comment: "",
        });
      }
    } catch (error) {
      // EmailJS error - fallback to mailto
      const emailBody = `
Nova rezervacija rođendana

Datum: ${formData.date}
Paket: ${formData.package}
Email: ${formData.email}
Telefon: ${formData.phone || "Nije unet"}
Komentar: ${formData.comment || "Nema komentara"}
      `.trim();

      window.location.href = `mailto:${CONTACT.email}?subject=Nova rezervacija rođendana - ${formData.package}&body=${encodeURIComponent(emailBody)}`;
      setSubmitStatus("success");
      setFormData({
        date: new Date().toISOString().split("T")[0],
        package: "",
        email: "",
        phone: "",
        comment: "",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="overflow-hidden">
        <label htmlFor="date" className="block font-bold mb-3 text-text text-lg">
          Datum rođendana <span className="text-primary">*</span>
        </label>
        <input
          type="date"
          id="date"
          required
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          min={new Date().toISOString().split("T")[0]}
          className="w-full max-w-full px-6 py-4 rounded-2xl border-4 border-secondary focus:border-primary outline-none text-text text-lg box-border"
          style={{ 
            width: '100%',
            maxWidth: '100%',
            WebkitAppearance: 'none',
            appearance: 'none'
          }}
        />
      </div>

      <div>
        <label htmlFor="package" className="block font-bold mb-3 text-text text-lg">
          Paket <span className="text-primary">*</span>
        </label>
        <div className="relative">
          <select
            id="package"
            required
            value={formData.package}
            onChange={(e) => setFormData({ ...formData, package: e.target.value })}
            className="w-full px-6 py-4 pr-12 rounded-2xl border-4 border-secondary focus:border-primary outline-none text-text text-lg appearance-none bg-white cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1.5rem center',
              backgroundSize: '12px',
            }}
          >
            <option value="">Izaberite paket</option>
            {PACKAGES.map((pkg) => (
              <option key={pkg.id} value={pkg.name}>
                {pkg.name} - {pkg.price} RSD ({pkg.duration})
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block font-bold mb-3 text-text text-lg">
          Email <span className="text-primary">*</span>
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-6 py-4 rounded-2xl border-4 border-secondary focus:border-primary outline-none text-text text-lg"
          placeholder="vas@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block font-bold mb-3 text-text text-lg">
          Telefon (opciono)
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={handlePhoneChange}
          className="w-full px-6 py-4 rounded-2xl border-4 border-secondary focus:border-primary outline-none text-text text-lg"
          placeholder="0661234567"
          pattern="[\d\s\+\-\(\)]+"
          title="Unesite samo cifre, razmake i znakove +, -, ( )"
        />
      </div>

      <div>
        <label htmlFor="comment" className="block font-bold mb-3 text-text text-lg">
          Komentar/Poruka (opciono)
        </label>
        <textarea
          id="comment"
          value={formData.comment}
          onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          rows={5}
          className="w-full px-6 py-4 rounded-2xl border-4 border-secondary focus:border-primary outline-none text-text text-lg"
          placeholder="Dodatne informacije, teme, alergije, itd."
        />
      </div>

      {submitStatus === "success" && (
        <div className="bg-green-100 border-4 border-green-500 text-green-800 p-4 rounded-2xl">
          <p className="font-bold">Hvala! Kontaktiraćemo vas uskoro za potvrdu rezervacije.</p>
          <p className="text-sm mt-2">Ili pozovite nas odmah: <a href={`tel:${CONTACT.phoneFormatted}`} onClick={() => trackPhoneCall(CONTACT.phone, "ReservationForm Success")} className="underline font-bold">{CONTACT.phone}</a></p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-100 border-4 border-red-500 text-red-800 p-4 rounded-2xl">
          <p className="font-bold">Greška pri slanju. Molimo pokušajte ponovo ili pozovite nas: <a href={`tel:${CONTACT.phoneFormatted}`} onClick={() => trackPhoneCall(CONTACT.phone, "ReservationForm Error")} className="underline font-bold">{CONTACT.phone}</a></p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white py-4 rounded-full font-bold text-lg hover:bg-red-500 transition-all hover:-translate-y-1 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Šalje se..." : "Pošalji Rezervaciju"}
      </button>
    </form>
  );
}

