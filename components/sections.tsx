import Image from "next/image";
import {
  asset,
  site,
  programs,
  impact,
  ways,
  campaigns,
  testimonials,
  stories,
  footerLinks,
} from "@/lib/site";
import { Container, Mark, PillLink, SectionHeader, TextLink, Progress, pillClass, Arrow } from "./ui";
import { AnnouncementBar, SiteHeader, DonateForm, CountUp, Faq, Slider } from "./client";
import { ProgramGlyph, WayGlyph, Sprout, Loop, LogoMark, Facebook, XLogo, Instagram, LinkedIn } from "./icons";
import { Flower, Scribble, ArrowDoodle, Blob } from "./decor";

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

/* Inset wrapper for the full-width rounded cards (hero, impact, bands, footer) */
function Inset({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`px-2 sm:px-4 lg:px-6 ${className}`}>{children}</div>;
}

/* ============ S0 + S1 + S2 — Announcement, Hero, Split promo ============ */

export function Hero() {
  return (
    <div id="top">
      <AnnouncementBar />
      <SiteHeader />
      <Inset>
        <section aria-labelledby="hero-title" className="relative isolate overflow-hidden rounded-t-[24px] bg-ink text-white">
          <Image
            src={asset("/images/hero.jpg")}
            alt="A volunteer handing baskets of fresh vegetables to a smiling mother and her two daughters outside their home"
            fill
            preload
            sizes="100vw"
            className="-z-20 object-cover object-[62%_center]"
          />
          {/* Contrast scrims: left for the headline, top for the nav */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(12,24,17,0.82)_0%,rgba(12,24,17,0.6)_32%,rgba(12,24,17,0.12)_62%,rgba(12,24,17,0)_80%),linear-gradient(180deg,rgba(12,24,17,0.45)_0%,rgba(12,24,17,0)_22%)]"
          />
          {/* On narrow screens the text sits over the people, so darken from below too */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(12,24,17,0)_30%,rgba(12,24,17,0.7)_78%)] md:hidden"
          />
          {/* Top padding leaves room for the fixed header that floats over the hero */}
          <Container className="flex min-h-[640px] flex-col pb-20 pt-28 sm:min-h-[760px] lg:min-h-[820px] lg:pb-[150px]">
            <div className="mt-auto max-w-[520px] pt-10">
              <h1 id="hero-title" className="text-[56px] leading-[0.95] tracking-[-0.005em] sm:text-[76px] lg:text-[88px]">
                Building <Mark>brighter</Mark>,<br />
                safe future.
              </h1>
              <p className="mt-6 max-w-[400px] text-[15px] leading-[1.6] text-white/85">
                We bring food, care and learning to families who need it most, and we keep coming back until life feels steady again.
              </p>
              <PillLink href="#donate" className="mt-8">
                Donate now
              </PillLink>
            </div>
          </Container>
          <Flower className="absolute bottom-[14%] left-[72%] hidden size-9 text-sun md:block" />
        </section>

        <div className="grid overflow-hidden rounded-b-[24px] md:grid-cols-2">
          {/* Yellow campaign panel */}
          <section aria-labelledby="promo-title" className="flex items-center justify-center bg-sun px-6 py-10 md:min-h-[304px] md:px-10">
            <div className="flex w-full max-w-[460px] items-center gap-6">
              <div className="relative size-[120px] shrink-0 overflow-hidden rounded-[14px] sm:size-[164px]">
                <Image src={asset("/images/food-aid.jpg")} alt="A woven bag packed with rice, vegetables, fruit and bread" fill sizes="164px" className="object-cover" />
              </div>
              <div className="min-w-0">
                <h2 id="promo-title" className="text-[24px] leading-[1.02] text-ink sm:text-[28px]">
                  Emergency food aid in South Africa
                </h2>
                <p className="num mt-3 text-[12px] leading-[1.5] text-ink/80">
                  <span className="font-semibold text-ink">Raised: $24,860</span>
                  <span className="mx-2 text-ink/40">/</span>
                  Goal: $40,000
                </p>
                <PillLink href="#campaigns" tone="forest" className="mt-5">
                  Learn more
                </PillLink>
              </div>
            </div>
          </section>

          {/* Pale green donation panel */}
          <section id="donate" aria-labelledby="donate-title" className="flex flex-col items-center justify-center bg-pale px-6 py-10 text-center md:min-h-[304px]">
            <h2 id="donate-title" className="mb-5 text-[24px] leading-none text-ink sm:text-[28px]">
              Make a donation today
            </h2>
            <DonateForm />
          </section>
        </div>
      </Inset>
    </div>
  );
}

