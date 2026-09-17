import Link from "next/link";
import { ArrowRight, HeartPulse, MapPin, Users } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Find your university",
    text: "Discover Women’s Health Union chapters and communities near you.",
  },
  {
    icon: Users,
    title: "Join the movement",
    text: "Connect with students passionate about improving women’s health.",
  },
  {
    icon: HeartPulse,
    title: "Create change",
    text: "Access events, campaigns, resources and national opportunities.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf8] text-[#2c1c2b]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Women’s Health Union
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/universities">Universities</Link>
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

      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 md:grid-cols-2 md:items-center md:pt-24">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#9a4c6f]">
            A national student network
          </p>

          <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Improving women’s health, one university at a time.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-[#654d5d]">
            Women’s Health Union connects students, university societies and
            partners to support education, advocacy and meaningful change.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/universities"
              className="inline-flex items-center gap-2 rounded-full bg-[#6b2748] px-6 py-3 font-semibold text-white transition hover:bg-[#4f1935]"
            >
              Find your university
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/start-a-chapter"
              className="rounded-full border border-[#6b2748] px-6 py-3 font-semibold text-[#6b2748] transition hover:bg-[#f7eaf0]"
            >
              Start a chapter
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] bg-[#f1dbe5] p-8 md:p-12">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-[#9a4c6f]">
              Nationwide, student-led, inclusive
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#fff4f7] p-5">
                <p className="text-3xl font-bold">20+</p>
                <p className="mt-1 text-sm text-[#654d5d]">
                  University chapters
                </p>
              </div>
              <div className="rounded-2xl bg-[#fff4f7] p-5">
                <p className="text-3xl font-bold">1</p>
                <p className="mt-1 text-sm text-[#654d5d]">
                  Shared national community
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-6 text-[#654d5d]">
              A place to find your local community, share resources and help
              shape better conversations around women’s health.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#ead9e1] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9a4c6f]">
            Get involved
          </p>

          <div className="mt-4 grid gap-6 md:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-3xl border border-[#f0e1e7] bg-[#fffafc] p-7"
              >
                <Icon className="text-[#6b2748]" size={28} />
                <h2 className="mt-5 text-xl font-bold">{title}</h2>
                <p className="mt-3 leading-7 text-[#654d5d]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}