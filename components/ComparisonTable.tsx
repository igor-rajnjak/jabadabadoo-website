"use client";

import Link from "next/link";
import { trackComparisonClick } from "@/lib/analytics";
import type { VsCompetitor } from "@/lib/vsCompetitors";

interface ComparisonTableProps {
  competitors: VsCompetitor[];
  basePath: string;
}

export default function ComparisonTable({ competitors, basePath }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border-2 border-secondary shadow-xl bg-white">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-primary to-pink text-white">
            <th className="p-4 text-left font-bold">#</th>
            <th className="p-4 text-left font-bold">Konkurent</th>
            <th className="p-4 text-left font-bold">Poređenje</th>
          </tr>
        </thead>
        <tbody>
          {competitors.map((c, i) => (
            <tr
              key={c.slug}
              className={
                i % 2 === 0 ? "bg-white" : "bg-gray-50 border-b border-gray-200 last:border-b-0"
              }
            >
              <td className="p-4 font-semibold text-text/60">{i + 1}</td>
              <td className="p-4 font-semibold text-text">{c.name}</td>
              <td className="p-4">
                <Link
                  href={`${basePath}/${c.slug}`}
                  onClick={() => trackComparisonClick(c.name, c.slug)}
                  className="inline-flex items-center gap-2 text-primary font-bold hover:text-red-500 transition-colors"
                >
                  {c.name} ili Jabadabadoo →
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