/* ============ S3 — About ============ */

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="pt-24 lg:pt-[120px]">
      <Container className="grid items-center gap-12 md:grid-cols-[1fr_minmax(0,460px)] lg:gap-16">
        <div className="max-w-[520px]">
          <p className="eyebrow">Who we are</p>
          <h2 id="about-title" className="mt-4 text-[40px] leading-[1.02] text-ink sm:text-[52px] lg:text-[56px]">
            Real change happens <br className="hidden lg:block" />
            with <Mark>consistency</Mark>.
          </h2>
          <p className="mt-5 text-[15px] leading-[1.6] text-muted">
            One-off help fades. We stay with the same families and schools year after year, so meals, classes and checkups become something people can count on.
          </p>
          <ul className="mt-5 space-y-2.5 text-[14px] text-ink">
            {["Long-term partnerships with local leaders", "Support that grows as each community grows"].map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <span aria-hidden="true" className="mt-[9px] size-1.5 shrink-0 rounded-full bg-coral" />
                {t}
              </li>
            ))}
          </ul>
          <PillLink href="#programs" tone="ink" className="mt-8">
            Learn more
          </PillLink>
        </div>
        <div className="relative aspect-square w-full overflow-hidden rounded-[22px]">
          <Image
            src={asset("/images/about.jpg")}
            alt="A boy in a red school sweater writing in his exercise book at a wooden desk"
            fill
            sizes="(min-width: 768px) 460px, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}

/* ============ S4 — Programs ============ */

export function Programs() {
  return (
    <section id="programs" aria-labelledby="programs-title" className="pt-24 lg:pt-[120px]">
      <Container>
        <SectionHeader
          id="programs-title"
          title={
            <>
              Our programs are
              <br /> designed to <Mark>empower</Mark>
            </>
          }
          sub="Four programs, one promise: show up for the same communities until they no longer need us."
        />
      </Container>
      <Slider label="Our programs" className="mt-14">
        {programs.map((p) => (
          <li key={p.title} className="group w-[min(86vw,480px)] shrink-0 snap-start">
            <article className="h-full rounded-[20px] bg-white p-3.5 sm:p-4">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[12px] sm:aspect-auto sm:h-[245px]">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 768px) 480px, 100vw"
                  className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-center gap-3.5 px-1 pb-1 pt-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-coral text-white">
                  <ProgramGlyph name={p.icon} size={22} />
                </span>
                <h3 className="max-w-[170px] text-[19px] leading-[1.02] text-ink">{p.title}</h3>
                <dl className="num ml-auto text-right text-[12px] leading-[1.6] text-muted">
                  <div>
                    <dt className="inline">Raised: </dt>
                    <dd className="inline font-semibold text-ink">{p.raised}</dd>
                  </div>
                  <div>
                    <dt className="inline">Goal: </dt>
                    <dd className="inline">{p.goal}</dd>
                  </div>
                </dl>
              </div>
            </article>
          </li>
        ))}
      </Slider>
    </section>
  );
}

/* ============ S5 — Impact ============ */

const barHeights = ["lg:h-[200px]", "lg:h-[300px]", "lg:h-[468px]"];

