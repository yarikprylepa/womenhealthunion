"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Search, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { chapters } from "@/data/chapters";

export default function UniversitiesPage() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("All regions");

  const regions = [
    "All regions",
    ...Array.from(new Set(chapters.map((chapter) => chapter.region))),
  ];

  const filteredChapters = useMemo(() => {
    const normalizedQuery = query.toLowerCase().trim();

    return chapters.filter((chapter) => {
      const matchesQuery =
        chapter.university.toLowerCase().includes(normalizedQuery) ||
        chapter.city.toLowerCase().includes(normalizedQuery);

      const matchesRegion =
        region === "All regions" || chapter.region === region;

      return matchesQuery && matchesRegion;
    });
  }, [query, region]);

  return (
    <main className="min-h-screen bg-[#fffaf8] text-[#2c1c2b]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Women’s Health Union
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/universities" className="text-[#6b2748]">
            Universities
          </Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <Link
          href="/start-a-chapter"
          className="rounded-full bg-[#6b2748] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4f1935]"
        >
          Start a chapter
        </Link>
      </nav>

      <section className="border-y border-[#ead9e1] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9a4c6f]">
            University chapters
          </p>

          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
            Find your Women’s Health Union community.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#654d5d]">
            Explore student-led chapters across the UK. Find local events,
            connect with your community and help create change on campus.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-[1fr_220px]">
            <label className="flex items-center gap-3 rounded-2xl border border-[#e5cfd9] bg-[#fffafc] px-4 py-3 shadow-sm">
              <Search size={20} className="shrink-0 text-[#9a4c6f]" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="search"
                placeholder="Search by university or city"
                className="w-full bg-transparent text-sm outline-none placeholder:text-[#9c8592]"
              />
            </label>

            <label className="sr-only" htmlFor="region">
              Filter by region
            </label>

            <select
              id="region"
              value={region}
              onChange={(event) => setRegion(event.target.value)}
              className="rounded-2xl border border-[#e5cfd9] bg-[#fffafc] px-4 py-3 text-sm font-medium outline-none"
            >
              {regions.map((regionName) => (
                <option key={regionName}>{regionName}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-[#6b2748]">
              {filteredChapters.length}{" "}
              {filteredChapters.length === 1 ? "chapter" : "chapters"} found
            </p>
            <p className="mt-1 text-sm text-[#7b6472]">
              More universities will be added as the network grows.
            </p>
          </div>

          <Link
            href="/start-a-chapter"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#6b2748] hover:text-[#4f1935]"
          >
            Don’t see your university?
            <ArrowRight size={16} />
          </Link>
        </div>

        {filteredChapters.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredChapters.map((chapter) => (
              <Link
                key={chapter.slug}
                href={`/universities/${chapter.slug}`}
                className="group rounded-3xl border border-[#f0e1e7] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-bold ${chapter.colour}`}
                  >
                    {chapter.university
                      .split(" ")
                      .filter((word) => word !== "of" && word !== "the")
                      .map((word) => word[0])
                      .slice(-2)
                      .join("")}
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      chapter.status === "Active"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {chapter.status}
                  </span>
                </div>

                <h2 className="mt-6 text-xl font-bold">{chapter.university}</h2>

                <p className="mt-2 flex items-center gap-2 text-sm text-[#7b6472]">
                  <MapPin size={16} />
                  {chapter.city} · {chapter.region}
                </p>

                <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#654d5d]">
                  {chapter.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-[#f2e7eb] pt-4">
                  <span className="inline-flex items-center gap-2 text-sm text-[#7b6472]">
                    <Users size={16} />
                    {chapter.memberCount} members
                  </span>

                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#6b2748]">
                    View chapter
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-[#dcbfcf] bg-white px-6 py-14 text-center">
            <h2 className="text-xl font-bold">No chapters match that search.</h2>
            <p className="mt-3 text-[#654d5d]">
              Try a different university, city or region—or consider starting a
              new chapter.
            </p>
            <Link
              href="/start-a-chapter"
              className="mt-6 inline-flex rounded-full bg-[#6b2748] px-5 py-3 text-sm font-semibold text-white hover:bg-[#4f1935]"
            >
              Start a chapter
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}