import sharp from "sharp";

// Genera los favicons PNG a partir del avatar (Safari no soporta WebP como favicon).
await sharp("public/avatar.webp")
  .resize(32, 32)
  .png()
  .toFile("public/favicon.png");

await sharp("public/avatar.webp")
  .resize(180, 180)
  .png()
  .toFile("public/apple-touch-icon.png");

console.log("public/favicon.png y public/apple-touch-icon.png generados");
