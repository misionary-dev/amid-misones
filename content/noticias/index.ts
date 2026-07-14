import { CDN } from "../site";

export interface Noticia {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  content: string;
}

export const noticias: Noticia[] = [
  {
    slug: "seguimos-fortaleciendo-alianzas-para-mejorar-la-calidad-del-cuidado-domiciliario",
    title: "Seguimos fortaleciendo alianzas para mejorar la calidad del cuidado domiciliario",
    excerpt:
      "Desde AMID MISIONES tenemos el agrado de comunicar una nueva y valiosa alianza estratégica que reafirma nuestro compromiso con la excelencia en la atención médica domiciliaria.",
    date: "2025-04-25",
    image: `${CDN}/nota-alianzas.JPG`,
    content: `Desde AMID MISIONES tenemos el agrado de comunicar una nueva y valiosa alianza estratégica que reafirma nuestro compromiso con la excelencia en la atención médica domiciliaria. En los últimos días, hemos mantenido una reunión de trabajo con representantes de la empresa BestCare – Nutricia Bagó, especializada en soporte nutricional domiciliario, perteneciente a la división de nutrición médica de Danone.

Participaron de este encuentro el Dr. Agustín Matarrese, Coordinador General de Profesionales de la Salud, el Dr. Facundo Ravotti, y el Gerente Comercial, Lucas Giordano, quienes compartieron la visión, trayectoria y proyección de BestCare, empresa con presencia en más de 10 países, que brinda asistencia a más de 200.000 pacientes y cuenta con la certificación del ITAES (Instituto Técnico para la Acreditación de Establecimientos de Salud), lo que respalda la calidad y seguridad de sus servicios.

Durante la reunión, se establecieron los lineamientos generales y objetivos de trabajo conjunto, formalizando un convenio que permitirá integrar a nuestros servicios domiciliarios un sistema de soporte nutricional especializado, adaptado a las necesidades particulares de cada paciente, tanto en situaciones agudas como en enfermedades crónicas que requieren asistencia prolongada en el hogar.

Este convenio representa un importante avance en nuestra misión institucional: brindar una atención médica integral, personalizada y humanizada, centrada en el paciente y su entorno. La incorporación de un equipo especializado en nutrición parenteral y enteral domiciliaria no solo amplía nuestras prestaciones, sino que también fortalece el abordaje interdisciplinario que nos caracteriza.

En AMID MISIONES entendemos que la alimentación es un pilar fundamental en la recuperación, el bienestar y la calidad de vida de nuestros pacientes. Por eso, sumar a un aliado estratégico como BestCare es motivo de gran orgullo y satisfacción.

Seguiremos trabajando con dedicación, compromiso y profesionalismo, siempre enfocados en mejorar cada día, acompañando a nuestros pacientes desde el corazón de su hogar.`,
  },
  {
    slug: "cuando-el-hogar-se-vuelve-el-mejor-lugar-para-sanar-el-caso-de-michael-y-la-importancia-de-la-internacion-domiciliaria",
    title:
      "Cuando el hogar se vuelve el mejor lugar para sanar: el caso de Michael y la importancia de la internación domiciliaria",
    excerpt:
      "Hace algunas semanas, el país entero se conmovió con la historia de Michael Natanael Verón, un joven cabo del Ejército que sufrió graves lesiones en la columna tras un trágico accidente en un cuartel de Misiones.",
    date: "2025-04-22",
    image: `${CDN}/nota-michael.png`,
    content: `Hace algunas semanas, el país entero se conmovió con la historia de Michael Natanael Verón, un joven cabo del Ejército que sufrió graves lesiones en la columna tras un trágico accidente en un cuartel de Misiones. Hoy, su recuperación transcurre entre salas de terapia intensiva, tratamientos complejos y el incondicional acompañamiento de su familia.

Desde AMID, empresa de salud con fuerte presencia en Posadas, Misiones, nos sentimos profundamente interpelados por situaciones como la de Michael. Porque detrás de cada paciente crítico, hay una familia que espera, que lucha y que desea, más que nada, ver a su ser querido recuperarse en un entorno de contención y dignidad.

La internación domiciliaria surge como una alternativa segura, humana y eficaz para muchas personas que, como Michael, requieren una atención médica integral, pero que también pueden beneficiarse enormemente de estar en su hogar, rodeados de afecto, lejos del estrés hospitalario.

En AMID ofrecemos un abordaje multidisciplinario adaptado a las necesidades de cada paciente:

- Enfermería especializada las 24 horas
- Rehabilitación con kinesiólogos y fisioterapeutas domiciliarios
- Psicólogos y psiquiatras para el acompañamiento emocional
- Nutricionistas que supervisan y adaptan el plan alimentario
- Acompañantes terapéuticos que colaboran con la rutina diaria

Casos como el de Michael nos recuerdan que el cuidado va más allá de lo clínico. También se trata de estar cerca, de acompañar procesos largos y difíciles con respeto y profesionalismo. Y eso es lo que hacemos cada día en AMID.

Desde acá, enviamos toda nuestra fuerza a su familia. Y reafirmamos nuestro compromiso con la salud domiciliaria como pilar para una recuperación más humana y sostenible.`,
  },
];

export function getNoticia(slug: string): Noticia | undefined {
  return noticias.find((n) => n.slug === slug);
}
