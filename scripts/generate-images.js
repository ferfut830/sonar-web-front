// Script para generar logo.png, og-image.jpg y favicons desde SVG
// Requiere: npm install sharp --save-dev
// Ejecutar: node scripts/generate-images.js

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

async function generateImages() {
  try {
    console.log('🎨 Generando imágenes...\n');

    // Logo PNG (512x512)
    if (fs.existsSync(path.join(publicDir, 'logo.svg'))) {
      await sharp(path.join(publicDir, 'logo.svg'))
        .resize(512, 512)
        .png()
        .toFile(path.join(publicDir, 'logo.png'));
      console.log('✅ logo.png generado (512x512)');
    }

    // OG Image JPG (1200x630)
    if (fs.existsSync(path.join(publicDir, 'og-image.svg'))) {
      await sharp(path.join(publicDir, 'og-image.svg'))
        .resize(1200, 630)
        .jpeg({ quality: 90 })
        .toFile(path.join(publicDir, 'og-image.jpg'));
      console.log('✅ og-image.jpg generado (1200x630)');
    }

    // Favicon 32x32
    if (fs.existsSync(path.join(publicDir, 'logo.svg'))) {
      await sharp(path.join(publicDir, 'logo.svg'))
        .resize(32, 32)
        .png()
        .toFile(path.join(publicDir, 'favicon-32x32.png'));
      console.log('✅ favicon-32x32.png generado');
    }

    // Favicon 16x16
    if (fs.existsSync(path.join(publicDir, 'logo.svg'))) {
      await sharp(path.join(publicDir, 'logo.svg'))
        .resize(16, 16)
        .png()
        .toFile(path.join(publicDir, 'favicon-16x16.png'));
      console.log('✅ favicon-16x16.png generado');
    }

    // Apple Touch Icon (180x180)
    if (fs.existsSync(path.join(publicDir, 'logo.svg'))) {
      await sharp(path.join(publicDir, 'logo.svg'))
        .resize(180, 180)
        .png()
        .toFile(path.join(publicDir, 'apple-touch-icon.png'));
      console.log('✅ apple-touch-icon.png generado (180x180)');
    }

    console.log('\n✨ ¡Todas las imágenes generadas exitosamente!');
  } catch (error) {
    console.error('❌ Error generando imágenes:', error.message);
    console.log('\n💡 Alternativa: Usa una herramienta online como:');
    console.log('   - https://cloudconvert.com/svg-to-png');
    console.log('   - https://realfavicongenerator.net/');
  }
}

generateImages();

