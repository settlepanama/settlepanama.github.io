import { useEffect, useState } from 'react';
import { Menu, Moon, ArrowRight } from 'lucide-react';
import { assets } from './lib/assets.js';

const pages = ['landing', 'about', 'pricing', 'contact', 'templates'];
const landingSections = ['location', 'relocate', 'living', 'consultation'];

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

function LanguageIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.55" stroke="currentColor" width="22" height="22" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 448 512" aria-hidden="true">
      <path fillRule="evenodd" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 496 512" aria-hidden="true">
      <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
      <path d="M160-240q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720L720-240H160Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

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
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState('English');
  const navItems = [
    ['about', 'About'],
    ['pricing', 'Pricing'],
    ['contact', 'Contact']
  ];

  const go = (target) => {
    setOpen(false);
    setLanguageOpen(false);
    showPage(target);
  };

  const selectLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
    setLanguageOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 max-h-[108px] w-full bg-warm/90 backdrop-blur-xl">
      <div className="flex min-h-[26px] items-center justify-center border-b border-[rgba(174,160,140,.22)] px-4 py-1 text-center text-[11px] text-ink/60 before:mx-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gold/70 before:content-[''] after:mx-2 after:h-1.5 after:w-1.5 after:rounded-full after:bg-gold/70 after:content-['']">
        Relocation, settlement and property support for International Residents in Panama.
      </div>

      <header className="w-full px-6 pb-1.5 pt-2">
        <div className={`mx-auto grid min-h-[42px] max-w-site items-center gap-4 lg:grid-cols-[1fr_auto_1fr] ${open ? 'grid-cols-1' : 'grid-cols-[1fr_auto]'}`}>
          <button className="w-fit" type="button" onClick={() => go('landing')} aria-label="Settle Panama landing page">
            <img className="block w-32 drop-shadow-sm transition hover:opacity-80 md:w-32" src={assets.logo} alt="Settle Panama" />
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
                className={`nav-button relative rounded-full px-3 py-2 pb-3 text-[13px] font-extrabold text-ink/60 transition hover:text-navy ${page === target ? 'active text-navy' : ''}`}
                type="button"
                onClick={() => go(target)}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className={`${open ? 'flex' : 'hidden'} items-center justify-start gap-3 lg:flex lg:justify-end`}>
            <div className="relative">
              <button
                className="grid h-8 w-8 place-items-center rounded-full text-navy transition hover:bg-taupe/15 hover:text-gold"
                type="button"
                aria-label="Language"
                aria-expanded={languageOpen}
                onClick={() => setLanguageOpen((value) => !value)}
              >
                <LanguageIcon />
              </button>

              {languageOpen && (
                <ul className="absolute right-0 top-10 z-[70] min-w-[138px] overflow-hidden rounded-xl border border-[rgba(174,160,140,.22)] bg-white py-1 text-sm shadow-[0_18px_42px_rgba(13,31,45,.13)]">
                  {['English', 'Spanish'].map((item) => (
                    <li key={item}>
                      <button
                        type="button"
                        className={`block w-full px-3 py-2 text-left transition hover:bg-gray-50 ${language === item ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                        onClick={() => selectLanguage(item)}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button className="grid h-8 w-8 place-items-center rounded-full text-navy transition hover:bg-taupe/15 hover:text-gold" type="button" aria-label="Theme">
              <Moon size={17} />
            </button>
            <button className="text-[13px] font-black text-navy" type="button" onClick={() => go('contact')}>
              Sign in <span className="inline-block transition group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </header>

      <div className="nav-wave h-4 w-full overflow-hidden">
        <svg className="block h-full w-full" viewBox="0 0 1440 52" preserveAspectRatio="none" aria-hidden="true">
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
          <button className="mt-3 inline-flex items-center gap-2 rounded-full border border-[rgba(174,160,140,.34)] bg-white/60 px-4 py-3.5 text-sm font-black text-navy shadow-sm transition hover:bg-white/80" type="button" onClick={() => showPage('contact')}>
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
  const [hasRelocateBackground, setHasRelocateBackground] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => setHasRelocateBackground(true);
    image.onerror = () => setHasRelocateBackground(false);
    image.src = assets.relocateBg;
  }, []);

  return (
    <section
      className={`section ${hasRelocateBackground ? 'bg-cover bg-center bg-no-repeat' : ''}`}
      id="relocate"
      style={hasRelocateBackground ? {
        backgroundImage: `linear-gradient(180deg, rgba(247,245,241,.86), rgba(247,245,241,.92)), url(${assets.relocateBg})`
      } : undefined}
    >
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
      <RelocationSection />
      <LivingSection />
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
  return (
    <section className="min-h-[calc(100vh-92px)] bg-[#d8d8d8]">
      <div className="grid min-h-[calc(100vh-92px)] lg:grid-cols-2">
        <div
          className="min-h-[360px] bg-cover bg-center lg:min-h-[calc(100vh-92px)]"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(247,245,241,.62), rgba(247,245,241,.10)), url(${assets.contact})`
          }}
          aria-label="Panama residential skyline"
        />

        <div className="flex items-center justify-center px-8 py-16 lg:px-16">
          <form className="w-full max-w-[560px]" onSubmit={(event) => event.preventDefault()}>
            <span className="mb-3 block text-xs font-black uppercase tracking-[.14em] text-navy/65">Contact</span>
            <h1 className="mb-8 text-[clamp(32px,3.4vw,54px)] font-normal uppercase leading-[1.02] tracking-[.02em] text-navy">
              For more information,<br />
              <span className="text-gold">contact us</span>
            </h1>

            <div className="grid gap-7">
              <label className="block text-xs font-medium text-navy/75">
                Name*
                <input className="mt-2 block w-full border-0 border-b border-navy/55 bg-transparent px-0 py-2 text-sm text-navy outline-none transition placeholder:text-navy/35 focus:border-gold focus:ring-0" name="name" required />
              </label>

              <label className="block text-xs font-medium text-navy/75">
                Last name*
                <input className="mt-2 block w-full border-0 border-b border-navy/55 bg-transparent px-0 py-2 text-sm text-navy outline-none transition placeholder:text-navy/35 focus:border-gold focus:ring-0" name="lastName" required />
              </label>

              <label className="block text-xs font-medium text-navy/75">
                Email*
                <input className="mt-2 block w-full border-0 border-b border-navy/55 bg-transparent px-0 py-2 text-sm text-navy outline-none transition placeholder:text-navy/35 focus:border-gold focus:ring-0" type="email" name="email" required />
              </label>

              <label className="block text-xs font-medium text-navy/75">
                Phone*
                <input className="mt-2 block w-full border-0 border-b border-navy/55 bg-transparent px-0 py-2 text-sm text-navy outline-none transition placeholder:text-navy/35 focus:border-gold focus:ring-0" type="tel" name="phone" required />
              </label>
            </div>

            <button className="mt-12 inline-flex min-w-[104px] items-center justify-center border border-gold px-8 py-3 text-xs font-black uppercase tracking-[.08em] text-gold transition hover:bg-gold hover:text-white" type="submit">
              Send
            </button>
          </form>
        </div>
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
            <button key={item} className="transition hover:text-gold" type="button" onClick={() => showPage(item)}>
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

  const optionBaseClass = 'flex min-h-11 items-center justify-start gap-2.5 whitespace-nowrap rounded-[10px] border border-white/35 px-3.5 py-3 text-sm text-white shadow-[0_12px_24px_rgba(13,31,45,.16)] transition hover:-translate-y-px hover:scale-105 hover:shadow-[0_16px_34px_rgba(13,31,45,.22)]';

  return (
    <div className="fixed bottom-6 right-6 z-[60] grid justify-items-end gap-3 max-[720px]:bottom-[18px] max-[720px]:right-[18px]">
      {open && (
        <div className="flex animate-[contactMenuIn_.26s_ease_both] flex-col items-stretch justify-end gap-2 font-extrabold" aria-label="Contact options">
          <a className={`${optionBaseClass} bg-green-600 hover:bg-green-700`} href="https://wa.me/5076000000" title="Message us on WhatsApp">
            <span className="h-4 w-4 flex-none"><WhatsAppIcon /></span>
            <span>Message us on WhatsApp</span>
          </a>

          <a className={`${optionBaseClass} bg-blue-500 hover:bg-blue-600`} href="https://t.me/settlepanama" title="Message us on Telegram">
            <span className="h-4 w-4 flex-none"><TelegramIcon /></span>
            <span>Message us on Telegram</span>
          </a>

          <button className={`${optionBaseClass} bg-navy hover:bg-[rgb(18,42,58)]`} type="button" onClick={goContact} title="Book a free consultation">
            <span className="h-4 w-4 flex-none"><CalendarIcon /></span>
            <span>Book a free consultation</span>
          </button>

          <a className={`${optionBaseClass} bg-navy hover:bg-[rgb(18,42,58)]`} href="tel:+5076000000" title="Call us">
            <span className="h-4 w-4 flex-none"><PhoneIcon /></span>
            <span>Call +507 6000-0000</span>
          </a>

          <div className="rounded-[10px] border border-white/35 bg-navy/80 px-3 py-2 text-center text-xs text-white shadow-lg backdrop-blur">We work 09:00–17:00 Panama time</div>
        </div>
      )}

      <button
        className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/40 bg-navy text-white shadow-[0_24px_50px_rgba(13,31,45,.30)] transition hover:scale-105 hover:bg-[rgb(18,42,58)]"
        type="button"
        title="Contact us"
        aria-label="Contact us"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={`grid place-items-center transition duration-300 ${open ? 'rotate-45 scale-[1.02]' : ''}`}>
          {open ? <CloseIcon /> : <MessageIcon />}
        </span>
        <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-green-500 before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-green-500 before:opacity-75" />
      </button>
    </div>
  );
}

function renderPage(page, showPage, scrollLandingSection) {
  switch (page) {
    case 'landing':
      return <LandingPage showPage={showPage} scrollLandingSection={scrollLandingSection} />;
    case 'about':
      return <AboutPage showPage={showPage} />;
    case 'pricing':
      return <PricingPage showPage={showPage} />;
    case 'contact':
      return <ContactPage />;
    case 'templates':
      return <TemplatesPage />;
    default:
      return <LandingPage showPage={showPage} scrollLandingSection={scrollLandingSection} />;
  }
}

export default function App() {
  const { page, showPage, scrollLandingSection } = useHashRouter();

  return (
    <>
      <Header page={page} showPage={showPage} />
      <main className="w-full overflow-hidden">
        <div key={page} className="page-transition">
          {renderPage(page, showPage, scrollLandingSection)}
        </div>
      </main>
      <Footer showPage={showPage} />
      <ContactWidget showPage={showPage} />
    </>
  );
}
