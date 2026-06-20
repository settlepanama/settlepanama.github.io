import { useEffect, useMemo, useState } from 'react';
import {
  Globe2,
  Menu,
  Moon,
  Send,
  MessageCircle,
  Phone,
  X,
  ArrowRight,
  Sun
} from 'lucide-react';
import { assets } from './lib/assets.js';

const pages = ['landing', 'about', 'pricing', 'contact', 'templates'];
const landingSections = ['location', 'living', 'relocate', 'consultation'];

const services = [
  'Residency / E-Cédula',
  'Driving & Vehicle Setup',
  'Bank accounts',
  'Medical care / insurance',
  'Home services install/support',
  'Renting or buying support',
  'Pet import assistance',
  'Property care and home watch'
];

const features = [
  {
    title: 'Consultation',
    text: 'Understand what you need to know before moving, from timelines and documents to daily-life expectations.'
  },
  {
    title: 'Legal Paperwork',
    text: 'Local hands in Panama to help you move legal papers, appointments and official trámites forward.'
  },
  {
    title: 'Personalized Move',
    text: 'Moving packages tailored to your needs, whether you are retiring, relocating, buying or settling long-term.'
  }
];

const packages = [
  {
    eyebrow: 'Starter',
    title: 'Consultation',
    price: 'From $150',
    text: 'Best for clarity before committing to a full move plan.',
    items: ['Relocation roadmap', 'Document checklist', 'Area guidance']
  },
  {
    eyebrow: 'Most requested',
    title: 'Settle-in package',
    price: 'Custom',
    text: 'For residents who want practical support across the full move.',
    items: ['Paperwork coordination', 'Home setup support', 'Local appointments'],
    featured: true
  },
  {
    eyebrow: 'Ongoing',
    title: 'Property support',
    price: 'Monthly',
    text: 'For property owners who need a trusted local point of contact.',
    items: ['Home watch', 'Vendor coordination', 'Maintenance follow-up']
  }
];

