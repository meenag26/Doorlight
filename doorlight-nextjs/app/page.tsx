type Book = {
  title: string;
  subtitle: string;
  author: string;
  category: string;
  year: string;
  description: string;
  accent: string;
  spine: string;
  href: string;
};

const books: Book[] = [
  {
    title: "Between Worlds",
    subtitle: "Essays on Culture and Belonging",
    author: "Marilyn R. Gardner",
    category: "Essays / Memoir",
    year: "2014",
    description:
      "A thoughtful essay collection on culture, migration, belonging, and the lived experience of life between places.",
    accent: "from-amber-100 via-orange-50 to-white",
    spine: "from-amber-700 to-orange-700",
    href: "https://www.amazon.com/Between-Worlds-Marilyn-R-Gardner/dp/0983865388",
  },
  {
    title: "Worlds Apart",
    subtitle: "A Third Culture Kid's Journey",
    author: "Marilyn Gardner",
    category: "Memoir",
    year: "2018",
    description:
      "A personal journey through identity, displacement, home, and the complexity of growing up between cultures.",
    accent: "from-sky-100 via-cyan-50 to-white",
    spine: "from-sky-700 to-cyan-700",
    href: "https://www.amazon.com/Worlds-Apart-Third-Culture-Journey/dp/0998223328",
  },
  {
    title: "This Is My Father's World",
    subtitle: "Featuring Edward R. Brown",
    author: "Edward R. Brown",
    category: "Faith / Creation Care",
    year: "Doorlight title",
    description:
      "A faith-centered work inviting readers to consider creation, stewardship, and the responsibilities of Christian witness in the world.",
    accent: "from-emerald-100 via-green-50 to-white",
    spine: "from-emerald-700 to-green-700",
    href: "https://www.amazon.com/Our-Fathers-World-Mobilizing-Creation/dp/0998223336",
  },
  {
    title: "Where Is My Sister?",
    subtitle: "",
    author: "Pauline A. Brown",
    category: "Children's / Family Story",
    year: "2020",
    description:
      "A family-centered title that invites younger readers into story, wonder, and the search for connection.",
    accent: "from-rose-100 via-pink-50 to-white",
    spine: "from-rose-700 to-pink-700",
    href: "https://www.amazon.com/Where-my-Sister-Pauline-Brown/dp/0998223352",
  },
  {
    title: "Cat Tales",
    subtitle: "",
    author: "Pauline A. Brown",
    category: "Children's Fiction",
    year: "Doorlight title",
    description:
      "A warm, imaginative children's title with a playful spirit and an inviting sense of story.",
    accent: "from-violet-100 via-fuchsia-50 to-white",
    spine: "from-violet-700 to-fuchsia-700",
    href: "https://www.amazon.com/Cat-Tales-Pauline-Brown/dp/0998223379",
  },
];