export function Impact() {
  return (
    <Inset className="pt-24 lg:pt-[120px]">
      <section aria-labelledby="impact-title" className="relative isolate overflow-hidden rounded-[24px] bg-ink text-white">
        <Scribble className="pointer-events-none absolute -right-10 -top-24 -z-10 hidden w-[760px] text-[#1f4030] md:block" />
        <Container className="relative pt-16 lg:pb-[58px] lg:pt-[72px]">
          <div className="lg:grid lg:grid-cols-3 lg:grid-rows-[auto_300px] lg:gap-x-4">
            <div className="lg:col-span-2 lg:row-start-1 lg:pb-10">
              <p className="eyebrow !text-coral">Our impact</p>
              <h2 id="impact-title" className="mt-4 max-w-[480px] text-[40px] leading-[1.02] sm:text-[52px] lg:text-[56px]">
                Our growing impact shows how <Mark>consistent</Mark> care
              </h2>
              <p className="mt-5 max-w-[400px] text-[15px] leading-[1.6] text-white/70">
                Numbers from the last twelve months, counted family by family and child by child.
              </p>
              <ArrowDoodle className="mt-6 hidden w-12 rotate-[8deg] text-[#3d6b52] lg:block" />
            </div>

            {/* Desktop: three bars rising like a chart */}
            {impact.map((s, i) => (
              <div
                key={s.label}
                className={`hidden flex-col items-center justify-end rounded-[20px] bg-sage px-5 pb-7 text-center lg:flex ${barHeights[i]} ${
                  i === 2 ? "lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:self-end" : "lg:row-start-2 lg:self-end"
                }`}
              >
                <CountUp value={s.value} className="font-display text-[48px] font-extrabold leading-none text-white [font-variation-settings:'opsz'_72]" />
                <p className="mt-3 max-w-[180px] text-[13px] leading-[1.45] text-white/90">{s.label}</p>
              </div>
            ))}
          </div>
          <Flower className="absolute left-[53%] top-[150px] hidden size-10 text-sun lg:block" />
        </Container>

        {/* Smaller screens: the same bars as a swipeable row, still rising in height */}
        <Slider label="Our impact in numbers" controlsTone="white" className="mt-10 pb-14 lg:hidden">
          {impact.map((s, i) => (
            <li key={s.label} className="flex w-[min(72vw,280px)] shrink-0 snap-start items-end">
              <div
                className={`flex w-full flex-col items-center justify-end rounded-[20px] bg-sage px-5 pb-7 text-center ${
                  ["h-[200px]", "h-[240px]", "h-[280px]"][i]
                }`}
              >
                <CountUp value={s.value} className="font-display text-[44px] font-extrabold leading-none text-white [font-variation-settings:'opsz'_72]" />
                <p className="mt-3 max-w-[180px] text-[13px] leading-[1.45] text-white/90">{s.label}</p>
              </div>
            </li>
          ))}
        </Slider>
      </section>
    </Inset>
  );
}

/* ============ S6 — Ways to help ============ */

export function Ways() {
  return (
    <section id="ways" aria-labelledby="ways-title" className="pt-24 lg:pt-[120px]">
      <Container>
        <SectionHeader
          id="ways-title"
          title={
            <>
              Ways you can
              <br /> make a <Mark>difference</Mark>
            </>
          }
          sub="Give money, time or your voice. Every kind of help keeps a program running."
        />
      </Container>
      <Slider label="Ways you can help" className="mt-14">
        {ways.map((w) => (
          <li key={w.title} className="w-[min(78vw,320px)] shrink-0 snap-start">
            <article className="flex h-full flex-col items-center rounded-[20px] bg-white px-7 pb-11 pt-10 text-center transition-transform duration-500 ease-out-expo hover:-translate-y-1">
              <span className={`grid size-[76px] place-items-center rounded-[20px] text-white ${w.tone}`}>
                <WayGlyph name={w.icon} size={34} strokeWidth={1.7} />
              </span>
              <h3 className="mt-6 text-[20px] leading-none text-ink">{w.title}</h3>
              <p className="mt-3 max-w-[250px] text-[13px] leading-[1.6] text-muted">{w.text}</p>
            </article>
          </li>
        ))}
      </Slider>
    </section>
  );
}

/* ============ S7 — Campaigns ============ */