function useHashRouter() {
  const initial = () => {
    const hash = window.location.hash.replace('#', '') || 'landing';
    return pages.includes(hash) ? hash : 'landing';
  };

  const [page, setPageState] = useState(initial);

  const showPage = (nextPage, { updateHash = true, scrollTop = true } = {}) => {
    const target = pages.includes(nextPage) ? nextPage : 'landing';
    setPageState(target);

    if (updateHash) {
      window.history.replaceState(null, '', target === 'landing' ? '#landing' : `#${target}`);
    }

    if (scrollTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollLandingSection = (sectionId, { updateHash = true } = {}) => {
    setPageState('landing');

    if (updateHash) {
      window.history.replaceState(null, '', `#${sectionId}`);
    }

    window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') || 'landing';

      if (pages.includes(hash)) {
        showPage(hash, { updateHash: false, scrollTop: true });
        return;
      }

      if (landingSections.includes(hash)) {
        scrollLandingSection(hash, { updateHash: false });
        return;
      }

      showPage('landing');
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { page, showPage, scrollLandingSection };
}

function Header({ page, showPage }) {
  const [open, setOpen] = useState(false);
  const navItems = [
    ['about', 'About'],
    ['pricing', 'Pricing'],
    ['contact', 'Contact']
  ];

  const go = (target) => {
    setOpen(false);
    showPage(target);
  };

  return (
    <div className="sticky top-0 z-50 max-h-[108px] w-full bg-warm/90 backdrop-blur-xl">
      <div className="flex min-h-[26px] items-center justify-center border-b border-[rgba(174,160,140,.22)] px-4 py-1 text-center text-[11px] text-ink/60 before:mx-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gold/70 before:content-[''] after:mx-2 after:h-1.5 after:w-1.5 after:rounded-full after:bg-gold/70 after:content-['']">
        Relocation, settlement and property support for International Residents in Panama.
      </div>

      <header className="w-full px-6 pb-1.5 pt-2">
        <div className={`mx-auto grid min-h-[42px] max-w-site items-center gap-4 lg:grid-cols-[1fr_auto_1fr] ${open ? 'grid-cols-1' : 'grid-cols-[1fr_auto]'}`}>
          <button className="w-fit" type="button" onClick={() => go('landing')} aria-label="Settle Panama landing page">
            <img className="block w-32 drop-shadow-sm transition hover:-translate-y-0.5 md:w-32" src={assets.logo} alt="Settle Panama" />
          </button>

          <button
            className="grid h-10 w-10 place-items-center justify-self-end rounded-full border border-[rgba(174,160,140,.34)] bg-white/50 text-navy lg:hidden"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Open navigation"
          >
            <Menu size={20} />
          </button>

          <nav className={`${open ? 'flex' : 'hidden'} flex-wrap items-center justify-start gap-3 lg:flex lg:justify-center`}>
            {navItems.map(([target, label]) => (
              <button
                key={target}
                className={`nav-button relative rounded-full px-3 py-2 pb-3 text-[13px] font-extrabold text-ink/60 transition hover:-translate-y-px hover:text-navy ${page === target ? 'active text-navy' : ''}`}
                type="button"
                onClick={() => go(target)}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className={`${open ? 'flex' : 'hidden'} items-center justify-start gap-3 lg:flex lg:justify-end`}>
            <button className="grid h-8 w-8 place-items-center rounded-full text-navy transition hover:-translate-y-px hover:bg-taupe/15 hover:text-gold" type="button" aria-label="Language">
              <Globe2 size={17} />
            </button>
            <button className="grid h-8 w-8 place-items-center rounded-full text-navy transition hover:-translate-y-px hover:bg-taupe/15 hover:text-gold" type="button" aria-label="Theme">
              <Moon size={17} />
            </button>
            <button className="text-[13px] font-black text-navy" type="button" onClick={() => go('contact')}>
              Sign in <span className="inline-block transition group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </header>

      <div className="nav-wave h-4 w-full overflow-hidden">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" aria-hidden="true">
          <path className="nav-wave-soft" d="M0 22 C 120 32, 220 10, 340 22 S 560 34, 700 22 S 930 8, 1080 22 S 1320 34, 1440 20" />
          <path className="nav-wave-main" d="M0 28 C 140 12, 230 14, 360 28 S 590 42, 720 28 S 960 8, 1110 28 S 1320 44, 1440 26" />
        </svg>
      </div>
    </div>
  );
}

function Hero({ showPage, scrollLandingSection }) {
  return (
    <section
      className="relative isolate min-h-[calc(100vh-92px)] overflow-hidden bg-cover bg-center bg-fixed before:absolute before:inset-0 before:z-0 before:bg-[radial-gradient(circle_at_14%_20%,rgba(122,145,129,.24),transparent_30%),radial-gradient(circle_at_82%_8%,rgba(190,154,94,.18),transparent_24%)] before:content-[''] after:absolute after:inset-0 after:z-0 after:bg-[rgba(13,31,45,.18)] after:backdrop-brightness-75 after:backdrop-contrast-95 after:backdrop-saturate-75 after:content-[''] md:bg-fixed"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(13,31,45,.96) 0%, rgba(13,31,45,.88) 34%, rgba(13,31,45,.68) 68%, rgba(13,31,45,.42) 100%), linear-gradient(180deg, rgba(13,31,45,.34), rgba(13,31,45,.54)), url(${assets.hero})`
      }}
    >
      <div className="site-view relative z-10 flex min-h-[calc(100vh-92px)] items-center px-6 py-24">
        <div className="max-w-[720px]">
          <span className="eyebrow text-sand/85">Relocation concierge</span>
          <h1 className="heading-xl text-white drop-shadow-xl">Move to Panama without feeling lost.</h1>
          <p className="mb-8 max-w-[510px] text-lg leading-relaxed text-white/80 drop-shadow">
            Practical relocation, settlement and property support for International Residents who want trusted local hands in Panama.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="btn bg-sand text-navy hover:bg-white" type="button" onClick={() => scrollLandingSection('relocate')}>
              Start your relocation <ArrowRight size={16} />
            </button>
            <button className="btn border border-sand/50 bg-white/10 text-white backdrop-blur hover:bg-sand/15" type="button" onClick={() => scrollLandingSection('living')}>
              I already live in Panama
            </button>
            <button className="btn border border-sand/50 bg-white/10 text-white backdrop-blur hover:bg-sand/15" type="button" onClick={() => showPage('contact')}>
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationSection({ showPage }) {
  return (
    <section className="section" id="location">
      <div className="site-view grid items-center gap-16 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <span className="eyebrow">Location</span>
          <h2 className="heading-lg text-left text-ink">From Panama City to Coronado.</h2>
          <p className="max-w-[450px] text-base leading-relaxed text-ink/65">
            We support practical relocation and settlement needs across key residential areas, beach communities and city neighborhoods.
          </p>
          <button className="mt-3 inline-flex items-center gap-2 rounded-full border border-[rgba(174,160,140,.34)] bg-white/60 px-4 py-3.5 text-sm font-black text-navy shadow-sm transition hover:-translate-y-0.5 hover:bg-white/80" type="button" onClick={() => showPage('contact')}>
            Ask about your area <ArrowRight size={16} />
          </button>
        </div>

        <div
          className="relative min-h-[500px] overflow-hidden rounded-[34px] border border-[rgba(174,160,140,.22)] bg-cover bg-center shadow-soft"
          style={{
            backgroundImage: `linear-gradient(145deg, rgba(247,245,241,.34), rgba(13,31,45,.08)), url(${assets.mapCard})`
          }}
        >
          <div className="absolute inset-0 bg-warm/40 backdrop-grayscale" />
          <svg className="absolute inset-0 z-10 h-full w-full opacity-90" viewBox="0 0 600 420" preserveAspectRatio="none" aria-hidden="true">
            <path d="M78 120 C 160 100, 210 160, 270 190 S 430 260, 500 310" fill="none" stroke="rgba(190,154,94,.65)" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 14" />
          </svg>
          <div className="absolute left-[13%] top-[22%] z-20 grid h-[92px] w-[92px] place-items-center rounded-full border border-taupe/40 bg-warm/80 text-center text-xs font-black text-navy shadow-lg backdrop-blur">Panama<br />City</div>
          <div className="absolute bottom-[22%] right-[15%] z-20 grid h-[92px] w-[92px] place-items-center rounded-full border border-taupe/40 bg-navy/90 text-center text-xs font-black text-white shadow-lg backdrop-blur">Coronado</div>
        </div>
      </div>
    </section>
  );
}

function LivingSection() {
  return (
    <section className="w-full overflow-hidden" id="living">
      <div className="grid w-full lg:grid-cols-2">
        <div
          className="min-h-[380px] bg-cover bg-center lg:min-h-[clamp(480px,70vh,760px)]"
          style={{ backgroundImage: `linear-gradient(90deg, rgba(13,31,45,.08), rgba(13,31,45,0)), url(${assets.living})` }}
          aria-label="Residential property in Panama"
        />
        <div className="flex min-h-[clamp(480px,70vh,760px)] items-center justify-center bg-[rgba(239,233,224,.72)] px-6 py-14 lg:px-[clamp(48px,6vw,88px)]">
          <div className="w-full max-w-[520px]">
            <span className="eyebrow">Already in Panama</span>
            <h2 className="mb-4 text-[clamp(30px,3.1vw,46px)] uppercase leading-tight tracking-wide text-navy">
              Services for people <span className="text-gold">living here.</span>
            </h2>
            <p className="mb-6 max-w-[460px] text-left leading-relaxed text-ink/65">
              Essential support for the practical things that make daily life easier for International Residents.
            </p>
            <ul className="grid list-none gap-x-6 gap-y-3.5 p-0 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service} className="relative pl-5 text-sm font-extrabold leading-snug text-navy before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-gold before:shadow-[0_0_0_4px_rgba(190,154,94,.12)]">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function RelocationSection() {
  return (
    <section className="section" id="relocate">
      <div className="site-view">
        <div className="mx-auto mb-11 max-w-[760px] text-center">
          <span className="eyebrow">Relocation</span>
          <h2 className="heading-lg text-center text-ink">A softer landing in Panama.</h2>
          <p className="text-ink/65">Simple, practical support for what usually feels confusing before and after a move.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <h3 className="mb-2 text-2xl font-black leading-tight tracking-[-.045em] text-navy">{feature.title}</h3>
              <p className="text-base leading-relaxed text-ink/65">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PreFooter({ showPage }) {
  return (
    <section className="bg-sage px-6 py-20 text-white" id="consultation">
      <div className="site-view text-left">
        <span className="eyebrow text-sand/75">Need more information?</span>
        <h2 className="mb-8 max-w-[720px] text-left text-[clamp(36px,4vw,58px)] font-black leading-tight tracking-[-.055em] text-white">
          Settle in Panama with local experts.
        </h2>
        <button className="mb-6 inline-flex items-center gap-2 rounded-[10px] border border-white/40 bg-sand px-5 py-3.5 text-sm font-black text-navy transition hover:bg-white hover:shadow-[0_18px_34px_rgba(0,0,0,.18)]" type="button" onClick={() => showPage('contact')}>
          Schedule a consultation <ArrowRight size={16} />
        </button>
        <p className="m-0 max-w-[820px] text-[15px] text-white/75">
          Call <strong className="font-black text-white">+507 6000-0000</strong> or write on <strong className="font-black text-white">WhatsApp</strong>, <strong className="font-black text-white">Telegram</strong> or <strong className="font-black text-white">hello@settlepanama.demo</strong>
        </p>
      </div>
    </section>
  );
}

function LandingPage({ showPage, scrollLandingSection }) {
  return (
    <>
      <Hero showPage={showPage} scrollLandingSection={scrollLandingSection} />
      <LocationSection showPage={showPage} />
      <LivingSection />
      <RelocationSection />
      <PreFooter showPage={showPage} />
    </>
  );
}

function AboutPage({ showPage }) {
  return (
    <section className="section min-h-[calc(100vh-92px)]">
      <div className="site-view grid items-center gap-11 lg:grid-cols-[.95fr_1.05fr]">
        <div>
          <span className="eyebrow">About</span>
          <h1 className="heading-xl text-ink">Local hands for a calmer move.</h1>
          <p className="max-w-[560px] text-lg leading-relaxed text-ink/65">
            Settle Panama helps International Residents handle the practical, local and time-sensitive pieces of moving, settling and maintaining life in Panama.
          </p>
          <button className="btn btn-primary mt-4" type="button" onClick={() => showPage('contact')}>Book a consultation</button>
        </div>
        <div className="rounded-[30px] border border-[rgba(174,160,140,.22)] bg-white/60 p-8 shadow-soft">
          <h3 className="mb-4 text-2xl font-black text-navy">How we work</h3>
          {[
            'We start with a clear consultation and document review.',
            'We map the steps, timelines and local dependencies.',
            'We coordinate practical follow-up with transparent communication.'
          ].map((item) => (
            <div key={item} className="border-t border-[rgba(174,160,140,.22)] py-4 text-ink/65">{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingPage({ showPage }) {
  return (
    <section className="section min-h-[calc(100vh-92px)] bg-[rgba(239,233,224,.72)]">
      <div className="site-view">
        <div className="mx-auto mb-11 max-w-[760px] text-center">
          <span className="eyebrow">Pricing</span>
          <h1 className="heading-xl text-ink">Choose the right level of support.</h1>
          <p className="text-ink/65">Every move is different, so packages are scoped after a short consultation.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {packages.map((item) => (
            <article key={item.title} className={`flex min-h-[380px] flex-col rounded-[28px] border p-7 transition hover:-translate-y-1.5 hover:shadow-lift ${item.featured ? 'border-navy bg-navy text-white' : 'border-[rgba(174,160,140,.22)] bg-white/60 text-ink'}`}>
              <small className={`mb-4 text-xs font-black uppercase tracking-[.1em] ${item.featured ? 'text-sand/80' : 'text-sage'}`}>{item.eyebrow}</small>
              <h3 className={`mb-2 text-2xl font-black ${item.featured ? 'text-white' : 'text-navy'}`}>{item.title}</h3>
              <div className={`mb-4 text-4xl font-black tracking-[-.06em] ${item.featured ? 'text-white' : 'text-navy'}`}>{item.price}</div>
              <p className={`${item.featured ? 'text-white/75' : 'text-ink/65'}`}>{item.text}</p>
              <ul className="my-6 grid gap-3 text-sm">
                {item.items.map((line) => (
                  <li key={line} className={`relative pl-5 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-gold ${item.featured ? 'text-white/75' : 'text-ink/65'}`}>{line}</li>
                ))}
              </ul>
              <button className={`btn mt-auto w-fit ${item.featured ? 'bg-sand text-navy' : 'btn-primary'}`} type="button" onClick={() => showPage('contact')}>Request scope</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  const [preview, setPreview] = useState('');
  const servicesOptions = ['Relocation consultation', 'Legal paperwork', 'Personalized moving package', 'Property care', 'Already living in Panama'];

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name') || 'Your name';
    const contact = data.get('contact') || 'Preferred contact';
    const service = data.get('service') || 'Not selected';
    const area = data.get('area') || 'Not specified';
    const message = data.get('message') || 'I would like more information.';

    setPreview(`Hello, my name is ${name}. I need help with: ${service}. Area: ${area}. Contact: ${contact}. Details: ${message}`);
  };

  return (
    <section className="section min-h-[calc(100vh-92px)]">
      <div className="site-view grid items-stretch gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <aside className="rounded-[28px] border border-[rgba(174,160,140,.22)] bg-sand/50 p-8">
          <span className="eyebrow">Contact</span>
          <h1 className="heading-xl text-ink">Tell us what you need.</h1>
          <p className="max-w-[420px] text-ink/65">Send a short note and we will help you understand the next practical step.</p>
          <div className="mt-8 grid gap-0">
            <span className="border-t border-taupe/40 py-3 text-sm font-extrabold text-navy">WhatsApp: +507 6000-0000</span>
            <span className="border-t border-taupe/40 py-3 text-sm font-extrabold text-navy">Email: hello@settlepanama.demo</span>
            <span className="border-t border-taupe/40 py-3 text-sm font-extrabold text-navy">Panama time: 09:00–17:00</span>
          </div>
        </aside>

        <form className="grid gap-3.5 rounded-[28px] border border-[rgba(174,160,140,.22)] bg-white/60 p-7" onSubmit={handleSubmit}>
          <div className="grid gap-3.5 md:grid-cols-2">
            <label className="grid gap-2 text-[13px] font-extrabold text-navy">Name<input className="form-field" name="name" required /></label>
            <label className="grid gap-2 text-[13px] font-extrabold text-navy">Email or phone<input className="form-field" name="contact" required /></label>
          </div>
          <div className="grid gap-3.5 md:grid-cols-2">
            <label className="grid gap-2 text-[13px] font-extrabold text-navy">Service
              <select className="form-field" name="service" defaultValue="Relocation consultation">
                {servicesOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label className="grid gap-2 text-[13px] font-extrabold text-navy">Area<input className="form-field" name="area" placeholder="Panama City, Coronado, etc." /></label>
          </div>
          <label className="grid gap-2 text-[13px] font-extrabold text-navy">Message<textarea className="form-field min-h-32 resize-y" name="message" /></label>
          <button className="btn btn-primary w-fit" type="submit">Create message preview</button>
          {preview && (
            <div className="rounded-2xl border border-[rgba(174,160,140,.22)] bg-warm/80 p-4 text-sm leading-relaxed text-ink/65">
              <strong className="text-navy">Message preview:</strong><br />{preview}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function TemplatesPage() {
  return (
    <section className="section min-h-[calc(100vh-92px)]">
      <div className="site-view">
        <div className="mx-auto mb-8 max-w-[760px] text-center">
          <span className="eyebrow">Templates</span>
          <h1 className="heading-xl text-ink">Archived layout ideas.</h1>
          <p className="text-ink/65">This hidden page can store future layout patterns without exposing them in the main navigation.</p>
        </div>
        <div className="mx-auto min-h-[560px] max-w-[760px] rounded-[34px] border border-[rgba(174,160,140,.22)] bg-cover bg-center shadow-soft" style={{ backgroundImage: `url(${assets.hero})` }} />
      </div>
    </section>
  );
}

function Footer({ showPage }) {
  return (
    <footer className="w-full border-t border-white/10 bg-navy px-6 py-10 text-white/75">
      <div className="site-view grid items-center gap-5 text-sm md:grid-cols-[1fr_auto]">
        <div>
          <img className="mb-3 block w-[156px] brightness-0 invert" src={assets.logo} alt="Settle Panama" />
          <p className="m-0 text-white/70">Relocation, settlement and property support for International Residents in Panama.</p>
        </div>
        <div className="flex flex-wrap gap-4 font-extrabold text-sand">
          {['about', 'pricing', 'contact'].map((item) => (
            <button key={item} className="transition hover:-translate-y-px hover:text-gold" type="button" onClick={() => showPage(item)}>
              {item[0].toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}

function ContactWidget({ showPage }) {
  const [open, setOpen] = useState(false);

  const goContact = () => {
    setOpen(false);
    showPage('contact');
  };

  const options = useMemo(() => [
    { label: 'WhatsApp', href: 'https://wa.me/5076000000', className: 'bg-green-600 hover:bg-green-700', icon: <MessageCircle size={16} /> },
    { label: 'Telegram', href: 'https://t.me/settlepanama', className: 'bg-blue-500 hover:bg-blue-600', icon: <Send size={16} /> },
    { label: 'Book a free consultation', onClick: goContact, className: 'bg-navy hover:bg-[rgb(18,42,58)]', icon: <MessageCircle size={16} /> },
    { label: 'Call', href: 'tel:+5076000000', className: 'bg-navy hover:bg-[rgb(18,42,58)]', icon: <Phone size={16} /> }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ], []);

  return (
    <div className="fixed bottom-6 right-6 z-[60] grid justify-items-end gap-3 max-[720px]:bottom-[18px] max-[720px]:right-[18px]">
      {open && (
        <div className="flex animate-[contactMenuIn_.26s_ease_both] flex-col items-stretch justify-end gap-2 font-extrabold">
          {options.map((option) => {
            const classes = `flex min-h-11 items-center justify-start gap-2 whitespace-nowrap rounded-[10px] border border-white/35 px-3.5 py-3 text-sm text-white shadow-[0_12px_24px_rgba(13,31,45,.16)] transition hover:-translate-y-px hover:scale-105 hover:shadow-[0_16px_34px_rgba(13,31,45,.22)] ${option.className}`;
            if (option.href) {
              return <a key={option.label} className={classes} href={option.href}>{option.icon}{option.label}</a>;
            }
            return <button key={option.label} className={classes} type="button" onClick={option.onClick}>{option.icon}{option.label}</button>;
          })}
          <div className="rounded-[10px] border border-white/35 bg-navy/80 px-3 py-2 text-center text-xs text-white shadow-lg backdrop-blur">We work 09:00–17:00 Panama time</div>
        </div>
      )}

      <button
        className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/40 bg-navy text-white shadow-[0_24px_50px_rgba(13,31,45,.30)] transition hover:scale-105 hover:bg-[rgb(18,42,58)]"
        type="button"
        aria-label={open ? 'Close contact options' : 'Open contact options'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="grid place-items-center transition duration-300">
          {open ? <X size={28} /> : <MessageCircle size={28} />}
        </span>
        <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-green-500 before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-green-500 before:opacity-75" />
      </button>
    </div>
  );
}

export default function App() {
  const { page, showPage, scrollLandingSection } = useHashRouter();

  return (
    <>
      <Header page={page} showPage={showPage} />
      <main className="w-full overflow-hidden">
        {page === 'landing' && <LandingPage showPage={showPage} scrollLandingSection={scrollLandingSection} />}
        {page === 'about' && <AboutPage showPage={showPage} />}
        {page === 'pricing' && <PricingPage showPage={showPage} />}
        {page === 'contact' && <ContactPage />}
        {page === 'templates' && <TemplatesPage />}
      </main>
      <Footer showPage={showPage} />
      <ContactWidget showPage={showPage} />
    </>
  );
}
