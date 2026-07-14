import Link from "next/link";
import { siteConfig } from "@/content/site";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-amid-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="text-sm leading-relaxed opacity-80">
            {siteConfig.description}
          </p>
          <div className="flex gap-3 mt-4">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-amid-blue transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-amid-blue transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading font-bold text-lg mb-4">Información de contacto</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Dirección: {siteConfig.address}</li>
            <li>Email: {siteConfig.email}</li>
            <li>Teléfono: {siteConfig.phones.join(" - ")}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-bold text-lg mb-4">Links Rápidos</h3>
          <ul className="space-y-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs opacity-60">
        © {new Date().getFullYear()} AMID Misiones. Todos los derechos reservados.
      </div>
    </footer>
  );
}
