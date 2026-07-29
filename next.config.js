/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
      { protocol: 'https', hostname: 'brandlogos.net' },
      { protocol: 'https', hostname: 'img.daisyui.com' },
      { protocol: 'https', hostname: 'svgstack.com' },
      { protocol: 'https', hostname: 'www.svgrepo.com' },
      { protocol: 'https', hostname: 'logo.svgcdn.com' },
      { protocol: 'https', hostname: 'web.programming-hero.com' },
      { protocol: 'https', hostname: 'drive.google.com' },
      { protocol: 'https', hostname: 'gw.alipayobjects.com' },
      { protocol: 'https', hostname: 'iconlogovector.com' },
      { protocol: 'https', hostname: 'cdn.10minuteschool.com' },
    ],
  },
};

module.exports = nextConfig;
