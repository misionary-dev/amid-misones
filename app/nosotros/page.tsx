import type { Metadata } from "next";
import Image from "next/image";
import { team, aboutText, howWeWork } from "@/content/team";
import { siteConfig } from "@/content/site";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Nosotros",
};

export default function NosotrosPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-amid-navy py-16 text-white text-center">
        <h1 className="text-4xl font-heading font-bold">Nosotros</h1>
      </section>

      {/* Sobre nosotros */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amid-blue font-semibold uppercase text-sm tracking-wide">
                Sobre nosotros
              </p>
              <h2 className="mt-2 text-3xl font-bold text-amid-dark font-heading">
                ¿Quiénes somos?
              </h2>
              <p className="mt-6 text-amid-text leading-relaxed">{aboutText}</p>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/equipo.png"
                alt="Equipo AMID Misiones"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-16 bg-amid-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amid-blue font-semibold uppercase text-sm tracking-wide text-center">
            Nuestros expertos
          </p>
          <p className="mt-2 text-amid-text text-center max-w-2xl mx-auto">
            Nuestros expertos son profesionales altamente capacitados y experimentados en sus
            respectivas áreas, comprometidos con brindar soluciones innovadoras y eficaces.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-amid-navy/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-heading font-bold text-amid-navy">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-amid-dark">{member.name}</h3>
                <p className="text-sm text-amid-text mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo trabajamos + Contacto */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-amid-dark font-heading">
                ¿Cómo trabajamos?
              </h2>
              <p className="mt-4 text-amid-text leading-relaxed">{howWeWork}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-amid-dark font-heading mb-6">
                ¿Dónde estamos?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaWhatsapp className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-amid-dark">WhatsApp</p>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-amid-blue hover:underline"
                    >
                      Enviar mensaje por WhatsApp
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="w-5 h-5 text-amid-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-amid-dark">Oficina</p>
                    <p className="text-sm text-amid-text">
                      Av. Aguado 2111 (esquina Acevedo) N3300, Posadas, Misiones.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaEnvelope className="w-5 h-5 text-amid-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-amid-dark">Correo</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm text-amid-blue hover:underline"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
