import type { NextConfig } from "next";

const nextConfig : NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        port: '', // Deixe vazio para usar a porta padrão
        pathname: '/**', // Permite todos os caminhos sob este domínio
      },
    ],
  },
};

export default nextConfig;

