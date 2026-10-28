import Link from "next/link";

const helpfulLinks = [
  { href: "/", label: "Project Home" },
  { href: "/about", label: "About Sobha Parkcity" },
  { href: "/price", label: "Price Information" },
  { href: "/contact", label: "Contact Us" },
];

export default function NotFound() {
  return (
    <main className="flex min-h-[55vh] items-center justify-center bg-white px-4 py-16">
      <section
        aria-labelledby="not-found-heading"
        className="mx-auto max-w-2xl text-center"
      >
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
          Error 404
        </p>
        <h1
          id="not-found-heading"
          className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl"
        >
          This page could not be found
        </h1>
        <p className="mt-4 leading-7 text-gray-600">
          The address may be outdated, or the page may have moved. Continue to
          the Sobha Parkcity project home page or choose one of these helpful
          pages.
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-dark"
        >
          Visit Project Home
        </Link>
        <nav aria-label="Helpful pages" className="mt-8">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {helpfulLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-medium text-gray-700 underline decoration-primary underline-offset-4 hover:text-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </main>
  );
}
