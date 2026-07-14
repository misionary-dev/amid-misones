import Image from "next/image";
import Link from "next/link";
import { services, patients, testimonials } from "@/content/site";
import { ContactForm } from "@/components/ContactForm";
import { FaStar } from "react-icons/fa";

function ServiceIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    home: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    nutrition: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    brain: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    physio: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    nurse: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  };
  return <>{icons[icon]}</>;
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <Image
          src="/images/hero-home.jpg"
          alt="Profesional de salud atendiendo paciente en domicilio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <span className="inline-block px-4 py-1.5 bg-amid-blue/90 text-white text-xs font-semibold uppercase tracking-wider rounded">
            AMID - Internación Domiciliaria
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading leading-tight max-w-2xl">
            BIENESTAR EN TU CASA
          </h1>
          <p className="mt-6 text-lg text-white/90 max-w-xl leading-relaxed">
            En lugar de pasar tiempo en un hospital o centro de salud, podés recuperarte en la
            comodidad de tu casa, rodeado de tus seres queridos y en un ambiente familiar. Porque el
            mejor lugar para sanar es tu hogar, confiá en nosotros.
          </p>
          <Link
            href="#contacto"
            className="mt-8 inline-block px-8 py-3.5 bg-amid-blue text-white font-semibold uppercase text-sm tracking-wide rounded hover:bg-amid-navy-light transition-colors"
          >
            Contactanos
          </Link>
        </div>
      </section>

      {/* Servicios */}
      <section className="relative -mt-20 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service, i) => (
            <Link
              key={service.title}
              href="#contacto"
              className="group p-6 rounded-lg text-white text-center transition-transform hover:-translate-y-1"
              style={{
                backgroundColor: `hsl(210, ${65 + i * 5}%, ${28 + i * 4}%)`,
              }}
            >
              <div className="flex justify-center mb-4 opacity-90 group-hover:opacity-100">
                <ServiceIcon icon={service.icon} />
              </div>
              <h3 className="font-heading font-bold text-sm uppercase mb-2">{service.title}</h3>
              <p className="text-xs opacity-80 leading-relaxed">{service.description}</p>
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
                  <p className="text-sm text-amid-text mt-1">
                    Av. Aguado 2111. N3300 Posadas, Misiones.
                  </p>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-amid-dark">Teléfono</h4>
                  <p className="text-sm text-amid-text mt-1">3764326720 - 3764335998</p>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-amid-dark">Email</h4>
                  <p className="text-sm text-amid-text mt-1">
                    internaciondomiciliaria@amidmisiones.com
                  </p>
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