export function Campaigns() {
  return (
    <Inset className="pt-24 lg:pt-[120px]">
      <section id="campaigns" aria-labelledby="campaigns-title" className="rounded-[24px] bg-pale py-16 lg:py-[80px]">
        <Container>
          <SectionHeader
            id="campaigns-title"
            title={
              <>
                Building a better <Mark>tomorrow</Mark>
              </>
            }
            sub="Live campaigns with a clear goal and a deadline. Pick one and watch it fill up."
          />
        </Container>
        <Slider label="Live campaigns" className="mt-12">
            {campaigns.map((c) => {
              const pct = (c.raised / c.goal) * 100;
              return (
                <li key={c.title} className="group flex w-[min(80vw,330px)] shrink-0 snap-start flex-col rounded-[18px] bg-white p-2.5">
                  <div className="relative h-[220px] overflow-hidden rounded-[12px]">
                    <Image
                      src={c.image}
                      alt={c.alt}
                      fill
                      sizes="(min-width: 768px) 320px, 100vw"
                      className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-2.5 pb-3 pt-4">
                    <h3 className="font-sans text-[15px] font-bold normal-case leading-[1.35] text-ink [font-variation-settings:normal]">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-[1.5] text-muted">{c.text}</p>
                    <p className="num mt-4 flex justify-between text-[12px] text-muted">
                      <span>
                        Raised: <span className="font-semibold text-ink">{usd(c.raised)}</span>
                      </span>
                      <span>Goal: {usd(c.goal)}</span>
                    </p>
                    <div className="mt-2">
                      <Progress value={pct} label={`${Math.round(pct)}% of the ${usd(c.goal)} goal raised`} />
                    </div>
                    <div className="mt-5 flex justify-center border-t border-line pt-3.5">
                      <TextLink href="#donate" label={`Donate now to: ${c.title}`}>
                        Donate now
                      </TextLink>
                    </div>
                  </div>
                </li>
              );
            })}
        </Slider>
      </section>
    </Inset>
  );
}

/* ============ S8 — Big counter ============ */

export function Counter() {
  return (
    <section aria-labelledby="counter-title" className="pt-24 text-center lg:pt-[120px]">
      <Container>
        <SectionHeader
          id="counter-title"
          title={
            <>
              One action. One
              <br /> <Mark>number</Mark>. <Mark>Real</Mark> impact.
            </>
          }
          sub="Every gift, shift and shared post adds to one running total of lives changed."
        />
        <p className="mt-8">
          <CountUp
            value={19412}
            className="font-display text-[104px] font-extrabold leading-[0.9] tracking-[-0.01em] text-forest [font-variation-settings:'opsz'_72] sm:text-[150px] lg:text-[184px]"
          />
        </p>
        <p className="eyebrow mt-4">Lives changed for the better</p>
        <PillLink href="#donate" tone="ink" className="mt-7">
          Join them
        </PillLink>
      </Container>
    </section>
  );
}

