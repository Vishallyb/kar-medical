import { useEffect, useState, type FormEvent } from "react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  ClipboardList,
  Clock3,
  FlaskConical,
  Heart,
  HeartPulse,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Plus,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import karMedicalLogo from "./images/KarMedicalLogo.png";
import priviaLogo from "./images/Privia-white.png.webp";

const BOOKING_URL =
  "https://providers.priviahealth.com/search?network%5Faffiliation=Kar%20Medical%20Care%20LLC&sort=relevance%2Cnetworks%2Cavailability%5Fdensity%5Fbest";
const PHONE = "703-770-6077";
const TEL = "tel:+17037706077";
const EMAIL = "Info@karmedicalcare.com";

const IMAGES = {
  drKaur:
    "https://karmedicalcare.com/wp-content/uploads/2026/03/2a0c7afc-f576-4e72-bc02-a50fe3020efa_original-1-768x960-1-e1774262822296.jpg",
  lauren:
    "https://karmedicalcare.com/wp-content/uploads/2026/03/008-Lauren-Muckelvene-684x1024-1-e1774262949958.jpg",
  consultation:
    "https://images.pexels.com/photos/7579823/pexels-photo-7579823.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
  careConversation:
    "https://images.pexels.com/photos/4266935/pexels-photo-4266935.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1100",
  wellness:
    "https://images.pexels.com/photos/12940835/pexels-photo-12940835.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900",
  lab: "https://images.pexels.com/photos/8670188/pexels-photo-8670188.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900",
  doctorFallback:
    "https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  doctorFallback2:
    "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
};

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Our Team", href: "#team" },
  { label: "Reviews", href: "#reviews" },
  { label: "Locations", href: "#locations" },
];

type Service = {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
  image: string;
  href: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "Primary care, with the full picture",
    description:
      "Thoughtful adult internal medicine, annual physicals, preventive screenings, and chronic condition management—all connected to one care team that knows you.",
    bullets: ["Annual physicals", "Diabetes & blood pressure", "In-office lab draws"],
    icon: Stethoscope,
    image: IMAGES.consultation,
    href: "https://karmedicalcare.com/primary-care/",
  },
  {
    number: "02",
    title: "Immediate care",
    description:
      "Prompt help for non-life-threatening illnesses and concerns, with same-day and next-day appointments when available.",
    bullets: ["Minor illnesses", "Flexible scheduling", "Non-emergency only"],
    icon: Clock3,
    image: IMAGES.careConversation,
    href: "https://karmedicalcare.com/immediate-care/",
  },
  {
    number: "03",
    title: "Medical weight loss",
    description:
      "Physician-led, evidence-based plans that consider metabolism, nutrition, lifestyle, medications, and your long-term health.",
    bullets: ["Metabolic evaluation", "Nutrition guidance", "Ongoing monitoring"],
    icon: Activity,
    image: IMAGES.wellness,
    href: "https://karmedicalcare.com/medical-weight-loss/",
  },
  {
    number: "04",
    title: "Hormone & whole-body wellness",
    description:
      "Personalized evaluation for hormone concerns, thyroid health, fatigue, and the changes that affect how you feel every day.",
    bullets: ["Hormone evaluation", "Thyroid & PCOS", "Personalized plans"],
    icon: Sparkles,
    image: IMAGES.lab,
    href: "https://karmedicalcare.com/hormone-health-for-men-women-in-woodbridge-springfield-va/",
  },
];

const testimonials = [
  {
    quote:
      "Doctor Kaur was exceptionally good! She listened and explained everything that needed to be done. It was such a refreshing experience to actually have a doctor who listens and is genuinely concerned about me.",
    name: "Google patient review",
    initials: "GK",
  },
  {
    quote:
      "The nurses and Dr. Jaspreet were super patient with me, listening to all my lengthy medical history, questions, and concerns. It was very easy to schedule a time, and my follow-up was in two weeks.",
    name: "Google patient review",
    initials: "PJ",
  },
  {
    quote:
      "Dr. Kaur is an excellent physician, very attentive to your questions and really helpful in navigating the hard medical process that is your health. Thank you very much!",
    name: "Marlene Leon",
    initials: "ML",
  },
  {
    quote:
      "Everyone is so welcoming, pleasant and friendly. My provider listens and answers my questions regarding my health. I would definitely recommend this office to anyone who wants great quality care.",
    name: "Google patient review",
    initials: "AW",
  },
  {
    quote:
      "Dr. Kar is very patient and always pays attention to details. She involves the patient in her care plan. The staff here are very nice and friendly.",
    name: "Google patient review",
    initials: "EK",
  },
];

const locations = [
  {
    city: "Springfield",
    address: "5510 Alma Ln, STE 110\nSpringfield, VA 22151",
    hours: ["Tuesday, Thursday, Friday", "9:00 AM – 5:00 PM"],
    note: "Serving Fairfax and the surrounding D.C. metro area",
    map: "https://www.google.com/maps/search/?api=1&query=5510+Alma+Ln+STE+110+Springfield+VA+22151",
    dark: true,
  },
  {
    city: "Woodbridge",
    address: "2200 Opitz Blvd, Ste 320\nWoodbridge, VA 22191",
    hours: ["Monday – Friday: 9:00 AM – 5:00 PM", "Saturday: 10:00 AM – 2:00 PM"],
    note: "Saturday appointments available at this location",
    map: "https://www.google.com/maps/search/?api=1&query=2200+Opitz+Blvd+Ste+320+Woodbridge+VA+22191",
    dark: false,
  },
];

