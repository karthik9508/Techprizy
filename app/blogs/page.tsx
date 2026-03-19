import Link from "next/link";
import { getCurrentUser } from "@/lib/supabase/server";

const blogs = [
  {
    title: "How Costing Tools Improve Pricing Accuracy",
    summary: "How better costing improves pricing and margins.",
    category: "Costing",
    readTime: "4 min read",
  },
  {
    title: "Why AI Accounting Tools Matter For Modern Teams",
    summary: "How AI can reduce accounting effort and improve clarity.",
    category: "Accounting",
    readTime: "5 min read",
  },
  {
    title: "Invoice Workflows That Save Time For Businesses",
    summary: "Simple invoicing workflows that save time.",
    category: "Invoicing",
    readTime: "3 min read",
  },
];

export default async function BlogsPage() {
  const user = await getCurrentUser();

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <header className="reveal rounded-[1.4rem] border border-white/60 bg-white/78 px-5 py-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] text-sm font-semibold text-white shadow-[0_16px_30px_rgba(37,99,235,0.28)]">
                  T
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-[var(--accent)]">
                    TECHPRIZY
                  </p>
                  <p className="text-sm text-[var(--muted)]">
                    Business Tools & SaaS Products
                  </p>
                </div>
              </div>

              <nav className="flex flex-wrap items-center gap-2 text-sm text-[var(--muted)]">
                {[
                  ["Home", "/"],
                  ["Products", "/#products"],
                  ["About", "/#about"],
                  ["Contact", "/#contact"],
                ].map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="rounded-full px-4 py-2 transition hover:bg-[var(--accent-faint)] hover:text-[var(--accent)]"
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href={user ? "/dashboard" : "/auth"}
                  className="inline-flex items-center rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] px-5 py-2.5 font-medium text-white shadow-[0_16px_28px_rgba(37,99,235,0.2)] transition hover:brightness-105"
                >
                  {user ? "Dashboard" : "Sign In"}
                </Link>
              </nav>
            </div>
          </header>
        </div>
      </div>

      <section className="relative isolate overflow-hidden pt-28 md:pt-32">
        <div className="hero-orb hero-orb-left" />
        <div className="hero-orb hero-orb-right" />

        <div className="mx-auto max-w-7xl px-6 pb-12 pt-14 md:px-10 lg:pb-16 lg:pt-20">
          <div className="max-w-4xl space-y-6">
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-[var(--accent-soft)] bg-white/90 px-4 py-2 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--accent)]">
                TECHPRIZY Blogs
              </span>
            </div>

            <h1 className="reveal max-w-5xl text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
              Insights for costing, accounting, and invoicing.
            </h1>
            <p className="reveal max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
              Short articles around TECHPRIZY products and workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="section-grid border-y border-[var(--line)]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.title}
                className="group modern-card rounded-[1.8rem] p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="rounded-full border border-[var(--accent-soft)] bg-[var(--accent-faint)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
                    {blog.category}
                  </div>
                  <span className="text-xs text-[var(--muted)]">{blog.readTime}</span>
                </div>
                <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">
                  {blog.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                  {blog.summary}
                </p>
                <div className="mt-8 flex items-center justify-between border-t border-[var(--line)] pt-5 text-sm">
                  <span className="text-[var(--muted)]">Editorial preview</span>
                  <span className="font-medium text-[var(--accent-strong)] transition group-hover:translate-x-1">
                    Read article
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
