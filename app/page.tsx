import Link from "next/link";
import { services, patients, testimonials, siteConfig } from "@/content/site";
import { ContactForm } from "@/components/ContactForm";
import { HeroSlider } from "@/components/HeroSlider";
import { FaStar } from "react-icons/fa";

function ServiceIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    home: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    nutrition: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    brain: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    physio: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    nurse: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  };
  return <>{icons[icon]}</>;
}

export default function HomePage() {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider images={siteConfig.heroImages} />

      {/* Servicios - Premium Cards */}
      <section className="relative -mt-24 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {services.map((service) => (
            <Link
              key={service.title}
              href="#contacto"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amid-navy to-amid-navy-light p-6 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-14 h-14 mx-auto rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <ServiceIcon icon={service.icon} />
                </div>
                <h3 className="font-heading font-bold text-xs uppercase tracking-wider mb-2">
                  {service.title}
                </h3>
                <p className="text-[11px] opacity-70 leading-relaxed group-hover:opacity-90 transition-opacity">
                  {service.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-amid-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </div>
      </section>

      {/* Pacientes */}
      <section className="py-20 bg-amid-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amid-blue font-semibold uppercase text-sm tracking-wide">Pacientes</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-amid-dark font-heading">
            Tipos de pacientes que atendemos
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patients.map((patient, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading font-bold text-amid-dark mb-3">
                  {i + 1}. {patient.title}
                </h3>
                <ul className="space-y-2">
                  {patient.items.map((item, j) => (
                    <li key={j} className="text-sm text-amid-text flex gap-2">
                      <span className="text-amid-blue mt-1 shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amid-blue font-semibold uppercase text-sm tracking-wide text-center">
            Testimonios
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-amid-dark font-heading text-center">
            Experiencias de pacientes
          </h2>
          <p className="mt-4 text-amid-text text-center max-w-2xl mx-auto">
            Acompañanos en este viaje lleno de testimonios emocionantes que muestran el impacto
            positivo que hemos tenido en la vida de aquellos a quienes servimos.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-amid-text leading-relaxed italic mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-heading font-bold text-amid-dark">{t.name}</p>
                  <p className="text-xs text-amid-text/70">{t.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-amid-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-amid-dark font-heading">
                Contactanos
              </h2>
              <div className="mt-8 space-y-6">
                <div>
                  <h4 className="font-heading font-bold text-amid-dark">Dirección</h4>
                  <p className="text-sm text-amid-text mt-1">{siteConfig.address}</p>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-amid-dark">Teléfono</h4>
                  <p className="text-sm text-amid-text mt-1">{siteConfig.phones.join(" - ")}</p>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-amid-dark">Email</h4>
                  <p className="text-sm text-amid-text mt-1">{siteConfig.email}</p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
