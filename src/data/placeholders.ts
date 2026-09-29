/**
 * Local SVG placeholders for the Framer `<asset>` images that weren't included in the export.
 * Swap these for real files in /public (or imports from src/assets) when you have them.
 */
const svg = (body: string, w: number, h: number) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice">${body}</svg>`,
  )}`;

/** Monochrome portrait: soft gradient with a head-and-shoulders silhouette. */
export function portrait(seed: number) {
  const light = 28 + ((seed * 17) % 22);
  const dark = 6 + ((seed * 7) % 8);
  return svg(
    `<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="hsl(0 0% ${light}%)"/><stop offset="1" stop-color="hsl(0 0% ${dark}%)"/>
    </linearGradient></defs>
    <rect width="300" height="400" fill="url(#g)"/>
    <circle cx="150" cy="165" r="62" fill="hsl(0 0% ${dark + 4}%)"/>
    <path d="M40 400c0-80 50-130 110-130s110 50 110 130z" fill="hsl(0 0% ${dark + 4}%)"/>`,
    300,
    400,
  );
}

/** Abstract artwork for project / article / service thumbnails. */
export function artwork(seed: number, w = 1200, h = 900) {
  const a = (seed * 53) % 360;
  const cx = 30 + ((seed * 37) % 40);
  const cy = 30 + ((seed * 29) % 40);
  return svg(
    `<defs>
      <radialGradient id="r" cx="${cx}%" cy="${cy}%" r="75%">
        <stop offset="0" stop-color="hsl(${a} 12% 42%)"/>
        <stop offset="0.55" stop-color="hsl(${a} 8% 14%)"/>
        <stop offset="1" stop-color="hsl(${a} 6% 4%)"/>
      </radialGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#r)"/>
    <g fill="none" stroke="hsl(0 0% 100% / 0.08)" stroke-width="2">
      ${Array.from({ length: 7 }, (_, i) => `<circle cx="${(cx / 100) * w}" cy="${(cy / 100) * h}" r="${80 + i * 90}"/>`).join("")}
    </g>`,
    w,
    h,
  );
}

/** Client/project wordmark used for logo tickers and testimonial cards. */
export function wordmark(name: string, width = name.length * 11 + 36) {
  const shapes = [
    `<circle cx="12" cy="15" r="10"/>`,
    `<rect x="2" y="5" width="20" height="20"/>`,
    `<path d="M12 4l11 22H1z"/>`,
    `<path d="M2 15a10 10 0 0 1 20 0z M2 17h20v8H2z"/>`,
  ];
  const shape = shapes[name.length % shapes.length];
  return svg(
    `<g fill="#fff">${shape}<text x="30" y="21" font-family="Inter Display, Inter, system-ui, sans-serif" font-weight="600" font-size="17" letter-spacing="-0.3">${name}</text></g>`,
    width,
    30,
  );
}
