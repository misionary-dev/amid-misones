import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { noticias } from "@/content/noticias";

export const metadata: Metadata = {
  title: "Noticias",
};

export default function NoticiasPage() {
  return (
    <>
      <section className="bg-amid-navy py-16 text-white text-center">
        <h1 className="text-4xl font-heading font-bold">Noticias</h1>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {noticias.map((noticia) => (
              <article
                key={noticia.slug}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="relative h-48 sm:h-56">
                  <Image
                    src={noticia.image}
                    alt={noticia.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <time className="text-xs text-amid-text/60 uppercase tracking-wide">
                    {new Date(noticia.date).toLocaleDateString("es-AR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="mt-2 text-xl font-heading font-bold text-amid-dark">
                    <Link
                      href={`/noticias/${noticia.slug}`}
                      className="hover:text-amid-blue transition-colors"
                    >
                      {noticia.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm text-amid-text leading-relaxed">{noticia.excerpt}</p>
                  <Link
                    href={`/noticias/${noticia.slug}`}
                    className="inline-block mt-4 text-sm font-semibold text-amid-blue hover:text-amid-navy-light transition-colors"
                  >
                    Leer →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
