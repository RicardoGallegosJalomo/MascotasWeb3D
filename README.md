# PetPrint 3D — Landing page Vite + Netlify

Landing page en React para promocionar figuras 3D personalizadas de mascotas vivas y conmemorativas.

## Requisitos

- Node.js instalado
- npm instalado

## Instalar

```bash
npm install
```

## Probar en computadora

```bash
npm run dev
```

Abre la URL que aparezca en terminal, normalmente:

```bash
http://localhost:5173
```

## Cambiar número de WhatsApp

Abre:

```bash
src/App.jsx
```

Busca esta línea:

```js
const WHATSAPP_NUMBER = "52TU_NUMERO";
```

Cámbiala por tu número real con lada de país, sin espacios ni signos.

Ejemplo para México:

```js
const WHATSAPP_NUMBER = "525512345678";
```

## Construir para producción

```bash
npm run build
```

Esto genera la carpeta:

```bash
dist
```

## Publicar en Netlify

### Opción 1: conectando GitHub

1. Sube esta carpeta a un repositorio de GitHub.
2. Entra a Netlify.
3. Selecciona “Add new site” > “Import an existing project”.
4. Conecta tu repositorio.
5. Netlify detectará la configuración desde `netlify.toml`.

Configuración esperada:

```bash
Build command: npm run build
Publish directory: dist
```

### Opción 2: arrastrar carpeta manualmente

1. Ejecuta:

```bash
npm run build
```

2. Entra a Netlify.
3. Ve a “Deploy manually”.
4. Arrastra la carpeta `dist`.

## Qué revisar en pruebas

- Que abra correctamente en celular.
- Que el botón de WhatsApp funcione.
- Que el mensaje se entienda.
- Que la página sea clara para mascotas vivas y fallecidas.
- Que el proceso foto → diseño 3D → impresión → caja personalizada sea evidente.
- Que no haya textos falsos antes de publicarla oficialmente.
