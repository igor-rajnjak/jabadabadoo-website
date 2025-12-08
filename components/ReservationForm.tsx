"use client";

import { useState } from "react";
import { PACKAGES, CONTACT } from "@/lib/constants";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration - user needs to set up their service
      // For now, we'll use a simple approach
      const emailBody = `
Nova rezervacija rođendana

Datum: ${formData.date}
Paket: ${formData.package}
Email: ${formData.email}
Telefon: ${formData.phone || "Nije unet"}
Komentar: ${formData.comment || "Nema komentara"}
      `.trim();

      // Simple mailto fallback (user can configure EmailJS later)
      window.location.href = `mailto:${CONTACT.email}?subject=Nova rezervacija rođendana - ${formData.package}&body=${encodeURIComponent(emailBody)}`;

      setSubmitStatus("success");
      setFormData({
        date: new Date().toISOString().split("T")[0],
        package: "",
        email: "",
        phone: "",
        comment: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
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
          className="w-full px-6 py-4 rounded-2xl border-4 border-secondary focus:border-primary outline-none text-text text-lg"
        />
      </div>

      <div>
        <label htmlFor="package" className="block font-bold mb-3 text-text text-lg">
          Paket <span className="text-primary">*</span>
        </label>
        <select
          id="package"
          required
          value={formData.package}
          onChange={(e) => setFormData({ ...formData, package: e.target.value })}
          className="w-full px-6 py-4 rounded-2xl border-4 border-secondary focus:border-primary outline-none text-text text-lg"
        >
          <option value="">Izaberite paket</option>
          {PACKAGES.map((pkg) => (
            <option key={pkg.id} value={pkg.name}>
              {pkg.name} - {pkg.price} RSD ({pkg.duration})
            </option>
          ))}
        </select>
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
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-6 py-4 rounded-2xl border-4 border-secondary focus:border-primary outline-none text-text text-lg"
          placeholder="0661234567"
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
          <p className="text-sm mt-2">Ili pozovite nas odmah: <a href={`tel:${CONTACT.phoneFormatted}`} className="underline font-bold">{CONTACT.phone}</a></p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-100 border-4 border-red-500 text-red-800 p-4 rounded-2xl">
          <p className="font-bold">Greška pri slanju. Molimo pokušajte ponovo ili pozovite nas: <a href={`tel:${CONTACT.phoneFormatted}`} className="underline font-bold">{CONTACT.phone}</a></p>
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