/* ============ S9 — Testimonials ============ */

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="relative flex h-[260px] w-[320px] shrink-0 overflow-hidden rounded-[20px] bg-white sm:h-[300px] sm:w-[500px]">
      <div className="flex w-[56%] flex-col justify-between p-5 sm:w-[54%] sm:p-7">
        <blockquote className="font-display text-[17px] font-extrabold uppercase leading-[1.08] text-ink [font-variation-settings:'opsz'_72] sm:text-[21px]">
          “{t.quote}”
        </blockquote>
        <figcaption>
          <p className="text-[13px] font-bold text-ink">{t.name}</p>
          <p className="text-[12px] text-muted">{t.role}</p>
        </figcaption>
      </div>
      <div className="relative w-[46%]">
        <Blob className="absolute left-[2%] top-[18%] h-[74%] w-[96%] text-forest" />
        <Image
          src={t.image}
          alt={`Portrait of ${t.name}`}
          width={360}
          height={530}
          sizes="230px"
          className="absolute bottom-0 left-1/2 h-[88%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
        />
      </div>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="pt-24 lg:pt-[120px]">
      <Container>
        <SectionHeader
          id="testimonials-title"
          title={
            <>
              What people say
              <br /> about <Mark>our work</Mark>
            </>
          }
          sub="Volunteers, parents and donors on what showing up every month looks like."
        />
      </Container>
      <div className="group mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_4%,black_96%,transparent)] motion-reduce:overflow-x-auto">
        <ul className="flex w-max animate-marquee gap-6 pr-6group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none">
          {[...testimonials, ...testimonials].map((t, i) => (
            <li key={`${t.name}-${i}`} aria-hidden={i >= testimonials.length ? true : undefined}>
              <TestimonialCard t={t} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============ S10 — Consistency ============ */

export function Consistency() {
  const features = [
    { icon: Sprout, title: "Support that takes root", text: "The same teams return to the same villages every month." },
    { icon: Loop, title: "Progress you can follow", text: "Quarterly updates show exactly what your gift changed." },
  ];
  return (
    <section aria-labelledby="consistency-title" className="pt-24 lg:pt-[120px]">
      <Container className="grid items-center gap-12 md:grid-cols-[minmax(0,460px)_1fr] lg:gap-20">
        <div className="relative aspect-[460/480] w-full overflow-hidden rounded-[22px]">
          <Image
            src={asset("/images/consistency.jpg")}
            alt="Two smiling boys leaning out of the wooden window frame of their home"
            fill
            sizes="(min-width: 768px) 460px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="max-w-[440px]">
          <p className="eyebrow">Why it works</p>
          <h2 id="consistency-title" className="mt-4 text-[40px] leading-[1.02] text-ink sm:text-[52px] lg:text-[56px]">
            Consistency drives real <Mark>change</Mark>.
          </h2>
          <p className="mt-5 text-[15px] leading-[1.6] text-muted">
            Trust is built by turning up. When families know help will arrive, they can plan school, work and the future.
          </p>
          <ul className="mt-7 space-y-5">
            {features.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-4">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-coral text-white">
                  <Icon size={18} strokeWidth={2} />
                </span>
                <div>
                  <p className="text-[14px] font-bold leading-snug text-ink">{title}</p>
                  <p className="mt-0.5 text-[13px] leading-[1.55] text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

/* ============ S11 — Stories ============ */

export function Stories() {
  return (
    <section id="stories" aria-labelledby="stories-title" className="pt-24 lg:pt-[120px]">
      <Container>
        <SectionHeader
          id="stories-title"
          title={
            <>
              Stories from the
              <br /> {site.name} <Mark>community</Mark>
            </>
          }
          sub="Field notes from the people and places your support reaches."
        />
      </Container>
      <Slider label="Community stories" className="mt-12">
          {stories.map((s) => (
            <li key={s.title} className="group flex w-[min(80vw,330px)] shrink-0 snap-start flex-col rounded-[18px] bg-white p-2.5">
              <div className="relative h-[220px] overflow-hidden rounded-[12px]">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 768px) 320px, 100vw"
                  className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col px-2.5 pb-3 pt-5">
                <p className="eyebrow">
                  {s.category} <span aria-hidden="true">·</span> <time>{s.date}</time>
                </p>
                <h3 className="mt-2.5 text-[22px] leading-[1.02] text-ink">{s.title}</h3>
                <div className="mt-auto flex justify-center pt-7">
                  <TextLink href="#stories" label={`Read more: ${s.title}`}>
                    Read more
                  </TextLink>
                </div>
              </div>
            </li>
          ))}
      </Slider>
    </section>
  );
}

/* ============ S12 — FAQ ============ */

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="pt-24 lg:pt-[120px]">
      <Container className="grid gap-10 md:grid-cols-[minmax(0,380px)_1fr] lg:gap-24">
        <div>
          <h2 id="faq-title" className="text-[40px] leading-[1.02] text-ink sm:text-[52px] lg:text-[56px]">
            Questions
            <br /> and answers
          </h2>
          <p className="mt-5 max-w-[340px] text-[15px] leading-[1.6] text-muted">
            Quick answers about giving, volunteering and where the money goes.
          </p>
          <a href={`mailto:${site.email}`} className={pillClass("ink", "mt-8")}>
            Contact us
            <Arrow />
          </a>
        </div>
        <Faq />
      </Container>
    </section>
  );
}

/* ============ S13 — CTA ============ */

export function Cta() {
  return (
    <Inset className="pt-24 lg:pt-[120px]">
      <section aria-labelledby="cta-title" className="relative overflow-hidden rounded-[24px] bg-white px-6 py-16 text-center lg:py-[84px]">
        <span aria-hidden="true" className="absolute left-[21%] top-[44%] hidden size-8 rounded-full bg-coral md:block" />
        <Flower className="absolute left-[73%] top-[66%] hidden size-8 text-forest md:block" />
        <h2 id="cta-title" className="mx-auto max-w-[760px] text-[40px] leading-[1.02] text-ink sm:text-[52px] lg:text-[56px]">
          Want to make a difference <br className="hidden md:block" />
          in your <Mark>community</Mark>?
        </h2>
        <p className="mx-auto mt-4 max-w-[420px] text-[15px] leading-[1.6] text-muted">
          Start with one gift or one afternoon. We will show you exactly where it goes.
        </p>
        <PillLink href="#donate" className="mt-8 min-w-[200px]">
          Get involved
        </PillLink>
      </section>
    </Inset>
  );
}

/* ============ S14 — Footer ============ */

const socials = [
  { label: "Facebook", Icon: Facebook },
  { label: "X", Icon: XLogo },
  { label: "Instagram", Icon: Instagram },
  { label: "LinkedIn", Icon: LinkedIn },
];

export function Footer() {
  return (
    <Inset className="pb-2 pt-6 sm:pb-4 lg:pb-6">
      <footer className="rounded-[24px] bg-forest text-white">
        <Container className="pb-10 pt-14 lg:pt-[64px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_392px] lg:gap-16">
            <div>
              <nav aria-label="Footer" className="grid max-w-[480px] grid-cols-2 gap-8 sm:grid-cols-3">
                {footerLinks.map((col) => (
                  <div key={col.heading}>
                    <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-white">{col.heading}</p>
                    <ul className="mt-4 space-y-2.5">
                      {col.links.map((l) => (
                        <li key={l.label}>
                          <a href={l.href} className="text-[14px] text-white/75 transition-colors hover:text-white hover:underline">
                            {l.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
              <p className="mt-12 text-[12px] font-bold uppercase tracking-[0.08em] text-white">Follow us on social media</p>
              <ul className="mt-4 flex gap-2.5">
                {socials.map(({ label, Icon }) => (
                  <li key={label}>
                    {/* Concept site: no real social accounts exist, so these are labelled placeholders. */}
                    <span
                      role="img"
                      aria-label={`${label} (not available in this demo)`}
                      title={`${label} — not available in this demo`}
                      className="grid size-10 place-items-center rounded-[10px] bg-ink text-white/90"
                    >
                      <Icon size={18} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[20px] bg-ink px-8 py-9 text-center">
              <p className="font-display text-[36px] font-extrabold uppercase leading-[1.02] [font-variation-settings:'opsz'_72]">
                Make a donation
                <br /> make a change!
              </p>
              <p className="mx-auto mt-4 max-w-[280px] text-[13px] leading-[1.6] text-white/70">
                Your gift today puts food on a table and a child back in class tomorrow.
              </p>
              <PillLink href="#donate" className="mt-7 w-full">
                Donate now
              </PillLink>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <a href="#top" aria-label={`${site.name}, back to top`} className="flex items-center gap-3 text-sun">
              <LogoMark size={76} className="text-white" />
              <span className="font-display text-[72px] font-extrabold uppercase leading-[0.8] [font-variation-settings:'opsz'_72] sm:text-[96px]">
                {site.name}
              </span>
            </a>
            <div className="text-[12px] leading-[1.6] text-white/70 lg:text-right">
              <p>
                © {site.year} {site.name}. All rights reserved.
              </p>
              <p>Concept design — portfolio demo. Not a real charity; no donations are collected.</p>
            </div>
          </div>
        </Container>
      </footer>
    </Inset>
  );
}
