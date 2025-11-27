// Script para generar logo.png, og-image.jpg y favicons
// Requiere: npm install canvas --save-dev
// Ejecutar: node scripts/generate-assets.js

const fs = require('fs');
const path = require('path');

// SVG del logo (sin líneas laterales)
const logoSVG = `<svg width="512" height="512" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="80" stroke="#1e40af" stroke-width="4" fill="none"/>
  <path
    d="M60 100 L70 60 L80 140 L90 40 L100 160 L110 50 L120 150 L130 70 L140 130"
    stroke="#1e40af"
    stroke-width="4"
    fill="none"
    stroke-linecap="round"
  />
</svg>`;

// SVG para OG Image (con texto)
const ogImageSVG = `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Fondo gradiente -->
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1e40af;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bgGradient)"/>
  
  <!-- Logo -->
  <g transform="translate(100, 100)">
    <circle cx="100" cy="100" r="80" stroke="white" stroke-width="6" fill="none"/>
    <path
      d="M60 100 L70 60 L80 140 L90 40 L100 160 L110 50 L120 150 L130 70 L140 130"
      stroke="white"
      stroke-width="6"
      fill="none"
      stroke-linecap="round"
    />
  </g>
  
  <!-- Texto -->
  <text x="600" y="280" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="white" text-anchor="middle">SONAR</text>
  <text x="600" y="350" font-family="Arial, sans-serif" font-size="32" fill="#e0e7ff" text-anchor="middle">TU BIENESTAR EN SINTONÍA</text>
  <text x="600" y="420" font-family="Arial, sans-serif" font-size="24" fill="#c7d2fe" text-anchor="middle">Musicoterapia y Psicología</text>
</svg>`;

// Función para crear directorio si no existe
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Guardar SVG del logo
const publicDir = path.join(__dirname, '..', 'public');
ensureDir(publicDir);

fs.writeFileSync(path.join(publicDir, 'logo.svg'), logoSVG);
console.log('✅ logo.svg creado');

// Guardar SVG de OG Image
fs.writeFileSync(path.join(publicDir, 'og-image.svg'), ogImageSVG);
console.log('✅ og-image.svg creado');

console.log('\n📝 Nota: Para generar PNG/JPG necesitas:');
console.log('1. Instalar canvas: npm install canvas --save-dev');
console.log('2. O usar una herramienta online para convertir SVG a PNG/JPG');
console.log('3. O usar ImageMagick: convert logo.svg logo.png');
console.log('\n💡 Alternativa: Usa https://cloudconvert.com/svg-to-png para convertir los SVG');

