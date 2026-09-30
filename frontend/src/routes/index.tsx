import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarDays,
  Compass,
  Facebook,
  Instagram,
  MapPin,
  Menu,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

import alpineHiker from "@/assets/alpine-hiker.jpg";
import balloon from "@/assets/cappadocia-balloon.jpg";
import maldives from "@/assets/maldives-boardwalk.jpg";
import island from "@/assets/tropical-island.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Traver — Discover Your Next Destination" },
      { name: "description", content: "Find unforgettable destinations, handpicked tours, and easy travel planning with Traver." },
      { property: "og:title", content: "Traver — Discover Your Next Destination" },
      { property: "og:description", content: "Find unforgettable destinations, handpicked tours, and easy travel planning with Traver." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const destinations = [
  { name: "Karangan Beach", place: "Lombok, Indonesia", price: "$200", rating: "4.8", image: maldives },
  { name: "Kepunuh Beach", place: "Bali, Indonesia", price: "$250", rating: "4.5", image: island },
  { name: "Kucubung Cove", place: "Nusa Penida, Indonesia", price: "$150", rating: "4.9", image: island },
  { name: "Lumut Island", place: "Natuna, Indonesia", price: "$300", rating: "4.6", image: island },
  { name: "Curuti Beach", place: "Pontianak, Indonesia", price: "$250", rating: "4.8", image: maldives },
  { name: "Kapuas Beach", place: "Semarang, Indonesia", price: "$350", rating: "4.7", image: island },
];

const features = [
  { icon: Compass, title: "Lots of Choices", copy: "Handpicked destinations for every kind of traveler." },
  { icon: Users, title: "Best Tour Guide", copy: "Friendly local experts make every trip memorable." },
  { icon: ShieldCheck, title: "Easy Booking", copy: "Book your perfect place in just a few simple steps." },
];

function Brand() {
  return (
    <a href="#home" className="flex items-center gap-2 font-bold text-foreground" aria-label="Traver home">
      <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground"><Send className="size-4" /></span>
      <span>Traver</span>
    </a>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="home" className="overflow-hidden bg-background text-foreground">
      <header className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 lg:px-8">
        <Brand />
        <nav className="hidden items-center gap-9 text-sm font-medium md:flex" aria-label="Main navigation">
          <a href="#home" className="hover:text-primary">Home</a><a href="#about" className="hover:text-primary">About</a>
          <a href="#destinations" className="hover:text-primary">Destinations</a><a href="#features" className="hover:text-primary">Tours</a>
          <a href="#stories" className="hover:text-primary">Blog</a>
        </nav>
        <div className="hidden gap-2 md:flex"><Button variant="outline" size="sm">Sign Up</Button><Button size="sm">Login</Button></div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </header>
      {menuOpen && <nav className="border-y border-border px-5 py-4 md:hidden" aria-label="Mobile navigation"><div className="flex flex-col gap-4 text-sm font-semibold"><a href="#about">About</a><a href="#destinations">Destinations</a><a href="#features">Tours</a><a href="#stories">Blog</a></div></nav>}

      <section className="mx-auto grid min-h-[640px] max-w-6xl items-center gap-12 px-5 py-12 lg:grid-cols-[1fr_0.92fr] lg:px-8 lg:py-20">
        <div className="relative z-10 max-w-xl">
          <p className="eyebrow"><Send className="size-4" /> Explore the world <span /></p>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.06] sm:text-6xl lg:text-7xl">Discover The Best Destinations In The World</h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">Let’s find your dream destination. We’ll recommend beautiful places and a flexible trip that fits the way you love to travel.</p>
          <form className="search-bar mt-9" onSubmit={(event) => event.preventDefault()}>
            <label className="search-field"><MapPin /><span><b>Location</b><small>Where are you going?</small></span><input aria-label="Location" placeholder="Bali" /></label>
            <label className="search-field"><CalendarDays /><span><b>Select Date</b><small>Choose your date</small></span><input aria-label="Travel date" type="date" /></label>
            <Button type="submit">Get Started <ArrowRight className="size-4" /></Button>
          </form>
        </div>
        <div className="hero-collage" aria-label="Featured travel destinations">
          <img src={balloon} alt="Hot air balloons over Cappadocia" className="hero-img hero-img-a" width={768} height={1024} />
          <img src={maldives} alt="Traveler walking along a Maldives boardwalk" className="hero-img hero-img-b" width={768} height={1024} />
          <img src={island} alt="Tropical Indonesian island" className="hero-img hero-img-c" width={1200} height={800} />
          <img src={alpineHiker} alt="Hiker on an alpine summit" className="hero-img hero-img-d" width={768} height={1024} />
          <div className="floating-note note-left"><strong>100+ Destinations</strong><span>More than 100 travelers trust us</span></div>
          <div className="floating-note note-right"><strong>100%</strong><span>Verified</span></div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl items-center gap-16 px-5 py-24 lg:grid-cols-2 lg:px-8">
        <div className="about-collage">
          <img src={island} alt="Turquoise tropical coast" className="about-wide" loading="lazy" width={1200} height={800} />
          <img src={maldives} alt="Island resort" className="about-tall" loading="lazy" width={768} height={1024} />
          <img src={balloon} alt="Cappadocia at sunrise" className="about-front" loading="lazy" width={768} height={1024} />
        </div>
        <div>
          <p className="eyebrow">About <span /></p>
          <h2 className="section-title">We Recommend Beautiful Destinations Every Month</h2>
          <p className="section-copy">Discover new places every month, from peaceful coastlines to unforgettable adventures, selected with care by our travel experts.</p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[['2000+', 'Our Explorers'], ['100+', 'Destinations'], ['20+', 'Years Experience']].map(([number, label]) => <div className="stat" key={label}><b>{number}</b><span>{label}</span></div>)}
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[0.8fr_2fr] lg:px-8">
        <div><p className="eyebrow">What we give <span /></p><h2 className="section-title">Best Features For You</h2><p className="section-copy">We provide the thoughtful details that make every journey feel effortless.</p></div>
        <div className="grid gap-5 sm:grid-cols-3">{features.map(({ icon: Icon, title, copy }) => <article className="feature-card" key={title}><div className="feature-icon"><Icon /></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section id="destinations" className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="destination-intro">
          <p className="eyebrow justify-center">Top destination <span /></p>
          <h2 className="section-title mx-auto max-w-xl text-center">Let’s Explore Your Dream Destination Here!</h2>
          <p className="section-copy mx-auto max-w-2xl text-center">Browse our most loved escapes and choose the view you want to wake up to.</p>
          <form className="trip-bar" onSubmit={(event) => event.preventDefault()}>
            <label><MapPin /><span><b>Location</b><small>Where are you going?</small></span></label>
            <label><Users /><span><b>Person</b><small>How many people?</small></span></label>
            <label><CalendarDays /><span><b>Check In</b><small>03 August 2026</small></span></label>
            <label><CalendarDays /><span><b>Check Out</b><small>14 August 2026</small></span></label>
            <Button type="submit">Get Started</Button>
          </form>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{destinations.map((destination, index) => <article className="destination-card" key={destination.name}>
          <div className="relative"><img src={destination.image} alt={destination.name} loading="lazy" width={index === 1 || index === 2 || index === 3 || index === 5 ? 1200 : 768} height={index === 1 || index === 2 || index === 3 || index === 5 ? 800 : 1024} /><span className="rating"><Star className="size-3 fill-current" /> {destination.rating}</span></div>
          <div className="p-4"><div className="flex items-center justify-between gap-3"><h3>{destination.name}</h3><b className="price">{destination.price}</b></div><p><MapPin className="size-3" /> {destination.place}</p></div>
        </article>)}</div>
        <div className="mt-10 text-center"><Button>View More</Button></div>
      </section>

      <section id="stories" className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div><p className="eyebrow">What they say <span /></p><h2 className="section-title">What Our Customers Say About Us</h2><div className="testimonial"><div className="flex items-center gap-3"><span className="avatar">PT</span><span><b>Park Tayeng</b><small>Travel Enthusiast</small></span></div><p>“This platform is very helpful because there are so many beautiful destinations and the planning is wonderfully easy.”</p><div className="mt-4 flex text-star">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="size-4 fill-current" />)}</div></div></div>
        <div className="story-mosaic"><img src={maldives} alt="Traveler looking over a clear tropical lagoon" loading="lazy" width={768} height={1024} /></div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8"><div className="cta-band"><Sparkles className="mx-auto size-7 text-primary" /><h2>Let’s Not Miss The 50% Discount &amp;<br /> Explore The Beauty of the World</h2><p>We have many special offers especially for you.</p><Button>Get Started</Button></div></section>

      <footer className="border-t border-border bg-footer"><div className="mx-auto max-w-6xl px-5 py-14 lg:px-8"><div className="flex flex-col justify-between gap-7 border-b border-border pb-9 sm:flex-row sm:items-center"><Brand /><form className="newsletter" onSubmit={(event) => event.preventDefault()}><input aria-label="Email address" type="email" placeholder="Your email" required /><Button size="icon" aria-label="Subscribe"><Send className="size-4" /></Button></form></div><div className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-4"><FooterLinks title="About" links={["About Us", "Features", "News", "Careers"]} /><FooterLinks title="Company" links={["Our Team", "Partner with Us", "FAQ", "Blog"]} /><FooterLinks title="Support" links={["Account", "Support Center", "Feedback", "Contact Us"]} /><div><h3>Social Media</h3><div className="mt-4 flex gap-3 text-primary"><Instagram /><Facebook /><Send /></div></div></div><p className="text-xs text-muted-foreground">© 2026 Traver. Copyright and all rights reserved.</p></div></footer>
    </main>
  );
}

function FooterLinks({ title, links }: { title: string; links: string[] }) {
  return <div><h3>{title}</h3><ul className="mt-4 space-y-3 text-sm text-muted-foreground">{links.map((link) => <li key={link}><a href="#home" className="hover:text-primary">{link}</a></li>)}</ul></div>;
}
