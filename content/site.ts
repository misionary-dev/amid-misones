export const siteConfig = {
  name: "AMID",
  fullName: "AMID | Internación Domiciliaria",
  description: "Somos una Empresa dedicada a la internación domiciliaria.",
  tagline: "BIENESTAR EN TU CASA",
  address: "Av. Aguado 2111. N3300 Posadas, Misiones.",
  phones: ["3764326720", "3764335998"],
  whatsapp: "3764906720",
  email: "internaciondomiciliaria@amidmisiones.com",
  social: {
    facebook: "https://www.facebook.com/amidsalud",
    instagram: "https://www.instagram.com/amid_misiones/",
  },
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Noticias", href: "/noticias" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Curriculums", href: "/curriculums" },
  ],
} as const;

export const services = [
  {
    title: "INTERNACIÓN DOMICILIARIA",
    description: "Reciba atención médica en la comodidad de su hogar.",
    icon: "home",
  },
  {
    title: "NUTRICIÓN DOMICILIARIA",
    description: "Mejore su salud y bienestar con nutrición especializada en su hogar.",
    icon: "nutrition",
  },
  {
    title: "PSICOLOGÍA DOMICILIARIA",
    description: "Supere sus desafíos emocionales en su propio espacio.",
    icon: "brain",
  },
  {
    title: "KINESIOLOGÍA DOMICILIARIA",
    description: "Mejore su movilidad y calidad de vida en casa.",
    icon: "physio",
  },
  {
    title: "ENFERMERÍA DOMICILIARIA",
    description: "Obtenga cuidados de enfermería especializados en casa para una pronta recuperación.",
    icon: "nurse",
  },
] as const;

export const patients = [
  {
    title: "Pacientes con movilidad reducida o dependencia funcional",
    items: [
      "Adultos mayores con fragilidad o dificultades para trasladarse.",
      "Personas con enfermedades neurodegenerativas (Alzheimer, Parkinson, ELA, etc.).",
      "Pacientes con secuelas de ACV o traumatismos que limitan su movilidad.",
    ],
  },
  {
    title: "Pacientes con enfermedades crónicas complejas",
    items: [
      "Insuficiencia cardíaca, EPOC, insuficiencia renal avanzada.",
      "Diabetes con complicaciones que requieren monitoreo continuo.",
      "Pacientes con hipertensión arterial descontrolada o riesgo cardiovascular elevado.",
    ],
  },
  {
    title: "Pacientes en cuidados paliativos",
    items: [
      "Personas con enfermedades terminales que requieren control del dolor y síntomas.",
      "Pacientes oncológicos en tratamiento avanzado o etapa final de la enfermedad.",
      "Personas con enfermedades crónicas en etapa final que desean permanecer en casa.",
    ],
  },
  {
    title: "Pacientes con necesidad de rehabilitación en el hogar",
    items: [
      "Postquirúrgicos que requieren recuperación funcional.",
      "Pacientes con fracturas, prótesis recientes o lesiones neurológicas.",
      "Personas con dificultades para la deglución o comunicación.",
    ],
  },
  {
    title: "Familias y cuidadores",
    items: [
      "Brindamos apoyo, educación y asesoramiento a quienes cuidan a los pacientes.",
      "Capacitamos sobre administración de medicación, prevención de úlceras, cuidados posturales, etc.",
      "Ofrecemos además orientación emocional y toma de decisiones en cuidados paliativos.",
    ],
  },
] as const;

export const testimonials = [
  {
    name: "Rous Alcaraz Pipi",
    source: "Valoración Facebook",
    rating: 5,
    text: "Excelente servicio de profesionales, mi padre fue atendido muy bien en su domicilio en sus últimos días. Eso es fundamental cuando uno tiene un ser querido y enfermo. Muchas gracias.",
  },
  {
    name: "Mai Baez",
    source: "Valoración Facebook",
    rating: 5,
    text: "Expresar profesionalismo, transmitir tranquilidad, mostrar buen trato y generar confianza son cualidades excepcionales que el equipo de AMID salud ofrece a los pacientes. Me siento muy agradecida por su impecable labor hacia mi padre.",
  },
  {
    name: "Camila Arruti",
    source: "Valoración Google",
    rating: 5,
    text: "Buenísima atención! Muy recomendable.",
  },
] as const;
