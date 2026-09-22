import sharp from "sharp";

const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ffffff" stroke-opacity="0.02" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="#131118"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="4" fill="#a06ef5"/>

  <text x="80" y="110" font-family="Consolas, 'Courier New', monospace" font-size="30">
    <tspan fill="#a06ef5">~/</tspan><tspan fill="#ececf1">devparada</tspan>
  </text>

  <text x="76" y="320" font-family="'Segoe UI', 'Helvetica Neue', sans-serif" font-size="88" font-weight="700" fill="#ececf1">Raúl Parada de la Fuente</text>

  <text x="80" y="420" font-family="Consolas, 'Courier New', monospace" font-size="42" fill="#a06ef5">&gt; Full Stack Developer</text>

  <text x="80" y="560" font-family="Consolas, 'Courier New', monospace" font-size="26" fill="#6f6a7a">github.com/devparada&#160;&#160;&#183;&#160;&#160;devparada.dev</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/og.png");
console.log("public/og.png generado");