const nav = ["Home", "Books", "Authors", "About", "Contact"];

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-stone-500">Independent Press</div>
            <div className="text-2xl font-semibold tracking-tight">Doorlight Publications</div>
          </div>
          <nav className="hidden gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-stone-700 transition hover:text-stone-950"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#books"
            className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            Browse Titles
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(120,113,108,0.10),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.10),_transparent_30%)]" />
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
            <div className="relative z-10">
              <div className="mb-5 inline-flex items-center rounded-full border border-stone-300 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-stone-600 shadow-sm">
                Books of faith, place, culture, and story
              </div>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-stone-950 md:text-6xl">
                A publishing home for thoughtful books that stay with the reader.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
                Doorlight Publications presents books shaped by faith, memory, belonging, creation care,
                and stories for both adults and children. This design offers a warm, literary front door with
                room to grow into a full press website.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#books"
                  className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-stone-300/40 transition hover:-translate-y-0.5"
                >
                  View Featured Books
                </a>
                <a
                  href="#about"
                  className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-400 hover:bg-stone-100"
                >
                  About the Press
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  ["5", "Featured titles"],
                  ["3", "Authors represented"],
                  ["1", "Clean literary brand"],
                ].map(([num, label]) => (
                  <div key={label} className="rounded-2xl border border-stone-200 bg-white/85 p-5 shadow-sm">
                    <div className="text-2xl font-semibold">{num}</div>
                    <div className="mt-1 text-sm text-stone-600">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-center">
              <div className="relative h-[460px] w-full max-w-[460px]">
                <BookStackCard />
              </div>
            </div>
          </div>
        </section>

        <section id="books" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-stone-500">Featured Catalog</div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Books currently highlighted</h2>
            </div>
            <p className="max-w-2xl text-stone-600">
              A mix of memoir, essays, Christian thought, and children&apos;s literature presented in a format that could easily expand into author pages, individual book pages, and a store.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {books.map((book) => (
              <article
                key={book.title}
                className="group overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`bg-gradient-to-br ${book.accent} p-6`}>
                  <div className="flex items-start gap-5">
                    <BookMockup title={book.title} author={book.author} spine={book.spine} />
                    <div className="min-w-0 pt-1">
                      <div className="inline-flex rounded-full border border-stone-300/70 bg-white/80 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-stone-600">
                        {book.category}
                      </div>
                      <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-stone-950">
                        {book.title}
                      </h3>
                      {book.subtitle ? (
                        <p className="mt-2 text-sm leading-6 text-stone-700">{book.subtitle}</p>
                      ) : null}
                      <p className="mt-3 text-sm font-medium text-stone-800">by {book.author}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-7 text-stone-700">{book.description}</p>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <span className="text-xs uppercase tracking-[0.22em] text-stone-500">{book.year}</span>
                    <a
                      href={book.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-800 transition hover:border-stone-400 hover:bg-stone-100"
                    >
                      View Book
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="authors" className="border-y border-stone-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-3 lg:px-8">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-stone-500">Authors</div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">Writers shaping the catalog</h2>
            </div>
            <div className="lg:col-span-2 grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Marilyn R. Gardner",
                  blurb: "Essays and memoir rooted in culture, belonging, migration, and life between worlds.",
                },
                {
                  name: "Edward R. Brown",
                  blurb: "Faith-centered writing on stewardship, witness, and the created world.",
                },
                {
                  name: "Pauline A. Brown",
                  blurb: "Children's and family-friendly storytelling marked by warmth and imagination.",
                },
              ].map((author) => (
                <div key={author.name} className="rounded-[28px] border border-stone-200 bg-stone-50 p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-900 text-sm font-semibold text-white">
                    {author.name
                      .split(" ")
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((p) => p[0])
                      .join("")}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight">{author.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-700">{author.blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[32px] bg-stone-900 p-8 text-stone-50 shadow-xl">
              <div className="text-sm uppercase tracking-[0.3em] text-stone-300">About Doorlight</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">A small press with a literary and thoughtful feel</h2>
              <p className="mt-5 text-sm leading-7 text-stone-300">
                This concept centers the books first: generous white space, warm neutrals, clear typography, and a structure that works equally well for memoir, theology, essays, and children&apos;s literature.
              </p>
              <p className="mt-4 text-sm leading-7 text-stone-300">
                It can be expanded with submission guidelines, author pages, event listings, endorsements, a press story, newsletter sign-up, and direct ordering.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "What this homepage includes",
                  text: "Hero section, featured catalog, author spotlights, press description, and a clear call to action.",
                },
                {
                  title: "Brand direction",
                  text: "Clean, literary, warm, and uncluttered—designed to feel credible without looking corporate.",
                },
                {
                  title: "Best next additions",
                  text: "Individual book detail pages, author bios, testimonials, ordering links, and a submissions or contact form.",
                },
                {
                  title: "Built for growth",
                  text: "The book data is already structured in arrays, so the site can scale into a larger catalog quickly.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 pb-20 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[36px] border border-stone-200 bg-gradient-to-br from-stone-100 via-white to-amber-50 p-8 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="text-sm uppercase tracking-[0.3em] text-stone-500">Next Step</div>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">Turn this concept into a live press website</h2>
                <p className="mt-4 max-w-2xl text-stone-700 leading-7">
                  This design is ready to refine with real cover images, book blurbs, endorsements, ordering buttons, and your preferred contact details.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:info@doorlightpublications.com"
                  className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Contact the Press
                </a>
                <a
                  href="#home"
                  className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-800 transition hover:bg-stone-100"
                >
                  Back to Top
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-stone-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>Doorlight Publications — website concept</div>
          <div>Designed to showcase books, authors, and a growing catalog.</div>
        </div>
      </footer>
    </div>
  );
}

function BookMockup({ title, author, spine }: { title: string; author: string; spine: string }) {
  const initials = title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <div className="relative h-52 w-36 shrink-0">
      <div className={`absolute inset-y-0 left-0 w-3 rounded-l-xl bg-gradient-to-b ${spine}`} />
      <div className="absolute inset-0 left-2 rounded-2xl border border-stone-300 bg-white shadow-xl">
        <div className="flex h-full flex-col justify-between p-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Doorlight</div>
            <div className="mt-3 text-xl font-semibold leading-tight tracking-tight text-stone-950">{initials}</div>
          </div>
          <div>
            <div className="line-clamp-3 text-xs font-medium leading-5 text-stone-800">{title}</div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-stone-500">{author}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookStackCard() {
  return (
    <div className="relative h-full w-full rounded-[36px] border border-stone-200 bg-white p-8 shadow-2xl">
      <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-amber-100 blur-2xl" />
      <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-stone-200 blur-2xl" />
      <div className="relative h-full overflow-hidden rounded-[28px] bg-gradient-to-br from-stone-100 via-white to-stone-50 p-6">
        <div className="text-sm uppercase tracking-[0.3em] text-stone-500">Featured Shelf</div>
        <div className="mt-3 text-2xl font-semibold tracking-tight">A catalog with depth and warmth</div>
        <div className="mt-10 flex items-end gap-3">
          <TallSpine label="Between Worlds" className="h-52 from-amber-700 to-orange-700" />
          <TallSpine label="Worlds Apart" className="h-60 from-sky-700 to-cyan-700" />
          <TallSpine label="Father's World" className="h-56 from-emerald-700 to-green-700" />
          <TallSpine label="Where Is My Sister?" className="h-44 from-rose-700 to-pink-700" />
          <TallSpine label="Cat Tales" className="h-40 from-violet-700 to-fuchsia-700" />
        </div>
        <p className="mt-8 max-w-sm text-sm leading-7 text-stone-700">
          Designed with the feel of an independent literary press: quiet confidence, readable spacing, and books displayed as the main event.
        </p>
      </div>
    </div>
  );
}

function TallSpine({ label, className }: { label: string; className: string }) {
  return (
    <div className={`relative w-12 rounded-t-xl bg-gradient-to-b ${className} shadow-lg`}>
      <div className="absolute inset-x-0 bottom-0 top-0 rounded-t-xl border border-black/10" />
      <div className="absolute bottom-3 left-1/2 w-[120px] -translate-x-1/2 -rotate-90 text-[10px] font-medium uppercase tracking-[0.2em] text-white/90">
        {label}
      </div>
    </div>
  );
}
