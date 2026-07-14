import type { Metadata } from "next";
import { FaEnvelope } from "react-icons/fa";
import { Accordion } from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Curriculums",
};

const values = [
  {
    title: "Compromiso con la humanidad",
    description:
      "Brindando servicios de cuidado integral que honren la dignidad y el respeto de cada paciente.",
  },
  {
    title: "Innovación en el cuidado",
    description:
      "Líder en la innovación en el cuidado de pacientes en el hogar, mediante la implementación de nuevas tecnologías y prácticas que mejoren la eficiencia y la calidad de los servicios de cuidado.",
  },
  {
    title: "Trabajo en equipo",
    description:
      "Trabajamos juntos para proporcionar la mejor atención posible para los pacientes y sus familias.",
  },
  {
    title: "Cuidado médico profesional",
    description:
      "El servicio de internación domiciliaria debe proporcionar cuidado médico profesional de calidad que incluya monitoreo y tratamiento médico, administración de medicamentos, y manejo de síntomas y efectos secundarios.",
  },
  {
    title: "Seguridad y confort",
    description:
      "El servicio de internación domiciliaria debe garantizar la seguridad y el confort del paciente en todo momento. Esto puede incluir la prevención de caídas y lesiones, el manejo adecuado del dolor, y la adaptación de la vivienda para satisfacer las necesidades específicas del paciente.",
  },
];

const faqs = [
  {
    question: "¿Qué es la internación domiciliaria?",
    answer:
      "La internación domiciliaria es un tipo de atención médica en la que los pacientes reciben atención médica y asistencia en su hogar en lugar de ser hospitalizados en un centro médico.",
  },
  {
    question: "¿Qué servicios ofrece una empresa de internación domiciliaria?",
    answer:
      "Una empresa de internación domiciliaria ofrece una amplia variedad de servicios, como atención médica especializada, asistencia personal, terapia ocupacional y coordinación de atención médica, entre otros.",
  },
  {
    question:
      "¿Quiénes son los profesionales de atención médica que trabajan en una empresa de internación domiciliaria?",
    answer:
      "Una empresa de internación domiciliaria puede contar con enfermeros/as, asistentes personales de atención domiciliaria, terapeutas ocupacionales, trabajadores sociales y coordinadores de atención domiciliaria, entre otros profesionales de atención médica.",
  },
  {
    question: "¿Qué tipos de pacientes son elegibles para la internación domiciliaria?",
    answer:
      "Los pacientes que requieren atención médica y asistencia personalizada de alta calidad, pero que no necesitan hospitalización, son candidatos para la internación domiciliaria. Esto puede incluir pacientes con enfermedades crónicas, discapacidades físicas, pacientes en proceso de rehabilitación, entre otros.",
  },
];

export default function CurriculumsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-amid-navy py-16 text-white text-center">
        <h1 className="text-4xl font-heading font-bold">Curriculums</h1>
      </section>

      {/* Valores */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amid-dark font-heading">
            Te contamos nuestros valores
          </h2>
          <p className="mt-2 text-amid-blue font-semibold text-sm uppercase tracking-wide">
            Para que trabajes con nosotros
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading font-bold text-amid-dark mb-2">{value.title}</h3>
                <p className="text-sm text-amid-text leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Postulate */}
      <section className="py-16 bg-amid-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-amid-dark font-heading">
            En este momento buscamos
          </h2>
          <div className="mt-8">
            <a
              href="mailto:internaciondomiciliaria@amidmisiones.com?subject=Postulaci%C3%B3n%20-%20AMID"
              className="inline-flex items-center gap-3 px-8 py-4 bg-amid-blue text-white font-semibold rounded-lg hover:bg-amid-navy-light transition-colors text-lg"
            >
              <FaEnvelope className="w-5 h-5" />
              Postulate
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amid-dark font-heading mb-8">
            Preguntas frecuentes
          </h2>
          <Accordion items={faqs} />
        </div>
      </section>
    </>
  );
}
