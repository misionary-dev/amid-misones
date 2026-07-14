import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-722972c3a3ad4b6b925b35a66872ae55.r2.dev",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/2025/04/25/seguimos-fortaleciendo-alianzas-para-mejorar-la-calidad-del-cuidado-domiciliario/",
        destination: "/noticias/seguimos-fortaleciendo-alianzas-para-mejorar-la-calidad-del-cuidado-domiciliario",
        permanent: true,
      },
      {
        source: "/2025/04/22/cuando-el-hogar-se-vuelve-el-mejor-lugar-para-sanar-el-caso-de-michael-y-la-importancia-de-la-internacion-domiciliaria/",
        destination: "/noticias/cuando-el-hogar-se-vuelve-el-mejor-lugar-para-sanar-el-caso-de-michael-y-la-importancia-de-la-internacion-domiciliaria",
        permanent: true,
      },
      {
        source: "/noticias/",
        destination: "/noticias",
        permanent: true,
      },
      {
        source: "/nosotros/",
        destination: "/nosotros",
        permanent: true,
      },
      {
        source: "/curriculums/",
        destination: "/curriculums",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
