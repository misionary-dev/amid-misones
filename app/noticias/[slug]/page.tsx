import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { noticias, getNoticia } from "@/content/noticias";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return noticias.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const noticia = getNoticia(slug);
  if (!noticia) return {};
  return { title: noticia.title };
}

export default async function NoticiaPage({ params }: Props) {
  const { slug } = await params;
  const noticia = getNoticia(slug);
  if (!noticia) notFound();

  const otherNoticias = noticias.filter((n) => n.slug !== slug);

  return (
    <>
      <section className="relative h-64 sm:h-80">
        <Image
          src={noticia.image}
          alt={noticia.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-amid-navy/70" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <time className="text-xs text-white/60 uppercase tracking-wide">
              {new Date(noticia.date).toLocaleDateString("es-AR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="mt-2 text-2xl sm:text-3xl font-heading font-bold text-white leading-tight">
              {noticia.title}
            </h1>
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-amid-text">
            {noticia.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <ul key={i} className="list-disc pl-6 space-y-1 my-4">
                    {items.map((item, j) => (
                      <li key={j} className="text-base leading-relaxed">
                        {item.replace("- ", "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-base leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </article>

      {otherNoticias.length > 0 && (
        <section className="py-12 bg-amid-gray">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-bold text-amid-dark mb-6">
              También te puede gustar
            </h2>
            {otherNoticias.map((n) => (
              <Link
                key={n.slug}
                href={`/noticias/${n.slug}`}
                className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading font-semibold text-amid-dark hover:text-amid-blue transition-colors">
                  {n.title}
                </h3>
                <p className="text-sm text-amid-text mt-1">{n.excerpt.slice(0, 120)}...</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
