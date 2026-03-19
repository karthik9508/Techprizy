import Link from "next/link";
import { getCurrentUser } from "@/lib/supabase/server";

const products = [
  {
    icon: "CT",
    title: "Costing Tools",
    description: "Estimate costs and improve pricing decisions.",
    href: "https://cost.techprizy.com/dashboard",
  },
  {
    icon: "AA",
    title: "AI Accounting Tools",
    description: "Simplify accounting work with AI support.",
  },
  {
    icon: "IM",
    title: "Invoice Maker",
    description: "Create invoices with a faster workflow.",
  },
  {
    icon: "PA",
    title: "Business Productivity Apps",
    description: "Reduce manual work across daily operations.",
  },
  {
    icon: "ET",
    title: "Expense Tracker",
    description: "Track spending and organize business expenses.",
  },
  {
    icon: "RD",
    title: "Reports Dashboard",
    description: "View simple reports for finance and operations.",
  },
];

const strengths = [
  "Direct access",
  "Finance and operations focus",
  "Modern UI",
  "Simple workflows",
];

const metrics = [
  { value: "4+", label: "Core product categories" },
  { value: "24/7", label: "Online access model" },
  { value: "AI", label: "Accounting assistance" },
];

const points = [
  "Product-based business software.",
  "Built for pricing, finance, invoicing, and operations.",
  "Simple, modern, and easy to use.",
];

export default async function Home() {
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
                  ["Products", "#products"],
                  ["About", "#about"],
                  ["Blogs", "/blogs"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="rounded-full px-4 py-2 transition hover:bg-[var(--accent-faint)] hover:text-[var(--accent)]"
                  >
                    {label}
                  </Link>
                ))}
                <a
                  href="#products"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/40 bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] px-3 py-2.5 text-sm font-semibold text-blue-50 shadow-[0_18px_32px_rgba(37,99,235,0.24),inset_0_1px_0_rgba(255,255,255,0.2)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_38px_rgba(37,99,235,0.3),inset_0_1px_0_rgba(255,255,255,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-soft)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/16 ring-1 ring-white/18 backdrop-blur-sm transition group-hover:bg-white/22">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      className="h-4.5 w-4.5 fill-none stroke-current"
                    >
                      <path
                        d="M4.5 5.5h4.25v4.25H4.5zM11.25 5.5h4.25v4.25h-4.25zM4.5 12.25h4.25v4.25H4.5zM11.25 12.25h4.25v4.25h-4.25z"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="leading-none text-white">Tools</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/14 transition group-hover:translate-x-0.5 group-hover:bg-white/20">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      className="h-4 w-4 fill-none stroke-current"
                    >
                      <path
                        d="M4.5 10h11m-4-4 4 4-4 4"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </nav>
            </div>
          </header>
        </div>
      </div>

      <section className="relative isolate overflow-hidden pt-28 md:pt-32">
        <div className="hero-orb hero-orb-left" />
        <div className="hero-orb hero-orb-right" />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-14 md:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pb-28 lg:pt-20">
          <div className="space-y-8">
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-[var(--accent-soft)] bg-white/90 px-4 py-2 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--accent)]">
                Modern Product Company
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="reveal max-w-5xl text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl lg:text-[5.5rem]">
                Business tools for pricing, finance, invoicing, and operations.
              </h1>
              <p
                className="reveal max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl"
                style={{ animationDelay: "120ms" }}
              >
                TECHPRIZY builds simple software products businesses can use directly.
              </p>
            </div>

            <div
              className="reveal flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "220ms" }}
            >
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_30px_rgba(37,99,235,0.22)] transition hover:-translate-y-0.5"
              >
                Explore Products
              </a>
              <Link
                href={user ? "/dashboard" : "/auth"}
                className="inline-flex items-center justify-center rounded-full border border-[var(--accent-soft)] bg-white/85 px-6 py-3.5 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:bg-[var(--accent-faint)] hover:text-[var(--accent-strong)]"
              >
                {user ? "Open Dashboard" : "User Access"}
              </Link>
            </div>

            <div
              className="reveal grid gap-4 pt-2 sm:grid-cols-3"
              style={{ animationDelay: "320ms" }}
            >
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="modern-panel rounded-[1.5rem] px-5 py-5"
                >
                  <p className="text-3xl font-semibold tracking-[-0.05em]">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal relative" style={{ animationDelay: "140ms" }}>
            <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-[var(--accent-glow)] blur-3xl" />
            <div className="absolute bottom-2 right-0 h-36 w-36 rounded-full bg-[var(--accent-glow-soft)] blur-3xl" />

            <div className="modern-panel relative overflow-hidden rounded-[2rem] p-6 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--accent),var(--accent-strong))]" />
              <div className="rounded-[1.7rem] border border-[var(--line)] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--accent)]">
                      Product Focus
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                      Simple tools. Clear workflows.
                    </h2>
                  </div>
                  <div className="rounded-full border border-[var(--line-strong)] bg-white px-3 py-1 text-xs font-medium text-[var(--foreground)]">
                    Live Product Model
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  {strengths.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.2rem] border border-[var(--line)] bg-white px-4 py-4 text-sm leading-7 text-[var(--muted)] shadow-[0_10px_25px_rgba(15,23,42,0.04)]"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.2rem] border border-[var(--accent-soft)] bg-[var(--accent-faint)] px-5 py-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--accent)]">
                    Design
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    Clean layout with modern blue and green accents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="section-grid border-b border-[var(--line)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[var(--accent)]">
              Products
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              Tools for everyday business work.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              Simple tools with clear purpose.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => {
              const content = (
                <>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] text-sm font-semibold text-white shadow-[0_14px_24px_rgba(37,99,235,0.2)]">
                    {product.icon}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                    {product.description}
                  </p>
                </>
              );

              if (product.href) {
                return (
                  <a
                    key={product.title}
                    href={product.href}
                    className="group block product-card rounded-[1.8rem] p-6"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <article
                  key={product.title}
                  className="group product-card rounded-[1.8rem] p-6"
                >
                  {content}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="section-tint border-b border-[var(--line)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:py-24">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[var(--accent)]">
              About TECHPRIZY
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              Product-based business software.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--muted)]">
              TECHPRIZY builds focused tools for pricing, finance, invoicing, and operations.
            </p>
          </div>

          <div className="grid gap-4">
            {points.map((point, index) => (
              <div
                key={point}
                className="modern-panel flex gap-4 rounded-[1.6rem] p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] text-sm font-semibold text-white shadow-[0_16px_30px_rgba(37,99,235,0.22)]">
                  0{index + 1}
                </div>
                <p className="pt-1 text-base leading-8 text-[var(--muted)]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-grid">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
          <div className="modern-panel relative overflow-hidden rounded-[2.2rem] p-8 md:p-10 lg:p-12">
            <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[var(--accent-glow)] blur-3xl" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[var(--accent)]">
                  Contact
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl lg:text-6xl">
                  Explore TECHPRIZY products.
                </h2>
                <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
                  Contact us for product access or business enquiries.
                </p>
              </div>
              <a
                href="mailto:hello@techprizy.com"
                className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_30px_rgba(37,99,235,0.22)] transition hover:-translate-y-0.5"
              >
                info@techprizy.com
              </a>
            </div>
          </div>

          <footer className="mt-8 flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
            <p>TECHPRIZY</p>
            <p>Business tools for finance and operations.</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
