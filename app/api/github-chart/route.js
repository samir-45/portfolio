import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const res = await fetch('https://ghchart.rshah.org/6366f1/samir-45', {
      next: { revalidate: 3600 },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      },
    });

    if (res.ok) {
      let svg = await res.text();
      // Inject viewBox and responsive properties
      svg = svg.replace(
        /<svg\s+([^>]*?)width="663"\s+height="104">/,
        '<svg $1viewBox="0 0 663 104" width="100%" height="auto" preserveAspectRatio="xMidYMid meet">'
      );

      return new Response(svg, {
        headers: {
          'Content-Type': 'image/svg+xml; charset=utf-8',
          'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
        },
      });
    }
  } catch (err) {
    console.error('Failed to fetch remote ghchart, falling back to local snapshot:', err.message);
  }

  // Fallback to local responsive SVG snapshot
  try {
    const filePath = path.join(process.cwd(), 'public', 'github-chart.svg');
    const svg = fs.readFileSync(filePath, 'utf8');
    return new Response(svg, {
      headers: {
        'Content-Type': 'image/svg+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (fallbackErr) {
    return new Response('<svg viewBox="0 0 663 104" width="100%" height="auto"></svg>', {
      headers: { 'Content-Type': 'image/svg+xml' },
    });
  }
}
