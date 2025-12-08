"use client";

import { useState } from "react";

export default function PricingComparison() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-3xl shadow-lg border-4 border-secondary p-8 my-12">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-3xl font-bold text-primary">📊 Uporedna Tabela Paketa</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-red-500 transition-colors"
        >
          {isOpen ? "Sakrij" : "Prikaži Tabelu"}
        </button>
      </div>
      <p className="text-center text-text/70 mb-6 italic">
        💬 Preko 100 zadovoljnih porodica u poslednje 3 godine preporučuje naše pakete!
      </p>
      
      {isOpen && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-primary to-pink text-white">
                <th className="p-4 text-left font-bold">Stavka</th>
                <th className="p-4 text-center font-bold">Standard</th>
                <th className="p-4 text-center font-bold">Premium</th>
                <th className="p-4 text-center font-bold">All-Inclusive</th>
                <th className="p-4 text-center font-bold">Ultra</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100">
                <td colSpan={5} className="p-3 font-bold text-text">💰 CENA I TRAJANJE</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="p-3 font-bold">Cena</td>
                <td className="p-3 text-center font-bold">15.990 RSD</td>
                <td className="p-3 text-center font-bold">22.990 RSD</td>
                <td className="p-3 text-center font-bold">33.990 RSD</td>
                <td className="p-3 text-center font-bold">44.990 RSD</td>
              </tr>
              <tr>
                <td className="p-3">Trajanje</td>
                <td className="p-3 text-center">2h</td>
                <td className="p-3 text-center">2,5h</td>
                <td className="p-3 text-center">2,5h</td>
                <td className="p-3 text-center">3h</td>
              </tr>
              
              <tr className="bg-gray-100">
                <td colSpan={5} className="p-3 font-bold text-text">🎭 ZABAVA I ANIMACIJA</td>
              </tr>
              <tr>
                <td className="p-3">Aktivni animatori</td>
                <td className="p-3 text-center">✅</td>
                <td className="p-3 text-center">✅</td>
                <td className="p-3 text-center">✅</td>
                <td className="p-3 text-center">✅</td>
              </tr>
              <tr>
                <td className="p-3">Pinjata</td>
                <td className="p-3 text-center">✅</td>
                <td className="p-3 text-center">✅</td>
                <td className="p-3 text-center">✅</td>
                <td className="p-3 text-center">✅</td>
              </tr>
              <tr>
                <td className="p-3">Disko žurka</td>
                <td className="p-3 text-center">✅</td>
                <td className="p-3 text-center">✅</td>
                <td className="p-3 text-center">✅</td>
                <td className="p-3 text-center">✅</td>
              </tr>
              
              <tr className="bg-gray-100">
                <td colSpan={5} className="p-3 font-bold text-text">🎨 PERSONALIZACIJA</td>
              </tr>
              <tr>
                <td className="p-3">Maskenbal / Crtanje</td>
                <td className="p-3 text-center">Jedno</td>
                <td className="p-3 text-center">Oba! 🎨</td>
                <td className="p-3 text-center">Oba! 🎨</td>
                <td className="p-3 text-center">Oba! 🎨</td>
              </tr>
              <tr>
                <td className="p-3">Medalje</td>
                <td className="p-3 text-center">❌</td>
                <td className="p-3 text-center">✅</td>
                <td className="p-3 text-center">✅</td>
                <td className="p-3 text-center">✅</td>
              </tr>
              
              <tr className="bg-gray-100">
                <td colSpan={5} className="p-3 font-bold text-text">🥤 HRANA</td>
              </tr>
              <tr className="bg-yellow-50">
                <td className="p-3">🍕 Mini pizza</td>
                <td className="p-3 text-center">❌</td>
                <td className="p-3 text-center">✅</td>
                <td className="p-3 text-center">✅</td>
                <td className="p-3 text-center">✅</td>
              </tr>
              <tr className="bg-yellow-50">
                <td className="p-3">🧁 Slatki sto</td>
                <td className="p-3 text-center">❌</td>
                <td className="p-3 text-center">❌</td>
                <td className="p-3 text-center">✅</td>
                <td className="p-3 text-center">✅</td>
              </tr>
              <tr className="bg-yellow-50">
                <td className="p-3">🍰 Torta</td>
                <td className="p-3 text-center">❌</td>
                <td className="p-3 text-center">❌</td>
                <td className="p-3 text-center">✅</td>
                <td className="p-3 text-center">✅</td>
              </tr>
              
              <tr className="bg-gray-100">
                <td colSpan={5} className="p-3 font-bold text-text">🎁 POKLONI</td>
              </tr>
              <tr>
                <td className="p-3">Unikatan poklon</td>
                <td className="p-3 text-center">❌</td>
                <td className="p-3 text-center">✅</td>
                <td className="p-3 text-center">✅</td>
                <td className="p-3 text-center">✅</td>
              </tr>
              <tr>
                <td className="p-3">Poklon kartica</td>
                <td className="p-3 text-center">2h</td>
                <td className="p-3 text-center">4h</td>
                <td className="p-3 text-center">4h</td>
                <td className="p-3 text-center">4h</td>
              </tr>
              
              <tr className="bg-gray-100">
                <td colSpan={5} className="p-3 font-bold text-text">💎 PREMIUM EKSKLUZIVA</td>
              </tr>
              <tr className="bg-green-50">
                <td className="p-3">🎭 Show program</td>
                <td className="p-3 text-center">❌</td>
                <td className="p-3 text-center">❌</td>
                <td className="p-3 text-center">❌</td>
                <td className="p-3 text-center">⭐</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

