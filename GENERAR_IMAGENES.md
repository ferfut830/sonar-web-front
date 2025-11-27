# Guía para Generar Imágenes del Logo y Favicons

## 🎨 Archivos SVG Creados

He creado los siguientes archivos SVG que puedes convertir a PNG/JPG:

1. **`public/logo.svg`** - Logo de SONAR (512x512px)
2. **`public/og-image.svg`** - Imagen para Open Graph (1200x630px)
3. **`public/favicon.svg`** - Favicon (ya existe)

## 🔧 Opción 1: Usar Herramienta Online (Más Fácil)

### Para logo.png:
1. Ve a https://cloudconvert.com/svg-to-png
2. Sube `public/logo.svg`
3. Configura:
   - Width: 512px
   - Height: 512px
   - Background: Transparente o #1e40af
4. Descarga como `logo.png`
5. Colócalo en `/public/logo.png`

### Para og-image.jpg:
1. Ve a https://cloudconvert.com/svg-to-jpg
2. Sube `public/og-image.svg`
3. Configura:
   - Width: 1200px
   - Height: 630px
4. Descarga como `og-image.jpg`
5. Colócalo en `/public/og-image.jpg`

### Para Favicons:
1. Ve a https://realfavicongenerator.net/
2. Sube `public/favicon.svg` o `public/logo.svg`
3. Configura:
   - Android Chrome: 192x192 y 512x512
   - iOS: 180x180
   - Windows: 32x32 y 16x16
4. Descarga el paquete
5. Coloca los archivos en `/public/`

## 🔧 Opción 2: Usar Node.js con Canvas

Si tienes Node.js instalado:

```bash
# Instalar dependencias
npm install canvas --save-dev

# Ejecutar script (si lo creamos)
node scripts/generate-assets.js
```

## 🔧 Opción 3: Usar ImageMagick (Línea de Comandos)

Si tienes ImageMagick instalado:

```bash
# Logo PNG
convert public/logo.svg -resize 512x512 public/logo.png

# OG Image JPG
convert public/og-image.svg -resize 1200x630 public/og-image.jpg

# Favicons
convert public/logo.svg -resize 32x32 public/favicon-32x32.png
convert public/logo.svg -resize 16x16 public/favicon-16x16.png
convert public/logo.svg -resize 180x180 public/apple-touch-icon.png
```

## 📋 Archivos Necesarios

Una vez generados, necesitas estos archivos en `/public/`:

- ✅ `logo.png` (512x512px) - Ya existe como SVG
- ✅ `og-image.jpg` (1200x630px) - Ya existe como SVG
- ✅ `favicon-32x32.png` (32x32px)
- ✅ `favicon-16x16.png` (16x16px)
- ✅ `apple-touch-icon.png` (180x180px)

## ⚡ Solución Rápida con Next.js

Next.js ya está generando automáticamente:
- `app/icon.tsx` → Genera el favicon de 32x32
- `app/apple-icon.tsx` → Genera el icono de Apple (180x180)

Estos se generan automáticamente en build time. Solo necesitas:
1. Convertir `logo.svg` a `logo.png` (512x512)
2. Convertir `og-image.svg` a `og-image.jpg` (1200x630)

## 🎯 Recomendación

**Usa la Opción 1 (herramienta online)** - Es la más rápida y no requiere instalaciones adicionales.