const faqs = [
  {
    question: "Do you offer same-day or next-day appointments?",
    answer:
      "Yes. We offer same-day and next-day appointments for immediate needs when availability allows, along with flexible scheduling and virtual visits for added convenience. Call or text us to find the earliest opening.",
  },
  {
    question: "Is immediate care the same as an emergency room?",
    answer:
      "No. Immediate care is intended only for non-life-threatening issues. If you are experiencing a medical emergency, call 911 or go to the nearest emergency department.",
  },
  {
    question: "What makes your weight loss program different?",
    answer:
      "Our programs are physician-led by a dual board-certified specialist in Internal Medicine and Obesity Medicine. Your metabolic health, medications, medical history, nutrition, and lifestyle are considered together—not treated as separate concerns.",
  },
  {
    question: "Can I access my health information online?",
    answer:
      "Yes. Patients can use the myPrivia Patient Portal to view health information, communicate with the practice, and manage parts of their care. Our team can help you get registered.",
  },
];

function SafeImage({
  src,
  fallback,
  alt,
  className,
  eager = false,
}: {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      onError={() => {
        if (currentSrc !== fallback) setCurrentSrc(fallback);
      }}
    />
  );
}

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function BrandMark({ light = false, image = false }: { light?: boolean; image?: boolean }) {
  return (
    <a href="#top" className="group inline-flex items-center gap-3" aria-label="KAR Medical Care, back to top">
      {image ? (
        <span className={light ? "rounded-lg bg-white px-2 py-1" : ""}>
          <img src={karMedicalLogo} alt="KAR Medical Care" className="h-auto w-[170px] sm:w-[190px]" />
        </span>
      ) : (
        <>
          <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-[#273171] text-[#e5e8f7] shadow-sm transition-transform duration-300 group-hover:-rotate-6">
            <HeartPulse size={22} strokeWidth={2.2} />
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-[#e6a17b]" />
          </span>
          <span className="leading-none">
            <span
              className={`block font-display text-[1.55rem] font-semibold tracking-[-0.04em] ${light ? "text-white" : "text-[#273171]"}`}
            >
              KAR
            </span>
            <span
              className={`mt-1 block text-[0.56rem] font-bold uppercase tracking-[0.28em] ${light ? "text-[#c5cbed]" : "text-[#65719c]"}`}
            >
              Medical Care
            </span>
          </span>
        </>
      )}
    </a>
  );
}

function ServiceCard({ service, featured = false }: { service: Service; featured?: boolean }) {
  const Icon = service.icon;

  if (featured) {
    return (
      <article className="reveal delay-1 group relative min-h-[390px] overflow-hidden rounded-[2rem] bg-[#273171] text-white lg:col-span-2">
        <SafeImage
          src={service.image}
          fallback={IMAGES.careConversation}
          alt="Doctor speaking with a patient"
          className="service-photo absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c2458] via-[#1c2458]/85 to-[#1c2458]/20" />
        <div className="relative flex h-full min-h-[390px] flex-col justify-between p-7 sm:p-10">
          <div className="flex items-center justify-between">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12 text-[#e5e8f7] ring-1 ring-white/20 backdrop-blur">
              <Icon size={23} />
            </span>
            <span className="text-xs font-semibold tracking-[0.24em] text-white/60">{service.number} / FEATURED CARE</span>
          </div>
          <div className="max-w-xl">
            <h3 className="font-display text-3xl leading-tight sm:text-4xl">{service.title}</h3>
            <p className="mt-4 max-w-lg text-sm leading-7 text-white/80 sm:text-base">{service.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.bullets.map((bullet) => (
                <span key={bullet} className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white/90">
                  {bullet}
                </span>
              ))}
            </div>
            <a
              href={service.href}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#e6a17b] px-5 py-3 text-sm font-semibold text-[#273171] transition hover:bg-[#f0b693]"
            >
              Explore primary care <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative flex min-h-[330px] flex-col overflow-hidden rounded-[2rem] border border-[#e1e4f0] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#c5cbed] hover:shadow-xl">
      <div className="mb-8 flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e9ebf9] text-[#273171]">
          <Icon size={22} />
        </span>
        <span className="font-display text-3xl text-[#d9def1]">{service.number}</span>
      </div>
      <h3 className="font-display text-2xl leading-tight text-[#273171]">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-[#58658e]">{service.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {service.bullets.slice(0, 2).map((bullet) => (
          <span key={bullet} className="rounded-full bg-[#f2f3fa] px-2.5 py-1 text-[11px] font-medium text-[#58658e]">
            {bullet}
          </span>
        ))}
      </div>
      <a
        href={service.href}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#273171] transition group-hover:gap-3"
      >
        Learn more <ArrowRight size={16} />
      </a>
    </article>
  );
}

function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "Springfield",
    visit: "Primary care visit",
  });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) {
      setSent(false);
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const updateField = (key: keyof typeof form, value: string) => {
    setForm((previous) => ({ ...previous, [key]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `Appointment request — ${form.name}`;
    const body = [
      "General appointment request (no personal health information included)",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Preferred location: ${form.location}`,
      `Visit type: ${form.visit}`,
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-[#1c2458]/65 p-0 backdrop-blur-sm sm:items-center sm:p-5">
      <button type="button" aria-label="Close appointment dialog" className="absolute inset-0 h-full w-full cursor-default" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className="modal-in relative z-10 max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-[2rem] bg-[#faf8f2] p-6 shadow-2xl sm:rounded-[2rem] sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-white text-[#273171] transition hover:bg-[#e9ebf9]"
        >
          <X size={18} />
        </button>

        {sent ? (
          <div className="py-8 text-center">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#e5e8f7] text-[#273171]">
              <CircleCheck size={32} />
            </span>
            <h2 id="booking-title" className="mt-6 font-display text-3xl text-[#273171]">Your email app should be open</h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#58658e]">
              We prepared your appointment request. Please send the email, and our team will follow up. You can also use the secure online scheduler now.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#273171] px-5 py-3 text-sm font-semibold text-white"
              >
                Open online scheduler <ArrowUpRight size={16} />
              </a>
              <button type="button" onClick={onClose} className="rounded-full border border-[#d6daed] px-5 py-3 text-sm font-semibold text-[#273171]">
                Done
              </button>
            </div>
          </div>
        ) : (
          <>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#e9ebf9] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#273171]">
              <CalendarDays size={13} /> Appointment request
            </span>
            <h2 id="booking-title" className="mt-5 font-display text-3xl leading-tight text-[#273171] sm:text-4xl">Let’s find you a time.</h2>
            <p className="mt-3 text-sm leading-6 text-[#58658e]">
              Choose the quickest route: schedule online, call us, or send a general request by email.
            </p>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex items-center justify-between gap-4 rounded-2xl bg-[#273171] p-4 text-white transition hover:bg-[#37448d]"
            >
              <span>
                <span className="block text-sm font-semibold">Book online with Privia</span>
                <span className="mt-0.5 block text-xs text-white/65">Fastest way to see available times</span>
              </span>
              <ArrowUpRight size={20} className="shrink-0" />
            </a>

            <div className="my-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a0a8c9]">
              <span className="h-px flex-1 bg-[#e1e4f0]" /> or send a request <span className="h-px flex-1 bg-[#e1e4f0]" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-xs font-semibold text-[#49568d]">
                  Full name
                  <input
                    required
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    placeholder="Your name"
                    className="mt-1.5 w-full rounded-xl border border-[#e1e4f0] bg-white px-3.5 py-2.5 text-sm font-normal text-[#273171] outline-none transition focus:border-[#273171]"
                  />
                </label>
                <label className="block text-xs font-semibold text-[#49568d]">
                  Phone
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    placeholder="(703) 000-0000"
                    className="mt-1.5 w-full rounded-xl border border-[#e1e4f0] bg-white px-3.5 py-2.5 text-sm font-normal text-[#273171] outline-none transition focus:border-[#273171]"
                  />
                </label>
              </div>
              <label className="block text-xs font-semibold text-[#49568d]">
                Email
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="you@example.com"
                  className="mt-1.5 w-full rounded-xl border border-[#e1e4f0] bg-white px-3.5 py-2.5 text-sm font-normal text-[#273171] outline-none transition focus:border-[#273171]"
                />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-xs font-semibold text-[#49568d]">
                  Location
                  <select
                    value={form.location}
                    onChange={(event) => updateField("location", event.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-[#e1e4f0] bg-white px-3.5 py-2.5 text-sm font-normal text-[#273171] outline-none transition focus:border-[#273171]"
                  >
                    <option>Springfield</option>
                    <option>Woodbridge</option>
                  </select>
                </label>
                <label className="block text-xs font-semibold text-[#49568d]">
                  Visit type
                  <select
                    value={form.visit}
                    onChange={(event) => updateField("visit", event.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-[#e1e4f0] bg-white px-3.5 py-2.5 text-sm font-normal text-[#273171] outline-none transition focus:border-[#273171]"
                  >
                    <option>Primary care visit</option>
                    <option>Annual physical</option>
                    <option>Immediate care</option>
                    <option>Weight management consult</option>
                    <option>Hormone health consult</option>
                    <option>General inquiry</option>
                  </select>
                </label>
              </div>
              <p className="rounded-xl bg-[#f2ece2] px-3 py-2.5 text-xs leading-5 text-[#725e50]">
                For general appointment requests only. Please do not include medical questions or personal health information.
              </p>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#e6a17b] px-5 py-3.5 text-sm font-bold text-[#273171] transition hover:bg-[#f0b693]"
              >
                Prepare email request <ArrowRight size={17} />
              </button>
            </form>
            <a href={TEL} className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-[#273171]">
              <Phone size={15} /> Prefer to call? {PHONE}
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  useReveal();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTestimonialIndex((current) => (current + 1) % testimonials.length);
    }, 7000);
    return () => window.clearInterval(interval);
  }, []);

  const openBooking = () => {
    setMenuOpen(false);
    setBookingOpen(true);
  };

  const goToTestimonial = (direction: number) => {
    setTestimonialIndex((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[testimonialIndex];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#faf8f2]">
      {/* Utility bar */}
      <div className="bg-[#273171] text-[#e1e4f0]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-5 py-2.5 text-xs">
          <p className="inline-flex items-center gap-2">
            <Sparkles size={13} className="text-[#e6a17b]" />
            Personalized care in Springfield &amp; Woodbridge, Virginia
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href={TEL} className="inline-flex items-center gap-1.5 font-medium transition hover:text-white">
              <Phone size={12} /> {PHONE}
            </a>
            <span className="hidden h-3 w-px bg-white/25 sm:block" />
            <a href={`mailto:${EMAIL}`} className="hidden items-center gap-1.5 font-medium transition hover:text-white sm:inline-flex">
              <Mail size={12} /> {EMAIL}
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-[#e1e4f0] bg-[#faf8f2]/95 shadow-[0_8px_30px_-24px_rgba(29,37,88,0.8)] backdrop-blur-xl" : "border-transparent bg-[#faf8f2]/80 backdrop-blur-md"}`}>
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-5 px-5">
          <BrandMark image />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="relative text-sm font-medium text-[#49568d] transition hover:text-[#273171] after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-[#cf7957] after:transition-all hover:after:w-full">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openBooking}
              className="hidden items-center gap-2 rounded-full bg-[#273171] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#37448d] sm:inline-flex"
            >
              Book a visit <ArrowUpRight size={16} />
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="grid h-11 w-11 place-items-center rounded-full border border-[#d6daed] bg-white text-[#273171] lg:hidden"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-[#e1e4f0] bg-[#faf8f2] px-5 py-4 lg:hidden">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="border-b border-[#e9ebf5] py-3 text-sm font-medium text-[#49568d]">
                  {link.label}
                </a>
              ))}
              <button type="button" onClick={openBooking} className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#273171] px-5 py-3 text-sm font-semibold text-white">
                Book a visit <ArrowUpRight size={16} />
              </button>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="top" className="relative overflow-hidden pb-20 pt-14 sm:pb-24 lg:pb-28 lg:pt-20">
          <div className="hero-glow pointer-events-none absolute inset-0" />
          <div className="dot-grid pointer-events-none absolute left-2 top-24 h-56 w-44 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full border-[50px] border-[#e5e8f7]/50" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
            <div className="reveal max-w-2xl">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#dce0f0] bg-white/75 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#49568d] shadow-sm">
                <span className="status-dot h-2 w-2 rounded-full bg-[#cf7957]" />
                A more personal kind of healthcare
              </span>
              <h1 className="font-display mt-7 text-balance text-[3.2rem] font-medium leading-[0.98] tracking-[-0.05em] text-[#273171] sm:text-6xl lg:text-[5rem]">
                Healthcare that feels <span className="italic text-[#cf7957]">human</span> again.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-[#58658e] sm:text-lg">
                Modern internal medicine, prevention, and physician-led weight care for adults across Northern Virginia. More time to talk, clearer answers, and a plan built around your life.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={openBooking}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#273171] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#37448d] hover:shadow-xl"
                >
                  Book an appointment
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight size={15} />
                  </span>
                </button>
                <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d6daed] bg-white/60 px-6 py-4 text-sm font-semibold text-[#273171] transition hover:border-[#273171]">
                  Explore our care <ArrowRight size={16} />
                </a>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#e1e4f0] pt-7">
                <div className="flex items-center gap-1 text-[#cf7957]" aria-label="Five star patient reviews">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-sm text-[#58658e]">
                  <span className="font-semibold text-[#273171]">Kind words from real patients</span> across the D.C. metro area
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { icon: MapPin, label: "2 locations" },
                  { icon: CalendarDays, label: "Same / next day" },
                  { icon: Clock3, label: "Saturday hours" },
                  { icon: ShieldCheck, label: "Privia Medical Group" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-xs font-semibold text-[#49568d]">
                    <item.icon size={16} className="shrink-0 text-[#cf7957]" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[570px]">
              <div className="breathe pointer-events-none absolute -left-8 -top-8 h-44 w-44 rounded-full bg-[#e2e6f7]" />
              <div className="pointer-events-none absolute -right-8 top-10 h-28 w-28 rounded-full bg-[#efd0b7]" />
              <div className="relative overflow-hidden rounded-[2.5rem] border-[8px] border-white/80 bg-[#e5e8f7] soft-shadow">
                <SafeImage
                  src={IMAGES.drKaur}
                  fallback={IMAGES.doctorFallback}
                  alt="KAR Medical Care physician"
                  className="h-[480px] w-full object-cover object-top sm:h-[570px] lg:h-[620px]"
                  eager
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c2458]/30 via-transparent to-transparent" />
              </div>
              <div className="float-slow absolute -bottom-7 -left-4 z-10 flex max-w-[255px] items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur sm:-left-8">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#e9ebf9] text-[#273171]">
                  <CalendarDays size={21} />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.1em] text-[#cf7957]">Your schedule</span>
                  <span className="mt-0.5 block text-sm font-semibold leading-5 text-[#273171]">Flexible visits, minimal waits</span>
                </span>
              </div>
              <div className="float-slower absolute -right-3 bottom-24 z-10 hidden h-32 w-32 overflow-hidden rounded-[1.5rem] border-[5px] border-white shadow-xl sm:block lg:-right-8">
                <SafeImage src={IMAGES.consultation} fallback={IMAGES.careConversation} alt="A provider consulting with a patient" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -top-5 right-8 z-10 grid h-20 w-20 place-items-center rounded-full border-[5px] border-[#faf8f2] bg-[#e6a17b] text-center text-[#273171] shadow-lg">
                <span>
                  <Heart size={19} fill="currentColor" className="mx-auto" />
                  <span className="mt-0.5 block text-[9px] font-bold uppercase leading-tight tracking-wider">Care that<br />listens</span>
                </span>
              </div>
              <span className="absolute -left-5 top-1/2 hidden text-[#bec5e2] xl:block"><Plus size={28} /></span>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="bg-[#273171] text-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-5 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, title: "Board-certified", text: "Internal Medicine & Obesity Medicine" },
              { icon: CalendarDays, title: "Care when you need it", text: "Same-day, next-day & virtual visits" },
              { icon: FlaskConical, title: "On-site lab draws", text: "Fewer stops, faster answers" },
              { icon: Users, title: "One connected team", text: "Proud part of Privia Medical Group" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 px-3 py-7 sm:px-6 lg:py-9">
                <item.icon size={22} className="mt-0.5 shrink-0 text-[#e6a17b]" />
                <div>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="mt-1 text-xs leading-5 text-white/60">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5">
            <div className="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#cf7957]">
                  <span className="h-px w-7 bg-[#cf7957]" /> What we do
                </span>
                <h2 className="font-display mt-5 text-balance text-4xl leading-[1.07] tracking-[-0.035em] text-[#273171] sm:text-5xl">
                  Whole-person care, <span className="italic">thoughtfully connected.</span>
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#58658e] sm:text-base">
                Your health is not a set of separate appointments. We bring prevention, day-to-day care, metabolic health, and wellness together in one place.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} featured={index === 0} />
              ))}
              <article className="reveal delay-3 relative flex min-h-[330px] flex-col justify-between overflow-hidden rounded-[2rem] bg-[#e6a17b] p-7 text-[#273171] sm:p-8">
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full border-[28px] border-white/25" />
                <div className="relative">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/35">
                    <MessageCircle size={22} />
                  </span>
                  <h3 className="font-display mt-9 text-3xl leading-tight">Not sure where to start?</h3>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-[#4b536b]">
                    Tell us what’s on your mind. We’ll help you find the right visit and the right next step.
                  </p>
                </div>
                <button type="button" onClick={openBooking} className="relative mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#273171] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#37448d]">
                  Talk with our team <ArrowUpRight size={16} />
                </button>
              </article>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="relative overflow-hidden bg-[#edf0fa] py-20 sm:py-24">
          <div className="dot-grid pointer-events-none absolute right-0 top-0 h-72 w-72 opacity-30 [mask-image:linear-gradient(to_left,black,transparent)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20">
            <div className="reveal relative mx-auto w-full max-w-[560px]">
              <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-[#f0d1b8]/70" />
              <div className="relative overflow-hidden rounded-[2.25rem] border-[7px] border-white/80 shadow-xl">
                <SafeImage
                  src={IMAGES.careConversation}
                  fallback={IMAGES.consultation}
                  alt="A healthcare provider and patient discussing a care plan"
                  className="h-[430px] w-full object-cover sm:h-[540px]"
                />
              </div>
              <div className="absolute -bottom-7 -right-3 h-40 w-36 overflow-hidden rounded-[1.5rem] border-[6px] border-white shadow-xl sm:-right-7 sm:h-48 sm:w-44">
                <SafeImage src={IMAGES.wellness} fallback={IMAGES.lab} alt="Healthy nutrition and wellness" className="h-full w-full object-cover" />
              </div>
              <div className="float-slow absolute -left-4 top-1/3 hidden max-w-[205px] rounded-2xl bg-white p-4 shadow-xl sm:block lg:-left-8">
                <ShieldCheck size={24} className="text-[#cf7957]" />
                <p className="mt-2 text-sm font-semibold leading-5 text-[#273171]">Dual board-certified leadership</p>
                <p className="mt-1 text-xs leading-5 text-[#58658e]">Internal Medicine &amp; Obesity Medicine</p>
              </div>
            </div>

            <div className="reveal delay-1">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#cf7957]">
                <span className="h-px w-7 bg-[#cf7957]" /> Why KAR Medical Care
              </span>
              <h2 className="font-display mt-5 text-balance text-4xl leading-[1.08] tracking-[-0.035em] text-[#273171] sm:text-5xl">
                We see the whole picture—not just the chart.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#58658e]">
                Founded in 2023 by Dr. Jaspreet Kaur, KAR Medical Care grew from a simple idea: people deserve a physician who has time to listen. Today, our two Northern Virginia locations bring modern, evidence-based medicine and genuinely personal attention together.
              </p>
              <p className="mt-4 text-base leading-8 text-[#58658e]">
                Because primary care and metabolic health are deeply connected, we care for both under one roof—with coordinated follow-up instead of fragmented referrals.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Prevention & early diagnosis",
                  "Chronic condition management",
                  "Medical weight & metabolic care",
                  "Hormone and mental wellness support",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm font-medium text-[#49568d]">
                    <CircleCheck size={18} className="mt-0.5 shrink-0 text-[#cf7957]" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-9 grid grid-cols-3 gap-3 border-t border-[#d9def1] pt-7">
                {[
                  { value: "2023", label: "Practice founded" },
                  { value: "2", label: "VA locations" },
                  { value: "2", label: "Board certifications" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-3xl text-[#273171] sm:text-4xl">{stat.value}</p>
                    <p className="mt-1 text-xs leading-5 text-[#58658e]">{stat.label}</p>
                  </div>
                ))}
              </div>
              <a href="https://karmedicalcare.com/about-us/" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#273171] transition hover:gap-3">
                More about our story <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="relative overflow-hidden bg-[#273171] py-20 text-white sm:py-24">
          <div className="breathe pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#3c4a8f]/20" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full border-[60px] border-white/[0.035]" />
          <div className="relative mx-auto max-w-7xl px-5">
            <div className="reveal mx-auto max-w-2xl text-center">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#e6a17b]">How care works</span>
              <h2 className="font-display mt-4 text-balance text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">Simple, clear, and never rushed.</h2>
              <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">From your first call to your follow-up, every step is designed to make healthcare easier to navigate.</p>
            </div>
            <div className="relative mt-14 grid gap-8 md:grid-cols-3">
              <div className="pointer-events-none absolute left-[16%] right-[16%] top-9 hidden h-px bg-white/20 md:block" />
              {[
                { icon: CalendarDays, number: "01", title: "Book a time that works", text: "Schedule online, call, or text. Choose Springfield or Woodbridge and find a visit that fits your week." },
                { icon: MessageCircle, number: "02", title: "Be heard, not hurried", text: "Share your history, questions, and goals. Your provider takes time to understand the full picture." },
                { icon: ClipboardList, number: "03", title: "Leave with a clear plan", text: "Get understandable next steps, coordinated testing, and follow-up that supports lasting progress." },
              ].map((step, index) => (
                <div key={step.number} className={`reveal ${["delay-1", "delay-2", "delay-3"][index]} relative text-center`}>
                  <span className="relative mx-auto grid h-[72px] w-[72px] place-items-center rounded-full border border-white/20 bg-[#37448d] text-[#e6a17b] shadow-lg">
                    <step.icon size={27} />
                    <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-[#e6a17b] text-[10px] font-bold text-[#273171]">{step.number}</span>
                  </span>
                  <h3 className="font-display mt-7 text-2xl">{step.title}</h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-white/65">{step.text}</p>
                </div>
              ))}
            </div>
            <div className="reveal mt-14 flex flex-col items-center justify-between gap-5 rounded-[1.75rem] border border-white/15 bg-white/[0.07] p-6 backdrop-blur sm:p-8 lg:flex-row">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#e6a17b] text-[#273171]"><Clock3 size={22} /></span>
                <div>
                  <p className="font-display text-xl sm:text-2xl">Your health shouldn’t have to wait.</p>
                  <p className="mt-1 text-sm text-white/60">Same-day, next-day, weekend, and virtual options when available.</p>
                </div>
              </div>
              <button type="button" onClick={openBooking} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#273171] transition hover:bg-[#e5e8f7]">
                Find an appointment <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5">
            <div className="reveal mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#cf7957]">
                <Users size={14} /> The people behind your care
              </span>
              <h2 className="font-display mt-4 text-balance text-4xl leading-tight tracking-[-0.035em] text-[#273171] sm:text-5xl">Familiar faces. Genuine partnership.</h2>
              <p className="mt-4 text-sm leading-7 text-[#58658e] sm:text-base">Our providers combine deep clinical expertise with the kind of attention that makes every question feel welcome.</p>
            </div>
            <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
              {[
                { name: "Jaspreet Kaur, MD", role: "Physician · Founder", detail: "Dual board-certified in Internal Medicine and Obesity Medicine", image: IMAGES.drKaur, fallback: IMAGES.doctorFallback },
                { name: "Lauren Muckelvene, FNP", role: "Nurse Practitioner", detail: "Compassionate, patient-centered primary care and wellness support", image: IMAGES.lauren, fallback: IMAGES.doctorFallback2 },
              ].map((person, index) => (
                <article key={person.name} className={`reveal ${["delay-1", "delay-2", "delay-3"][index]} group overflow-hidden rounded-[2rem] border border-[#e1e4f0] bg-white transition hover:shadow-xl`}>
                  <div className="relative h-[360px] overflow-hidden bg-[#e5e8f7] sm:h-[420px]">
                    <SafeImage src={person.image} fallback={person.fallback} alt={person.name} className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]" />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1c2458]/50 to-transparent" />
                  </div>
                  <div className="relative -mt-8 rounded-t-[2rem] bg-white px-7 pb-7 pt-6">
                    <span className="absolute right-7 top-0 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-[#e6a17b] text-[#273171]"><HeartPulse size={19} /></span>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#cf7957]">{person.role}</p>
                    <h3 className="font-display mt-2 text-2xl text-[#273171]">{person.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#58658e]">{person.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="reviews" className="relative overflow-hidden bg-[#f2e6d9] py-20 sm:py-24">
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#e9c6a7]/70" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#b96345]">
                <span className="h-px w-7 bg-[#b96345]" /> Patient stories
              </span>
              <h2 className="font-display mt-5 text-balance text-4xl leading-[1.08] tracking-[-0.035em] text-[#273171] sm:text-5xl">
                The difference is in how <span className="italic">you’re heard.</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-8 text-[#6b6258]">
                Patients often tell us the same thing: they finally had time to ask questions, felt listened to, and left with a plan they understood.
              </p>
              <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-[#e1c9b4] bg-white/70 px-5 py-4">
                <span className="font-display grid h-10 w-10 place-items-center rounded-full bg-[#273171] text-lg font-bold text-white">G</span>
                <div>
                  <div className="flex gap-0.5 text-[#cf7957]">
                    {[0, 1, 2, 3, 4].map((star) => <Star key={star} size={13} fill="currentColor" strokeWidth={0} />)}
                  </div>
                  <p className="mt-1 text-xs font-semibold text-[#555c78]">From our Google patient reviews</p>
                </div>
              </div>
            </div>

            <div className="reveal delay-1 relative rounded-[2rem] bg-white p-7 shadow-[0_30px_80px_-45px_rgba(69,47,31,0.55)] sm:p-10">
              <Quote size={44} className="text-[#e6a17b]" fill="currentColor" strokeWidth={0} />
              <div className="mt-5 flex gap-1 text-[#cf7957]" aria-label="Five stars">
                {[0, 1, 2, 3, 4].map((star) => <Star key={star} size={16} fill="currentColor" strokeWidth={0} />)}
              </div>
              <blockquote className="font-display mt-6 min-h-[175px] text-balance text-xl leading-relaxed text-[#273171] sm:min-h-[160px] sm:text-2xl">
                “{activeTestimonial.quote}”
              </blockquote>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-[#e9e5dd] pt-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[#e5e8f7] text-sm font-bold text-[#273171]">{activeTestimonial.initials}</span>
                  <div>
                    <p className="text-sm font-semibold text-[#273171]">{activeTestimonial.name}</p>
                    <p className="text-xs text-[#8b9089]">Verified Google review</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button type="button" onClick={() => goToTestimonial(-1)} aria-label="Previous review" className="grid h-10 w-10 place-items-center rounded-full border border-[#e1e4f0] text-[#273171] transition hover:bg-[#edf0fa]">
                    <ChevronLeft size={18} />
                  </button>
                  <button type="button" onClick={() => goToTestimonial(1)} aria-label="Next review" className="grid h-10 w-10 place-items-center rounded-full bg-[#273171] text-white transition hover:bg-[#37448d]">
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
              <div className="mt-5 flex justify-center gap-1.5 lg:justify-start">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.quote.slice(0, 20)}
                    type="button"
                    onClick={() => setTestimonialIndex(index)}
                    aria-label={`Show review ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all ${index === testimonialIndex ? "w-7 bg-[#cf7957]" : "w-2 bg-[#e1e4f0]"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section id="locations" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5">
            <div className="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#cf7957]">
                  <MapPin size={14} /> Two convenient locations
                </span>
                <h2 className="font-display mt-5 text-balance text-4xl leading-tight tracking-[-0.035em] text-[#273171] sm:text-5xl">Care close to home.</h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#58658e] sm:text-base">Proudly serving adults in Springfield, Woodbridge, and surrounding Northern Virginia communities.</p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {locations.map((location, index) => (
                <article
                  key={location.city}
                  className={`reveal ${["delay-1", "delay-2", "delay-3"][index]} relative overflow-hidden rounded-[2rem] p-7 sm:p-9 ${location.dark ? "bg-[#273171] text-white" : "border border-[#e1e4f0] bg-white text-[#273171]"}`}
                >
                  <div className={`pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border-[35px] ${location.dark ? "border-white/[0.06]" : "border-[#edf0fa]"}`} />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className={`text-[11px] font-bold uppercase tracking-[0.2em] ${location.dark ? "text-[#e6a17b]" : "text-[#cf7957]"}`}>Northern Virginia</p>
                        <h3 className="font-display mt-2 text-3xl sm:text-4xl">{location.city}</h3>
                      </div>
                      <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${location.dark ? "bg-white/10 text-[#e6a17b]" : "bg-[#e9ebf9] text-[#273171]"}`}>
                        <MapPin size={22} />
                      </span>
                    </div>
                    <p className={`mt-6 whitespace-pre-line text-sm leading-7 ${location.dark ? "text-white/75" : "text-[#58658e]"}`}>{location.address}</p>
                    <div className={`mt-6 grid gap-4 border-t pt-6 sm:grid-cols-2 ${location.dark ? "border-white/15" : "border-[#e9ebf5]"}`}>
                      <div>
                        <p className={`text-[10px] font-bold uppercase tracking-[0.18em] ${location.dark ? "text-white/45" : "text-[#a0a8c9]"}`}>Office hours</p>
                        {location.hours.map((hour) => (
                          <p key={hour} className={`mt-1.5 text-xs font-medium ${location.dark ? "text-white/85" : "text-[#49568d]"}`}>{hour}</p>
                        ))}
                      </div>
                      <div>
                        <p className={`text-[10px] font-bold uppercase tracking-[0.18em] ${location.dark ? "text-white/45" : "text-[#a0a8c9]"}`}>Good to know</p>
                        <p className={`mt-1.5 text-xs leading-5 ${location.dark ? "text-white/85" : "text-[#49568d]"}`}>{location.note}</p>
                      </div>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <a href={location.map} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${location.dark ? "bg-[#e6a17b] text-[#273171] hover:bg-[#f0b693]" : "bg-[#273171] text-white hover:bg-[#37448d]"}`}>
                        Get directions <ArrowUpRight size={16} />
                      </a>
                      <a href={TEL} className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition ${location.dark ? "border-white/25 text-white hover:bg-white/10" : "border-[#d6daed] text-[#273171] hover:bg-[#edf0fa]"}`}>
                        <Phone size={15} /> {PHONE}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#edf0fa] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#cf7957]">
                <span className="h-px w-7 bg-[#cf7957]" /> Good questions
              </span>
              <h2 className="font-display mt-5 text-balance text-4xl leading-tight tracking-[-0.035em] text-[#273171] sm:text-5xl">A little clarity before your visit.</h2>
              <p className="mt-5 text-base leading-8 text-[#58658e]">Still wondering about something? Our friendly team is only a call or text away.</p>
              <a href={TEL} className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-[#273171] shadow-sm transition hover:shadow-xl">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#e6a17b]"><Phone size={18} /></span>
                Call or text {PHONE}
              </a>
            </div>
            <div className="reveal delay-1 space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div key={faq.question} className={`overflow-hidden rounded-2xl border transition ${isOpen ? "border-[#c5cbed] bg-white shadow-sm" : "border-[#dce0f0] bg-white/60"}`}>
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      <span className="text-sm font-semibold text-[#273171] sm:text-base">{faq.question}</span>
                      <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition ${isOpen ? "rotate-180 bg-[#273171] text-white" : "bg-[#e9ebf9] text-[#273171]"}`}>
                        <ChevronDown size={17} />
                      </span>
                    </button>
                    {isOpen && <div className="accordion-answer px-5 pb-6 text-sm leading-7 text-[#58658e] sm:px-6">{faq.answer}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-[#293575] px-5 py-20 text-white sm:py-24">
          <div className="pointer-events-none absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full border-[45px] border-white/[0.05]" />
          <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-9 lg:flex-row lg:items-center">
            <div className="reveal max-w-3xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#e6a17b]">Your next step</span>
              <h2 className="font-display mt-5 text-balance text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-[3.7rem]">
                A healthier chapter can start with one conversation.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/65">
                Whether it’s an annual physical, a new concern, or a long-term health goal, we’re here to help you move forward with confidence.
              </p>
            </div>
            <div className="reveal delay-1 flex w-full shrink-0 flex-col gap-3 sm:w-auto">
              <button type="button" onClick={openBooking} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e6a17b] px-7 py-4 text-sm font-bold text-[#273171] transition hover:bg-[#f0b693]">
                Book your visit <ArrowUpRight size={17} />
              </button>
              <a href={TEL} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10">
                <Phone size={16} /> Call or text {PHONE}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1c2458] pt-16 text-white/65">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
            <div>
              <a href="#top" className="inline-flex items-center" aria-label="Privia Medical Group, back to top">
                <img src={priviaLogo} alt="Privia Medical Group" className="h-auto w-[170px]" />
              </a>
              <p className="mt-5 max-w-xs text-sm leading-7">
                Personalized primary care and physician-led medical weight loss for adults in Springfield, Woodbridge, and the greater D.C. metro area.
              </p>
              <div className="mt-6 flex flex-col gap-2.5 text-sm">
                <a href={TEL} className="inline-flex items-center gap-2 transition hover:text-white"><Phone size={15} className="text-[#e6a17b]" /> {PHONE}</a>
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 break-all transition hover:text-white"><Mail size={15} className="text-[#e6a17b]" /> {EMAIL}</a>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Our care</h3>
              <ul className="mt-5 space-y-3 text-sm">
                <li><a href="https://karmedicalcare.com/primary-care/" target="_blank" rel="noreferrer" className="transition hover:text-white">Primary care</a></li>
                <li><a href="https://karmedicalcare.com/immediate-care/" target="_blank" rel="noreferrer" className="transition hover:text-white">Immediate care</a></li>
                <li><a href="https://karmedicalcare.com/medical-weight-loss/" target="_blank" rel="noreferrer" className="transition hover:text-white">Medical weight loss</a></li>
                <li><a href="https://karmedicalcare.com/hormone-health-for-men-women-in-woodbridge-springfield-va/" target="_blank" rel="noreferrer" className="transition hover:text-white">Hormone health</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Explore</h3>
              <ul className="mt-5 space-y-3 text-sm">
                <li><a href="#about" className="transition hover:text-white">About us</a></li>
                <li><a href="#team" className="transition hover:text-white">Our team</a></li>
                <li><a href="#reviews" className="transition hover:text-white">Patient reviews</a></li>
                <li><a href="#locations" className="transition hover:text-white">Locations</a></li>
                <li><a href="https://karmedicalcare.com/blog/" target="_blank" rel="noreferrer" className="transition hover:text-white">Health articles</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Visit us</h3>
              <div className="mt-5 space-y-4 text-sm leading-6">
                <p><span className="block font-semibold text-white">Springfield</span>5510 Alma Ln, STE 110<br />Springfield, VA 22151</p>
                <p><span className="block font-semibold text-white">Woodbridge</span>2200 Opitz Blvd, Ste 320<br />Woodbridge, VA 22191</p>
              </div>
              <button type="button" onClick={openBooking} className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                Book an appointment <ArrowUpRight size={15} />
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 border-t border-white/10 py-6 text-xs sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} KAR Medical Care. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <span>Proudly part of Privia Medical Group</span>
              <a href="#top" className="inline-flex items-center gap-1 font-semibold text-white transition hover:text-[#e6a17b]">Back to top <ArrowUpRight size={13} /></a>
            </div>
          </div>
        </div>
      </footer>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
