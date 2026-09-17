import Link from "next/link";
import { ArrowLeft, CalendarDays, MapPin, Users } from "lucide-react";
import { notFound } from "next/navigation";
import { chapters } from "@/data/chapters";

type ChapterPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { slug } = await params;

  const chapter = chapters.find((item) => item.slug === slug);

  if (!chapter) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fffaf8] text-[#2c1c2b]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-lg font-bold tracking-tight">
          WHU
        </Link>

        <Link
          href="/universities"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#6b2748]"
        >
          <ArrowLeft size={16} />
          All universities
        </Link>
      </nav>

      <section className="border-y border-[#ead9e1] bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <span
            className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
              chapter.status === "Active"
                ? "bg-emerald-50 text-emerald-700"
                : "bg-amber-50 text-amber-700"
            }`}
          >
            {chapter.status}
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
            {chapter.university}
          </h1>

          <p className="mt-5 flex items-center gap-2 text-lg text-[#654d5d]">
            <MapPin size={20} className="text-[#9a4c6f]" />
            {chapter.city} · {chapter.region}
          </p>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#654d5d]">
            {chapter.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <button className="rounded-full bg-[#6b2748] px-6 py-3 font-semibold text-white hover:bg-[#4f1935]">
              Join the chapter
            </button>

            <Link
              href="/contact"
              className="rounded-full border border-[#6b2748] px-6 py-3 font-semibold text-[#6b2748] hover:bg-[#f7eaf0]"
            >
              Contact organisers
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-4xl gap-5 px-6 py-14 md:grid-cols-3">
        <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#f0e1e7]">
          <Users size={24} className="text-[#6b2748]" />
          <p className="mt-5 text-2xl font-bold">{chapter.memberCount}</p>
          <p className="mt-1 text-sm text-[#654d5d]">Student members</p>
        </article>

        <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#f0e1e7]">
          <CalendarDays size={24} className="text-[#6b2748]" />
          <p className="mt-5 text-2xl font-bold">Monthly</p>
          <p className="mt-1 text-sm text-[#654d5d]">Community events</p>
        </article>

        <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#f0e1e7]">
          <MapPin size={24} className="text-[#6b2748]" />
          <p className="mt-5 text-2xl font-bold">{chapter.city}</p>
          <p className="mt-1 text-sm text-[#654d5d]">Chapter location</p>
        </article>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-3xl bg-[#f1dbe5] p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9a4c6f]">
            Next event
          </p>
          <h2 className="mt-3 text-2xl font-bold">
            Welcome and community meet-up
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-[#654d5d]">
            A relaxed student event to meet the committee, find out about the
            chapter and help shape upcoming activities. Event details will be
            managed through the national dashboard later.
          </p>
        </div>
      </section>
    </main>
  );
}